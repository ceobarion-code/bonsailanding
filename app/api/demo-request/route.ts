import { NextRequest, NextResponse } from "next/server";

type DemoRequestPayload = {
  name?: string;
  company?: string;
  position?: string;
  email?: string;
  phone?: string;
  honeypot?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validatePayload(payload: DemoRequestPayload): { valid: boolean; error?: string } {
  const name = payload.name?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";

  if (!name || name.length < 2) {
    return { valid: false, error: "Invalid name" };
  }

  if (!company) {
    return { valid: false, error: "Invalid company" };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: "Invalid email" };
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (!phone || phoneDigits.length < 7 || phoneDigits.length > 15) {
    return { valid: false, error: "Invalid phone" };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as DemoRequestPayload;

    // Silent spam rejection for bots filling hidden fields.
    if ((body.honeypot ?? "").trim()) {
      return NextResponse.json({ success: true });
    }

    const validation = validatePayload(body);
    if (!validation.valid) {
      return NextResponse.json({ success: false, error: validation.error }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json({ success: false, error: "Server is not configured" }, { status: 500 });
    }

    const name = body.name?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const position = body.position?.trim();
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const sentAt = new Date().toISOString();
    const userAgent = request.headers.get("user-agent");

    const lines = [
      "<b>New Bons AI demo request</b>",
      "",
      `<b>Name:</b> ${escapeHtml(name)}`,
      `<b>Company:</b> ${escapeHtml(company)}`,
      `<b>Position:</b> ${escapeHtml(position || "-")}`,
      `<b>Email:</b> ${escapeHtml(email)}`,
      `<b>Phone:</b> ${escapeHtml(phone)}`,
      "",
      "<b>Source:</b> Website landing page",
      `<b>Submitted at:</b> ${escapeHtml(sentAt)}`,
    ];

    if (userAgent) {
      lines.push(`<b>User Agent:</b> ${escapeHtml(userAgent)}`);
    }

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const telegramResult = (await telegramResponse.json()) as { ok?: boolean; description?: string };

    if (!telegramResponse.ok || !telegramResult.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Telegram API request failed",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Unexpected server error" }, { status: 500 });
  }
}
