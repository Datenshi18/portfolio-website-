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
            <span className={styles.infoValue}>hello@digitallift.com</span>
          </div>
          <div className={`${styles.infoCard} fade-up`}>
            <span className={styles.infoLabel}>Phone</span>
            <span className={styles.infoValue}>+91 9266750924</span>
          </div>
          <div className={`${styles.infoCard} fade-up`}>
            <span className={styles.infoLabel}>Location</span>
            <span className={styles.infoValue}>Greater Noida</span>
          </div>
          <a
            href="https://wa.me/917060235744"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.infoCard} ${styles.whatsappCard} fade-up`}
          >
            <span className={styles.infoLabel}>
              <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </span>
            <span className={styles.infoValue}>+91 7060235744</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
