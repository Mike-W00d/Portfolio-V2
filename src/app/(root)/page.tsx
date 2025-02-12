import { Metadata } from "next";

import { Hero, About, Contact, Footer } from "@/app/(sections)";

export const metadata: Metadata = {
  title: "Homepage | Michael Wood | Full Stack Developer",
};

export default async function Home() {
  return (
    <div>
      <section className="relative">
        <Hero />
      </section>
      <section id="about" className="relative">
        <About />
      </section>
      <section className="relative">
        <Contact />
      </section>
      <section className="relative">
        <Footer />
      </section>
    </div>
  );
}
