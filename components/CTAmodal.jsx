"use client"
import React from "react"
import { ArrowRight } from "lucide-react"
import styles from "../styles/components/cta-section.module.css"
import CTAForm from "./CTAForm"

const CTAModal = () => {


  return (
    <div
      className="modal fade"
      id="ctaModal"
      tabIndex="-1"
      aria-labelledby="ctaModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold" id="ctaModalLabel">
              Get Started Today
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <p className="mb-3 text-secondary">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

          <CTAForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTAModal
