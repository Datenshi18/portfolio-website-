"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContactSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECT_TYPES = [
  "Select project type",
  "Web Design",
  "Web Development",
  "UI/UX Systems",
  "Performance Optimization",
  "Branding",
  "Full Package",
];

const BUDGET_RANGES = [
  "Select budget range",
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

const initialFormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  description: "",
};

export default function ContactSection() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ── Entrance Animations ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          formRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Set initial states for stagger
      gsap.set([labelRef.current, headlineRef.current, subtextRef.current], {
        y: 40,
      });
      gsap.set(formRef.current, { y: 60 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Success animation ──
  useEffect(() => {
    if (submitted && successRef.current && formRef.current) {
      const tl = gsap.timeline();

      tl.to(formRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in",
      }).to(successRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      // Success icon pulse
      gsap.fromTo(
        successRef.current.querySelector(`.${styles.successIcon}`),
        { scale: 0, rotation: -10 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          delay: 0.5,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [submitted]);

  // ── Validation ──
  const validate = useCallback(() => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.projectType) newErrors.projectType = "Select a project type";
    if (!form.budget) newErrors.budget = "Select a budget range";
    if (!form.description.trim())
      newErrors.description = "Tell us about your project";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  // ── Form Handlers ──
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={styles.contactSection}
      ref={sectionRef}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.headerGroup}>
          <span className={styles.label} ref={labelRef}>
            Get in Touch
          </span>
          <h2 className={styles.headline} ref={headlineRef}>
            Let&apos;s build something
            <br />
            that <span className={styles.headlineAccent}>stands out.</span>
          </h2>
          <p className={styles.subtext} ref={subtextRef}>
            Ready to elevate your digital presence? Tell us about your
            project and we&apos;ll craft something extraordinary.
          </p>
        </div>

        <form
          className={styles.form}
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Name */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={`${styles.formInput} ${
                errors.name ? styles.inputError : ""
              }`}
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className={`${styles.formInput} ${
                errors.email ? styles.inputError : ""
              }`}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          {/* Project Type */}
          <div className={styles.formGroup}>
            <label
              className={styles.formLabel}
              htmlFor="contact-project-type"
            >
              Project Type
            </label>
            <select
              id="contact-project-type"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className={`${styles.formSelect} ${
                errors.projectType ? styles.inputError : ""
              }`}
            >
              {PROJECT_TYPES.map((type, i) => (
                <option key={type} value={i === 0 ? "" : type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <span className={styles.errorText}>{errors.projectType}</span>
            )}
          </div>

          {/* Budget */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-budget">
              Budget
            </label>
            <select
              id="contact-budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={`${styles.formSelect} ${
                errors.budget ? styles.inputError : ""
              }`}
            >
              {BUDGET_RANGES.map((range, i) => (
                <option key={range} value={i === 0 ? "" : range}>
                  {range}
                </option>
              ))}
            </select>
            {errors.budget && (
              <span className={styles.errorText}>{errors.budget}</span>
            )}
          </div>

          {/* Description */}
          <div className={styles.formGroupFull}>
            <label
              className={styles.formLabel}
              htmlFor="contact-description"
            >
              Project Description
            </label>
            <textarea
              id="contact-description"
              name="description"
              placeholder="Tell us about your vision, goals, and timeline..."
              value={form.description}
              onChange={handleChange}
              className={`${styles.formTextarea} ${
                errors.description ? styles.inputError : ""
              }`}
            />
            {errors.description && (
              <span className={styles.errorText}>{errors.description}</span>
            )}
          </div>

          {/* Submit */}
          <div className={styles.submitWrapper}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Start Your Project"}
            </button>
          </div>
        </form>

        {/* Success State */}
        <div
          className={`${styles.successOverlay} ${
            submitted ? styles.visible : ""
          }`}
          ref={successRef}
        >
          <div className={styles.successIcon}>✓</div>
          <h3 className={styles.successTitle}>Message Sent</h3>
          <p className={styles.successSubtext}>
            We&apos;ve received your inquiry and will get back to you
            within 24 hours. Great things are on the horizon.
          </p>
        </div>
      </div>
    </section>
  );
}
