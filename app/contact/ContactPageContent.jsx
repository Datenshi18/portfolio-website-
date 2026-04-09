'use client'

import React, { useState, useCallback } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import styles from './contact.module.css';

const PROJECT_TYPES = [
  'Select project type',
  'Web Design',
  'Web Development',
  'UI/UX Systems',
  'Performance Optimization',
  'Branding',
  'Full Package',
];

const BUDGET_RANGES = [
  'Select budget range',
  'Under $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000+',
];

const initialFormState = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  description: '',
};

export default function ContactPageContent() {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!form.projectType) newErrors.projectType = 'Select a project type';
    if (!form.budget) newErrors.budget = 'Select a budget range';
    if (!form.description.trim()) newErrors.description = 'Tell us about your project';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className={styles.contactPage}>
      <div className={styles.content}>
        {/* Header */}
        <ScrollReveal className={styles.header}>
          <span className={`${styles.label} fade-up`}>• Get in Touch</span>
          <h1 className={`${styles.headline} fade-up`}>
            Let&apos;s build something <span className={styles.accent}>that stands out.</span>
          </h1>
          <p className={`${styles.subtext} fade-up`}>
            Ready to elevate your digital presence? Tell us about your project
            and we&apos;ll craft something extraordinary.
          </p>
        </ScrollReveal>

        {/* Form or Success */}
        {!submitted ? (
          <ScrollReveal>
            <form className={`${styles.form} fade-up`} onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="page-contact-name">Name</label>
                <input
                  id="page-contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="page-contact-email">Email</label>
                <input
                  id="page-contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              {/* Project Type */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="page-contact-project-type">Project Type</label>
                <select
                  id="page-contact-project-type"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={`${styles.formSelect} ${errors.projectType ? styles.inputError : ''}`}
                >
                  {PROJECT_TYPES.map((type, i) => (
                    <option key={type} value={i === 0 ? '' : type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && <span className={styles.errorText}>{errors.projectType}</span>}
              </div>

              {/* Budget */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="page-contact-budget">Budget</label>
                <select
                  id="page-contact-budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${styles.formSelect} ${errors.budget ? styles.inputError : ''}`}
                >
                  {BUDGET_RANGES.map((range, i) => (
                    <option key={range} value={i === 0 ? '' : range}>{range}</option>
                  ))}
                </select>
                {errors.budget && <span className={styles.errorText}>{errors.budget}</span>}
              </div>

              {/* Description */}
              <div className={styles.formGroupFull}>
                <label className={styles.formLabel} htmlFor="page-contact-description">Project Description</label>
                <textarea
                  id="page-contact-description"
                  name="description"
                  placeholder="Tell us about your vision, goals, and timeline..."
                  value={form.description}
                  onChange={handleChange}
                  className={`${styles.formTextarea} ${errors.description ? styles.inputError : ''}`}
                />
                {errors.description && <span className={styles.errorText}>{errors.description}</span>}
              </div>

              {/* Submit */}
              <div className={styles.submitWrapper}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Start Your Project'}
                </button>
              </div>
            </form>
          </ScrollReveal>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Message Sent</h3>
            <p className={styles.successSubtext}>
              We&apos;ve received your inquiry and will get back to you within 24 hours.
              Great things are on the horizon.
            </p>
          </div>
        )}

        {/* Contact Info */}
        <ScrollReveal className={styles.infoGrid}>
          <div className={`${styles.infoCard} fade-up`}>
            <span className={styles.infoLabel}>Email</span>
            <span className={styles.infoValue}>hello@agency.com</span>
          </div>
          <div className={`${styles.infoCard} fade-up`}>
            <span className={styles.infoLabel}>Phone</span>
            <span className={styles.infoValue}>+1 (555) 000-0000</span>
          </div>
          <div className={`${styles.infoCard} fade-up`}>
            <span className={styles.infoLabel}>Location</span>
            <span className={styles.infoValue}>San Francisco, CA</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
