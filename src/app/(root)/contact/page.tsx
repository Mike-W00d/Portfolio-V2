import ContactForm from "@/components/contact-form";
import { Contact } from "@/app/_sections";
import { Section } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Michael Wood | Full Stack Developer",
};

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full w-max-4xl mt-4">
        <h1 className="text-4xl text-fedblue font-bold justify-center mb-4">
          {" "}
          Get in Touch{" "}
        </h1>
        <ContactForm />
    </div>
  );
};

export default page;
