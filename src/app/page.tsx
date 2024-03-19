import { Metadata } from "next";
import { Hero, About, Contact, Footer } from "./_sections";

export const metadata: Metadata = {
  title: 'Homepage | Michael Wood | Full Stack Developer',
};

export default function Home() {
  return (
    <div>
    <section className="xl:padding-l wide:padding-r padding:b"> 
      <Hero />
    </section>
    <section>
      <About />
    </section>
    <section>
      <Contact />
    </section>
    </div>
  );
}
