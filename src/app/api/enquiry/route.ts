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
  childName?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidMobile(value: string) {
  return /^\+?\d[\d\s-]{8,16}$/.test(value.trim());
}

export async function POST(request: Request) {
  let body: EnquiryPayload;

  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const { fname, lname, mobile, selectclass, campus, email } = body;

  if (!fname.trim() || !lname.trim() || !selectclass || !campus || !email.trim()) {
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

  const lead = {
    fname: fname.trim(),
    lname: lname.trim(),
    mobile: mobile.trim(),
    selectclass,
    campus,
    email: email.trim(),
    childName: body.childName?.trim() || undefined,
    message: body.message?.trim() || undefined,
    Lead_Source_Category: "Digital Organic",
    Lead_Source: "Website",
    Lead_Sub_Source: body.sourcePath ?? "/",
    Lead_Super_Sub_Source:
      body.intent === "brochure"
        ? "Brochure Download"
        : body.intent === "contact"
          ? "Contact Form"
          : "General Enquiry",
  };

  // Placeholder for CRM integration — wire Zoho or another provider here when credentials are available.
  if (process.env.NODE_ENV === "development") {
    console.info("[enquiry]", lead);
  }

  return NextResponse.json({ success: true });
}
