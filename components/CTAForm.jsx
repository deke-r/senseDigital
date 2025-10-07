"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { ArrowRight } from "lucide-react"
import styles from "../styles/components/cta-section.module.css"

const CTAForm = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    // 🔧 TODO: Replace with API or email logic here
    if (onSuccess) onSuccess(data)
    reset()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <input
        type="text"
        placeholder="Your Name"
        className={styles.input}
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        className={styles.input}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone Number"
        className={styles.input}
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Enter a valid 10-digit phone number",
          },
        })}
      />
      {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

      {/* Service */}
      <select
        className={styles.select}
        {...register("service", { required: "Please select a service" })}
      >
        <option value="">Select Service</option>
        <option value="web-development">Web Development</option>
        <option value="mobile-app">Mobile App Development</option>
        <option value="digital-marketing">Digital Marketing</option>
        <option value="seo">SEO Services</option>
        <option value="graphic-design">Graphic Design</option>
        <option value="other">Other</option>
      </select>
      {errors.service && <p className={styles.error}>{errors.service.message}</p>}

      <button type="submit" className={styles.submitBtn}>
        Get Free Quote
        <ArrowRight size={18} />
      </button>

      <p className={styles.privacy}>
        🔒 Your information is secure and will never be shared
      </p>
    </form>
  )
}

export default CTAForm
