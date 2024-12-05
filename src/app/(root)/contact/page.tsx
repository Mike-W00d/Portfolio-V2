import { Metadata } from "next";

import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Michael Wood | Full Stack Developer",
};

const page = () => {
  return (
    <div className="mt-4 flex w-full max-w-3xl flex-col items-center justify-center">
      <h1 className="mb-4 justify-center text-4xl font-bold text-fedblue">
        {" "}
        Get in Touch{" "}
      </h1>
      <ContactForm />
    </div>
  );
};

export default page;
