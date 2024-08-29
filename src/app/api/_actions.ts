"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/contactSchema";
import ContactFormEmail from "@/components/emailTemplate";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const resend = new Resend(process.env.RESEND_SECRET_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, company, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "mgmwood.com <mike@mgmwood.com>",
        to: ["mike@mgmwood.com", `${name} <${email}>`],
        subject: "Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, company, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
