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

  const zapikey = process.env.ZOHO_ZAPI_KEY;
  const endpoint =
    process.env.ZOHO_FUNCTION_URL ??
    "https://www.zohoapis.in/crm/v7/functions/newwebsitecreatelead/actions/execute";

  if (!zapikey) {
    console.error("[enquiry] ZOHO_ZAPI_KEY is not configured.");
    if (process.env.NODE_ENV === "development") {
      console.info("[enquiry] Skipping Zoho in development:", {
        fname: fname.trim(),
        lname: lname.trim(),
        email: email.trim(),
        campus,
        selectclass,
      });
      return NextResponse.json({ success: true, skipped: true });
    }
    return NextResponse.json(
      { success: false, message: "Lead service is temporarily unavailable." },
      { status: 503 },
    );
  }

  const pageUrl =
    body.page_url?.trim() ||
    (body.sourcePath ? `https://theacademiccity.com${body.sourcePath}` : "NA");

  const leadData = {
    params: {
      First_Name: fname.trim(),
      Last_Name: lname.trim(),
      Email: email.trim(),
      Mobile: mobile.trim(),
      Preferred_Campus: campus,
      Class_Looking_For: selectclass,
      URL: pageUrl,
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
    const url = new URL(endpoint);
    url.searchParams.set("auth_type", "apikey");
    url.searchParams.set("zapikey", zapikey);

    const zohoResponse = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
      cache: "no-store",
    });

    const zohoPayload = (await zohoResponse.json().catch(() => null)) as unknown;

    if (!zohoResponse.ok) {
      console.error("[enquiry] Zoho request failed:", zohoResponse.status, zohoPayload);
      return NextResponse.json(
        {
          success: false,
          message: "Could not submit your enquiry. Please try again.",
        },
        { status: 502 },
      );
    }

    if (process.env.NODE_ENV === "development") {
      console.info("[enquiry] Zoho response:", zohoPayload);
    }

    return NextResponse.json({ success: true, message: "Lead added successfully" });
  } catch (error) {
    console.error("[enquiry] Zoho CRM integration error:", error);
    return NextResponse.json(
      { success: false, message: "Could not submit your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
