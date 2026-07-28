import type { APIRoute } from "astro";

export const prerender = false;

type InquiryType = "contact" | "briefing";

const VALID_TYPES = new Set<InquiryType>(["contact", "briefing"]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const jsonResponse = (
  body: Record<string, unknown>,
  status = 200,
) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });

const asString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const getEnvironmentVariable = (name: string) => {
  const processValue = globalThis.process?.env?.[name];
  const importMetaValue = (import.meta.env as Record<string, unknown>)[name];

  return String(processValue ?? importMetaValue ?? "").trim();
};

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown>;

  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    }
  } catch {
    return jsonResponse(
      {
        ok: false,
        error: "The submission could not be read.",
      },
      400,
    );
  }

  const type = asString(payload.type) as InquiryType;
  const name = asString(payload.name);
  const email = asString(payload.email);
  const company = asString(payload.company);
  const role = asString(payload.role);
  const phone = asString(payload.phone);
  const subject = asString(payload.subject);
  const message = asString(payload.message);

  // Optional hidden honeypot field.
  const website = asString(payload.website);

  if (website) {
    return jsonResponse({ ok: true });
  }

  if (!VALID_TYPES.has(type)) {
    return jsonResponse(
      {
        ok: false,
        error: "Invalid inquiry type.",
      },
      400,
    );
  }

  if (!name) {
    return jsonResponse(
      {
        ok: false,
        error: "Name is required.",
      },
      400,
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return jsonResponse(
      {
        ok: false,
        error: "A valid email address is required.",
      },
      400,
    );
  }

  if (!message) {
    return jsonResponse(
      {
        ok: false,
        error: "Message is required.",
      },
      400,
    );
  }

  if (name.length > 200 || email.length > 320) {
    return jsonResponse(
      {
        ok: false,
        error: "One or more fields are too long.",
      },
      400,
    );
  }

  if (
    company.length > 200 ||
    role.length > 200 ||
    phone.length > 100 ||
    subject.length > 300 ||
    message.length > 10_000
  ) {
    return jsonResponse(
      {
        ok: false,
        error: "One or more fields are too long.",
      },
      400,
    );
  }

  const apiKey = getEnvironmentVariable("RESEND_API_KEY");
  const fromEmail = getEnvironmentVariable("RESEND_FROM_EMAIL");
  const toEmail = getEnvironmentVariable("RESEND_TO_EMAIL");

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Missing Resend environment variables.");

    return jsonResponse(
      {
        ok: false,
        error: "Email delivery is not configured.",
      },
      500,
    );
  }

  const inquiryLabel =
    type === "briefing" ? "Briefing Request" : "Contact Inquiry";

  const emailSubject =
    subject || `${inquiryLabel} from ${name}`;

  const rows = [
    ["Inquiry type", inquiryLabel],
    ["Name", name],
    ["Email", email],
    ["Company", company],
    ["Role", role],
    ["Phone", phone],
  ].filter(([, value]) => value);

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;font-weight:700;vertical-align:top;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:8px 12px;vertical-align:top;">
            ${escapeHtml(value)}
          </td>
        </tr>
      `,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;">
      <h1 style="font-size:22px;margin:0 0 20px;">
        ${escapeHtml(inquiryLabel)}
      </h1>

      <table
        style="border-collapse:collapse;width:100%;max-width:700px;margin-bottom:24px;"
      >
        ${htmlRows}
      </table>

      <h2 style="font-size:17px;margin:0 0 8px;">Message</h2>

      <div
        style="white-space:pre-wrap;padding:16px;border:1px solid #d1d5db;
        border-radius:6px;background:#f9fafb;"
      >${escapeHtml(message)}</div>
    </div>
  `;

  const text = [
    inquiryLabel,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Lozen Advisory Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: emailSubject,
        html,
        text,
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Resend API error:", result);

      return jsonResponse(
        {
          ok: false,
          error: "The message could not be sent.",
        },
        502,
      );
    }

    return jsonResponse({
      ok: true,
      message: "Your inquiry was sent.",
    });
  } catch (error) {
    console.error("Inquiry endpoint error:", error);

    return jsonResponse(
      {
        ok: false,
        error: "The message could not be sent.",
      },
      500,
    );
  }
};

export const ALL: APIRoute = async () =>
  jsonResponse(
    {
      ok: false,
      error: "Method not allowed.",
    },
    405,
  );
