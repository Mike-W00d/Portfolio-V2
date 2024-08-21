'use server';

import { z } from 'zod';
import { Resend } from 'resend'
import { FormDataSchema } from '@/lib/schema';
import Contact from '../(Pages)/contact/page';

type ContactFormInputs = z.infer<typeof FormDataSchema>;

const resend = new Resend(process.env.RESEND_SECRET_KEY);

export async function sendEmail(data: ContactFormInputs) { 
  const result = FormDataSchema.safeParse(data);
}