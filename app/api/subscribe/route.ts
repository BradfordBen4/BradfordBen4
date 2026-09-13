import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, source } = await request.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Stub: no email service provider is configured yet. Once one is (e.g.
  // Mailchimp, ConvertKit, Resend), swap this block for the real API call.
  console.log(`Newsletter signup: ${email} (source: ${source ?? "unknown"})`);

  return NextResponse.json({ ok: true });
}
