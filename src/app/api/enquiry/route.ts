import { NextResponse } from "next/server";

type EnquiryPayload = {
  fname: string;
  lname: string;
  mobile: string;
  selectclass: string;
  campus: string;
  email: string;
  intent?: string;
  sourcePath?: string;
  page_url?: string;
  childName?: string;
  message?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_device?: string;
  utm_term?: string;
  utm_content?: string;
  utm_age?: string;
  utm_gender?: string;
};

type ZohoCampusConfig = {
  campusKey: "bangalore" | "indore";
  zapikey?: string;
  oauthToken?: string;
  functionUrl: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidMobile(value: string) {
  return /^\+?\d[\d\s-]{8,16}$/.test(value.trim());
}

function clean(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "NA";
}

/** Zoho "website" fields reject localhost — map local URLs to the public domain. */
function resolvePageUrl(pageUrl: string | undefined, sourcePath: string | undefined) {
  const fallbackPath = sourcePath?.startsWith("/") ? sourcePath : `/${sourcePath || ""}`;
  const fallback = `https://theacademiccity.com${fallbackPath || "/"}`;
  const raw = pageUrl?.trim() || fallback;

  try {
    const url = new URL(raw);
    if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
      return `https://theacademiccity.com${url.pathname}${url.search}`;
    }
    return url.toString();
  } catch {
    return fallback;
  }
}

function normalizeCampus(campus: string): "bangalore" | "indore" {
  const value = campus.trim().toLowerCase();
  if (value.includes("indore")) return "indore";
  return "bangalore";
}

/** Map website campus labels to Zoho Preferred_Campus picklist values. */
function zohoPreferredCampus(campus: string): string {
  const key = normalizeCampus(campus);
  if (key === "indore") return "Indore";
  // Bangalore CRM views/picklists commonly use Bengaluru
  return "Bengaluru";
}

/**
 * Resolve Zoho CRM credentials by preferred campus.
 * Update keys in `.env.local` (local) or your host’s env settings (production).
 */
function getZohoConfigForCampus(campus: string): ZohoCampusConfig {
  const campusKey = normalizeCampus(campus);
  const defaultUrl =
    "https://www.zohoapis.in/crm/v7/functions/newwebsitecreatelead/actions/execute";

  if (campusKey === "indore") {
    return {
      campusKey,
      zapikey: process.env.ZOHO_INDORE_ZAPI_KEY?.trim() || undefined,
      oauthToken: process.env.ZOHO_INDORE_OAUTH_TOKEN?.trim() || undefined,
      functionUrl:
        process.env.ZOHO_INDORE_FUNCTION_URL?.trim() ||
        process.env.ZOHO_FUNCTION_URL?.trim() ||
        defaultUrl,
    };
  }

  return {
    campusKey,
    // Prefer campus-specific key; fall back to legacy ZOHO_ZAPI_KEY
    zapikey:
      process.env.ZOHO_BANGALORE_ZAPI_KEY?.trim() ||
      process.env.ZOHO_ZAPI_KEY?.trim() ||
      undefined,
    oauthToken:
      process.env.ZOHO_BANGALORE_OAUTH_TOKEN?.trim() ||
      process.env.ZOHO_OAUTH_TOKEN?.trim() ||
      undefined,
    functionUrl:
      process.env.ZOHO_BANGALORE_FUNCTION_URL?.trim() ||
      process.env.ZOHO_FUNCTION_URL?.trim() ||
      defaultUrl,
  };
}

export async function POST(request: Request) {
  let body: EnquiryPayload;

  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const { fname, lname, mobile, selectclass, campus, email } = body;

  if (!fname?.trim() || !lname?.trim() || !selectclass || !campus || !email?.trim()) {
    return NextResponse.json(
      { success: false, message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!isValidMobile(mobile)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid mobile number." },
      { status: 400 },
    );
  }

  const zoho = getZohoConfigForCampus(campus);
  const hasAuth = Boolean(zoho.zapikey || zoho.oauthToken);

  if (!hasAuth) {
    console.error(`[enquiry] Zoho credentials missing for campus "${zoho.campusKey}".`);
    return NextResponse.json(
      {
        success: false,
        message:
          process.env.NODE_ENV === "development"
            ? `Zoho keys missing for ${zoho.campusKey}. Check .env.local and restart the dev server.`
            : "Lead service is temporarily unavailable.",
      },
      { status: 503 },
    );
  }

  const pageUrl = resolvePageUrl(body.page_url, body.sourcePath);

  const leadData = {
    params: {
      First_Name: fname.trim(),
      Last_Name: lname.trim(),
      Email: email.trim(),
      Mobile: mobile.trim(),
      Preferred_Campus: zohoPreferredCampus(campus),
      Class_Looking_For: selectclass,
      URL: pageUrl,
      Message: body.message?.trim() || "NA",
      UTM_Source: clean(body.utm_source),
      UTM_Medium: clean(body.utm_medium),
      Ad_Group: clean(body.utm_campaign),
      UTM_Device: clean(body.utm_device),
      UTM_Term: clean(body.utm_term),
      UTM_Content: clean(
        body.utm_content ||
          (body.intent === "brochure"
            ? "Brochure Download"
            : body.intent === "contact"
              ? "Contact Form"
              : "General Enquiry"),
      ),
      UTM_Age_Group: clean(body.utm_age),
      UTM_Gender_Group: clean(body.utm_gender),
    },
  };

  try {
    const url = new URL(zoho.functionUrl);
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // Prefer API key auth when zapikey is set; otherwise OAuth bearer token.
    if (zoho.zapikey) {
      url.searchParams.set("auth_type", "apikey");
      url.searchParams.set("zapikey", zoho.zapikey);
    } else if (zoho.oauthToken) {
      url.searchParams.set("auth_type", "oauth");
      headers.Authorization = `Zoho-oauthtoken ${zoho.oauthToken}`;
    }

    const zohoResponse = await fetch(url.toString(), {
      method: "POST",
      headers,
      body: JSON.stringify(leadData),
      cache: "no-store",
    });

    const zohoPayload = (await zohoResponse.json().catch(() => null)) as {
      code?: string;
      message?: string;
      details?: { output?: string };
    } | null;

    const zohoCode = zohoPayload?.code?.toLowerCase();
    const nestedOutput = zohoPayload?.details?.output;
    type ZohoNestedOutput = {
      code?: string;
      message?: string;
      id?: string;
      status?: string;
    };
    let nested: ZohoNestedOutput | null = null;
    if (typeof nestedOutput === "string") {
      try {
        nested = JSON.parse(nestedOutput) as ZohoNestedOutput;
      } catch {
        nested = null;
      }
    }

    const nestedFailed =
      nested?.status === "error" &&
      nested.code !== "DUPLICATE_DATA" &&
      !nested.id;

    if (!zohoResponse.ok || zohoCode !== "success" || nestedFailed) {
      console.error(
        `[enquiry] Zoho request failed (${zoho.campusKey}):`,
        zohoResponse.status,
        zohoPayload,
      );
      return NextResponse.json(
        {
          success: false,
          message: "Could not submit your enquiry. Please try again.",
          ...(process.env.NODE_ENV === "development"
            ? { zoho: { code: zohoPayload?.code, message: zohoPayload?.message, nested } }
            : {}),
        },
        { status: 502 },
      );
    }

    if (process.env.NODE_ENV === "development") {
      console.info(`[enquiry] Zoho response (${zoho.campusKey}):`, {
        code: zohoPayload?.code,
        leadId: nested?.id,
        nestedCode: nested?.code,
      });
    }

    return NextResponse.json({
      success: true,
      message:
        nested?.code === "DUPLICATE_DATA"
          ? "Lead already exists; enquiry recorded."
          : "Lead added successfully",
      campus: zoho.campusKey,
      ...(process.env.NODE_ENV === "development" && nested?.id ? { leadId: nested.id } : {}),
    });
  } catch (error) {
    console.error(`[enquiry] Zoho CRM integration error (${zoho.campusKey}):`, error);
    return NextResponse.json(
      { success: false, message: "Could not submit your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
