import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  company,
  message,
}) => (
  <div>
    <h1> Contact Form Submission</h1>
    <p>
      From <strong>{name}</strong> at <strong>{company}</strong> Email{" "}
      <strong>{email}</strong>
    </p>
    <h2>Your Message</h2>
    <p>{message}</p>
    <h2>Thank you for getting in touch</h2>
  </div>
);

export default ContactFormEmail;
