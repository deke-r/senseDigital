"use client"

import { useState } from "react"
import styles from "../styles/components/lead-input.module.css"

export default function LeadInput() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [thankYou, setThankYou] = useState(false)
  const [error, setError] = useState("")

  const validatePhoneNumber = (number) => {
    const numericPhoneNumber = number.replace(/\D/g, "") // Remove non-digits
    if (numericPhoneNumber.length < 7 || numericPhoneNumber.length > 15) {
      return "Phone number must be between 7 and 15 digits."
    }
    return ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setThankYou(false)
    setIsSubmitting(true)

    const validationError = validatePhoneNumber(phoneNumber)
    if (validationError) {
      setError(validationError)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      })

      if (response.ok) {
        setThankYou(true)
        setPhoneNumber("")
      } else {
        const errorData = await response.json()
        setError(errorData.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.leadInputContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="tel"
          className={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          disabled={isSubmitting}
          required
        />
        <button type="submit" className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Booking..." : "Book Consultation"}
        </button>
      </form>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {thankYou && <p className={styles.thankYouMessage}>Thank you for your inquiry! We will contact you shortly.</p>}
    </div>
  )
}
