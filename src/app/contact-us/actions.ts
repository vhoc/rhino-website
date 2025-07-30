"use server";

import { ContactFormSchema } from '@/util/validations'
import { type ContactFormData } from '@/util/types'
import postContactEntry from '../services/contact';

export async function submitContactForm(data: ContactFormData, recaptchaToken: string) {
  // Validate the data
  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    // const test = result.error.flatten().fieldErrors
    const errorMessage = Object.values(result.error.flatten().fieldErrors).flat().join(', ')
    // console.error('Validation errors:', errorMessage)
    return {
      error: errorMessage,
      status: 400
    }
  }

  // reCAPTCHA token verification
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verificationURL = "https://www.google.com/recaptcha/api/siteverify";
  const recaptchaResponse = await fetch(verificationURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `secret=${secretKey}&response=${recaptchaToken}`
  });

  const recaptchaResult = await recaptchaResponse.json();

  if (!recaptchaResult.success) {
    return {
      error: "reCAPTCHA verification failed",
      status: 403
    };
  }

  const response = await postContactEntry(data);
  console.log('Response from postContactEntry:', response);

  if (!response) {
    return {
      error: "No response from server",
      status: 404
    }
  }

  if (response.errors) {
    console.error('PagerDuty errors:', response.errors);
    return {
      error: response.errors.join(', '),
      status: 400
    }
  }

  return {
    message: 'Message sent successfully',
    data: result.data,
    status: 200
  }
}

