"use client";
import RadioBox from "./RadioBox";
import { useState } from "react";
import clsx from "clsx";
import Button from "@/components/ui/buttons/Button";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { type ContactFormData } from "@/util/types";
import { ContactFormSchema } from "@/util/validations";
import { submitContactForm } from "@/app/contact-us/actions";

function ContactFormInner() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState<ContactFormData>({
    subject: "Partnerships",
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: string; error?: string }>({});

  const validateForm = (data: ContactFormData) => {
    const result = ContactFormSchema.safeParse(data);
    const hasEmptyFields = Object.values(data).some(value => value === "");
    return result.success && !hasEmptyFields;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      setSubmitStatus({ error: 'reCAPTCHA not initialized' });
      return;
    }
    setIsSubmitting(true);
    try {
      const token = await executeRecaptcha('contact_form');
      const response = await submitContactForm({ ...formData }, token)
      console.log('Form submission response:', response);

      if (response.status !== 200) {
        setSubmitStatus({ error: response.error ?? 'Failed to send message' });
      } else {
        setSubmitStatus({ success: 'Message sent successfully!' });
        setFormData({
          subject: "Partnerships",
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
      }

    } catch (error) {
      console.error(error)
      setSubmitStatus({ error: 'Failed to send message' });
    } finally {
      setIsSubmitting(false)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => {
      const newData = {
        ...prevData,
        [name]: value
      };

      // Validate just the changed field
      const result = ContactFormSchema.safeParse(newData);
      if (!result.success) {
        const fieldError = result.error.errors.find(error => error.path[0] === name);
        setErrors(prev => ({
          ...prev,
          [name]: fieldError ? fieldError.message : undefined
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          [name]: undefined
        }));
      }

      // Update form validity
      setIsValid(validateForm(newData));
      return newData;
    });
  };

  if (submitStatus.success) {
    return (
      <div className="mt-4 px-6 h-16 flex items-center justify-center">
        <p className="text-green-600 text-center ">{submitStatus.success}</p>
      </div>
    )
  }

  return (
    <form
      className={`
        flex flex-col 
      `}
    >

      <RadioBox
        name={"subject"}
        value="Partnerships"
        checked={formData.subject === "Partnerships"}
        onChange={handleChange}
        title="Partnerships"
        description="Explore collaboration opportunities for infrastructure services, network support, or strategic partnerships."
      />

      <RadioBox
        name={"subject"}
        value="Technical Issue"
        checked={formData.subject === "Technical Issue"}
        onChange={handleChange}
        title="Technical Issue"
        description="Need help with RPC endpoints, node operations, or other RHINO services? We're here to assist."
      />

      <RadioBox
        name={"subject"}
        value="Finance"
        checked={formData.subject === "Finance"}
        onChange={handleChange}
        title="Finance"
        description="Questions about billing, pricing, payment methods, or contract terms for our services."
      />

      <RadioBox
        name={"subject"}
        value="Feedback"
        checked={formData.subject === "Feedback"}
        onChange={handleChange}
        title="Feedback"
        description="Share suggestions on how we can improve our infrastructure services or customer experience."
      />

      <RadioBox
        name={"subject"}
        value="Careers"
        checked={formData.subject === "Careers"}
        onChange={handleChange}
        title="Careers"
        description="Interested in joining our blockchain infrastructure team? Tell us about your background and interests."
      />

      <div
        className={clsx(
          "flex flex-col gap-2 px-6 mt-3",
          "md:flex-row md:gap-x-6 md:mt-8"
        )}
      >
        <label className="flex flex-col gap-1 md:w-1/2">
          <span className="font-bold text-coolgray-900">First Name</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            minLength={2}
            maxLength={50}
            className={clsx(
              "rounded p-2 bg-coolgray-25 text-coolgray-700 w-full",
              errors.firstName && "border-2 border-red-500"
            )}
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">{errors.firstName}</span>
          )}
        </label>

        <label className="flex flex-col gap-1 md:w-1/2">
          <span className="font-bold text-coolgray-900">Last Name</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            minLength={2}
            maxLength={50}
            className={clsx(
              "rounded p-2 bg-coolgray-25 text-coolgray-700 w-full",
              errors.lastName && "border-2 border-red-500"
            )}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">{errors.lastName}</span>
          )}
        </label>

      </div>

      <div className="flex flex-col gap-2 px-6 mt-3">
        <label className="flex flex-col gap-1 md:w-full">
          <span className="font-bold text-coolgray-900">E-mail</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={clsx(
              "rounded p-2 bg-coolgray-25 text-coolgray-700",
              errors.email && "border-2 border-red-500"
            )}
            placeholder="Enter your e-mail"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </label>
      </div>

      <div className="flex flex-col gap-2 px-6 mt-3">
        <label className="flex flex-col gap-1 md:w-full">
          <span className="font-bold text-coolgray-900">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={clsx(
              "rounded p-2 bg-coolgray-25 text-coolgray-700 w-full",
              errors.message && "border-2 border-red-500"
            )}
            placeholder="Enter your message"
            rows={4}
            maxLength={5000}
          />
        </label>
      </div>

      <div className="flex flex-col gap-2 px-6 mt-4 mb-8">
        <Button
          type="button"
          variant="secondary"
          label={isSubmitting ? "Submitting..." : "Submit"}
          disabled={!isValid || isSubmitting || !executeRecaptcha}
          onClick={handleSubmit}
        />
      </div>


      {submitStatus.error && (
        <div className="mt-4 px-6 text-red-500">{submitStatus.error}</div>
      )}
    </form>
  )
}

export default function ContactForm() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
      }}
    >
      <ContactFormInner />
    </GoogleReCaptchaProvider>
  );
}