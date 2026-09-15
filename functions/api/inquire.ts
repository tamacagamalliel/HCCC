/**
 * Cloudflare Pages Function — mirrors the former Next.js /api/inquire route.
 */

type InquiryBody = {
  fullName?: string;
  email?: string;
  mobile?: string;
  inquiryType?: string;
  programOrLevel?: string;
  message?: string;
  website?: string;
};

const rateMap = new Map<string, { count: number; resetAt: number }>();

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function getClientIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function allowRequest(ip: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 5;
  const current = rateMap.get(ip);

  if (!current || current.resetAt < now) {
    rateMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (current.count >= max) return false;
  current.count += 1;
  rateMap.set(ip, current);
  return true;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function onRequestPost(context: { request: Request }) {
  try {
    const { request } = context;
    const ip = getClientIp(request);
    if (!allowRequest(ip)) {
      return json({ error: "Too many inquiries. Please try again in a minute." }, 429);
    }

    const body = (await request.json()) as InquiryBody;
    const fullName = String(body.fullName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const mobile = String(body.mobile ?? "").trim();
    const inquiryType = String(body.inquiryType ?? "").trim();
    const programOrLevel = String(body.programOrLevel ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "");

    if (
      fullName.length < 2 ||
      fullName.length > 120 ||
      !isValidEmail(email) ||
      email.length > 160 ||
      mobile.length < 7 ||
      mobile.length > 30 ||
      inquiryType.length < 1 ||
      inquiryType.length > 80 ||
      message.length < 10 ||
      message.length > 2000 ||
      programOrLevel.length > 120
    ) {
      return json({ error: "Invalid inquiry payload." }, 400);
    }

    // Honeypot
    if (website.length > 0) {
      return json({ ok: true });
    }

    console.info("[HCCC inquiry]", {
      at: new Date().toISOString(),
      inquiryType,
      programOrLevel: programOrLevel || null,
    });

    return json({ ok: true });
  } catch {
    return json({ error: "Unable to process inquiry." }, 500);
  }
}
