"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { useDarkMode } from "../context/DarkModeContext";
import styles from "../styles/components/contact-form.module.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const { isDarkMode } = useDarkMode();

  const onSubmit = async (data) => {
    setSubmitError("");
    setSubmitSuccess("");

    try {
      const res = await axios.post("/api/contact", data);

      if (res.data.success) {
        setSubmitSuccess("Message sent successfully!");
        reset();

        const modalElement = document.getElementById("ctaModal")
        if (modalElement) {
          const modalInstance = bootstrap.Modal.getInstance(modalElement)
          if (modalInstance) modalInstance.hide()
        }

        setTimeout(() => {
          router.push("/thank-you");
        }, 1500);
      } else {
        setSubmitError(res.data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSubmitError("Network error. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.contactForm} ${isDarkMode ? styles.darkMode : styles.lightMode}`}
    >
      {/* Name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={`form-control ${styles.input} ${errors.name ? "is-invalid" : ""}`}
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${styles.input} ${errors.email ? "is-invalid" : ""}`}
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      {/* Phone */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className={`form-control ${styles.input} ${errors.phone ? "is-invalid" : ""}`}
          id="phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^\+?[0-9]{7,15}$/,
              message: "Invalid phone number (7-15 digits)",
            },
          })}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
      </div>

      {/* Message */}
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className={`form-control ${styles.textarea} ${errors.message ? "is-invalid" : ""}`}
          id="message"
          rows="5"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        ></textarea>
        {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
      </div>

      {/* Bootstrap Alerts */}
      {submitError && <div className="alert alert-danger">{submitError}</div>}
      {submitSuccess && <div className="alert alert-success">{submitSuccess}</div>}

      {/* Submit Button */}
      <button type="submit" className={`btn ${styles.submitButton}`} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
