export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  website?: string; // Honeypot field for anti-spam
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export async function sendContactForm(
  data: ContactFormData
): Promise<ContactResponse> {
  const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;

  // Honeypot check: If the hidden 'website' field is populated, it's a bot submission.
  if (data.website && data.website.trim().length > 0) {
    // Silently pretend success to trick spambots without actually triggering Make.com
    return {
      success: true,
      message: "Thank you for reaching out!",
    };
  }

  if (!webhookUrl) {
    console.warn(
      "Make.com Webhook URL is missing. Set NEXT_PUBLIC_MAKE_WEBHOOK_URL in your .env.local file."
    );
    return {
      success: false,
      message:
        "Contact service is currently unconfigured. Please set NEXT_PUBLIC_MAKE_WEBHOOK_URL in your environment or email directly.",
    };
  }

  // Basic sanitization
  const payload = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    subject: data.subject?.trim() || "No Subject",
    message: data.message.trim(),
    submittedAt: new Date().toISOString(),
    source: "Portfolio Website",
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 second timeout

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      return {
        success: true,
        message: "Message sent successfully! Thanks for reaching out. I'll get back to you soon.",
      };
    } else {
      let errText = "Failed to send message.";
      try {
        const errJson = await response.json();
        if (errJson && errJson.message) {
          errText = errJson.message;
        }
      } catch {
        // Response wasn't JSON
      }
      return {
        success: false,
        message: `Server returned an error (${response.status}). ${errText}`,
      };
    }
  } catch (err: unknown) {
    if (err instanceof Error && err.name === "AbortError") {
      return {
        success: false,
        message: "Request timed out. Please check your network connection and try again.",
      };
    }

    return {
      success: false,
      message:
        "Unable to send message right now. Please check your internet connection or email directly.",
    };
  }
}
