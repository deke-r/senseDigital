"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/components/banner.module.css";

const Banner = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (data) => {
    console.log("Lead submitted:", data);
    alert(`Thank you! We will contact you at ${data.mobile}`);
    reset();
  };

  return (
    <section className={styles.banner}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className={`col-md-8  ${styles.textContent} ${animateText ? styles.animateText : ""}`}>
            <h1 className={styles.heading}>
              Digital Marketing, Web & App Development
            </h1>
            <p className={styles.subheading}>
              We grow your brand with smart marketing, powerful apps, and quality backlinks.
            </p>
          </div>

          {/* Right Form */}
          <div className={`col-md-4  ${styles.formWrapper} ${animateText ? styles.animateForm : ""}`}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.leadForm}>
              <input
                type="tel"
                placeholder="Enter mobile number"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
                className={`${styles.input} ${errors.mobile ? styles.errorInput : ""}`}
              />
              <button type="submit" className={styles.submitBtn}>
                Get Started
              </button>
              {errors.mobile && <p className={styles.errorMsg}>{errors.mobile.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
