import ContactForm from "@/components/contact-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog',
} 

export default function Page() {
  return (
    <div>
      <ContactForm />
    </div>
  )
}