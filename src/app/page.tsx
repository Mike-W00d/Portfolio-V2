import { Metadata } from "next";
import { Hero, About, Contact, Footer } from "./_sections";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Homepage | Michael Wood | Full Stack Developer',
};

export default function Home() {
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