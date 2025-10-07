"use client"
import React from "react"


const CTATriggerButton = ({ text = "Get Free Quote", variant = "primary", className = "" }) => {
  return (
    <button
      type="button"
      className={`btn btn-${variant} rounded-0 px-4 ${className}`}
      data-bs-toggle="modal"
      data-bs-target="#ctaModal"
    >
      {text}
    </button>
  )
}

export default CTATriggerButton
