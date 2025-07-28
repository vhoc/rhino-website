"use server";

import { ContactFormSchema } from '@/util/validations'
import { type ContactFormData } from '@/util/types'
import postContactEntry from '../services/contact';

export async function submitContactForm(data: ContactFormData) {
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

