import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string" || !name.trim() || !message.trim() || !emailPattern.test(email.trim())) {
      return NextResponse.json({ error: "Please provide a name, valid email address, and message." }, { status: 400 });
    }
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["Sadath Khan <sadathkhan717@gmail.com>"],
        reply_to: email.trim(),
        subject: `Portfolio message from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      }),
    });
    if (!response.ok) return NextResponse.json({ error: "Unable to send your message. Please try again." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send your message. Please try again." }, { status: 500 });
  }
}
