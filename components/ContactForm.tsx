"use client";

import React, { useState } from "react";
import { sendContactForm, ContactFormData } from "@/lib/contactService";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 3000) {
      newErrors.message = "Message cannot exceed 3000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate rapid submissions (5-second client-side rate limit)
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      setResponseMessage("Please wait a few seconds before submitting again.");
      setStatus("error");
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    setResponseMessage("");

    const res = await sendContactForm(formData);
    setLastSubmitTime(Date.now());

    if (res.success) {
      setStatus("success");
      setResponseMessage(res.message);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } else {
      setStatus("error");
      setResponseMessage(res.message);
    }
  };

  return (
    <div className="contact-form-wrapper">
      {status === "success" ? (
        <div className="contact-success-card">
          <div className="success-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3>Message Sent!</h3>
          <p>{responseMessage}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setStatus("idle");
              setResponseMessage("");
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {/* Honeypot anti-spam field (hidden visually) */}
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          {status === "error" && responseMessage && (
            <div className="form-error-banner" role="alert">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="error-icon"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{responseMessage}</span>
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="req">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "submitting"}
                className={errors.name ? "input-error" : ""}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="req">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "submitting"}
                className={errors.email ? "input-error" : ""}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <span className="field-error">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What would you like to discuss?"
              value={formData.subject}
              onChange={handleChange}
              disabled={status === "submitting"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message <span className="req">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project, idea, or inquiry..."
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              className={errors.message ? "input-error" : ""}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <span className="field-error">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary submit-btn"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <span className="spinner"></span>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="send-icon"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
