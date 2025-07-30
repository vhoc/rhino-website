"use server";
import { type ContactFormData, type PagerDutyResponse } from "@/util/types";

export default async function postContactEntry(formData: ContactFormData): Promise<PagerDutyResponse> {
  const body = {
    "payload": {
      // "summary": "Contact Us Form Received",
      "severity": "info",
      "source": "Rhino Website",
      "name": formData.firstName + " " + formData.lastName,
      "custom_details": {
        "subject": formData.subject,
        "first_name": formData.firstName,
        "last_name": formData.lastName,
        "email": formData.email,
        "message": formData.message
      }
    },
    "routing_key": process.env.PAGERDUTY_KEY,
    "event_action": "trigger"
  }

  const response = await fetch("https://events.pagerduty.com/v2/enqueue", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body)
  });

  const result: PagerDutyResponse = await response.json() as PagerDutyResponse

  return result;

}