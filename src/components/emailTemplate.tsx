import * as React from 'react';

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
      From <strong>{name}</strong> at <strong>{company}</strong> Email <strong>{email}</strong>
  </p>  
  <h2>Message</h2>
  <p>{message}</p>
  </div>
);

export default ContactFormEmail;

