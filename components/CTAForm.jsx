"use client"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { ArrowRight } from "lucide-react"
import styles from "../styles/components/cta-section.module.css"
import { useRouter } from "next/navigation"

const CTAForm = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
    },
  })

  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState("")
  const router = useRouter()

  const onSubmit = async (data) => {
    setSubmitError("")
    setSubmitSuccess("")

    try {
      const res = await axios.post("/api/cta", data)

      if (res.data.success) {
        setSubmitSuccess("Request sent successfully!")
        reset()
        
        // Function to close modal and redirect
        const closeModalAndRedirect = () => {
          const modalElement = document.getElementById("ctaModal")
          
          if (modalElement && typeof window !== 'undefined' && window.bootstrap) {
            try {
              // Try to get existing modal instance
              let modalInstance = window.bootstrap.Modal.getInstance(modalElement)
              
              // If no instance exists, create a new one
              if (!modalInstance) {
                modalInstance = new window.bootstrap.Modal(modalElement)
              }
              
              // Hide the modal
              modalInstance.hide()
              
              // Wait for modal to close completely, then redirect
              modalElement.addEventListener('hidden.bs.modal', () => {
                // Ensure backdrop is completely removed
                const backdrops = document.querySelectorAll('.modal-backdrop')
                backdrops.forEach(backdrop => backdrop.remove())
                
                // Ensure body classes are cleaned up
                document.body.classList.remove('modal-open')
                document.body.style.overflow = ''
                document.body.style.paddingRight = ''
                
                router.push("/thank-you")
              }, { once: true })
              
            } catch (error) {
              console.warn("Bootstrap modal error, using fallback:", error)
              // Fallback: hide modal manually and redirect
              modalElement.style.display = 'none'
              modalElement.classList.remove('show')
              
              // Remove all backdrops
              const backdrops = document.querySelectorAll('.modal-backdrop')
              backdrops.forEach(backdrop => backdrop.remove())
              
              // Clean up body classes and styles
              document.body.classList.remove('modal-open')
              document.body.style.overflow = ''
              document.body.style.paddingRight = ''
              
              setTimeout(() => {
                router.push("/thank-you")
              }, 300)
            }
          } else {
            // Bootstrap not available or modal not found - redirect directly
            console.warn("Bootstrap not available or modal not found")
            
            // Clean up any existing modal state
            if (modalElement) {
              modalElement.style.display = 'none'
              modalElement.classList.remove('show')
            }
            
            // Remove all backdrops
            const backdrops = document.querySelectorAll('.modal-backdrop')
            backdrops.forEach(backdrop => backdrop.remove())
            
            // Clean up body classes and styles
            document.body.classList.remove('modal-open')
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
            
            setTimeout(() => {
              router.push("/thank-you")
            }, 500)
          }
        }
        
        // Wait a bit for Bootstrap to load, then close modal
        setTimeout(closeModalAndRedirect, 100)
        
        if (onSuccess) onSuccess(data)
      } else {
        setSubmitError(res.data.error || "Failed to send request. Please try again.")
      }
    } catch (error) {
      console.error(error)
      setSubmitError("Network error. Please try again later.")
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {submitError && <div className="alert alert-danger">{submitError}</div>}
      {submitSuccess && <div className="alert alert-success">{submitSuccess}</div>}

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

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Get Free Quote"} <ArrowRight size={18} />
      </button>

      <p className={styles.privacy}>
        🔒 Your information is secure and will never be shared
      </p>
    </form>
  )
}

export default CTAForm
