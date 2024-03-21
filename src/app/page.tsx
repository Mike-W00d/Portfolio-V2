import { Metadata } from "next";
import { Hero, About, Contact, Footer } from "./_sections";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Homepage | Michael Wood | Full Stack Developer',
};

export default function Home() {
  return (
    <div>
      <section className="relative xl:padding-l wide:padding-r padding:b z-10 cover"> 
        <Hero />
      </section>
      <section className="relative z-10">
        <About />
      </section>
      <section className="relative z-10">
        <Contact />
      </section>
    </div>
  );
}