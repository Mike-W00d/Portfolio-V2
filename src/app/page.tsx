import Nav from "../components/nav";
import { Metadata } from "next";
import { Hero, About, Contact, Footer } from "./_sections";

export const metadata: Metadata = {
  title: 'Homepage | Michael Wood | Full Stack Developer',
};

export default function Home() {
  return (
    <main>
    <section className="xl:padding-l wide:padding-r padding:b"> 
      <Hero />
    </section>
    <section className="xl:padding-l wide:padding-r padding:b"> 
      <About />
    </section>
    <section className="xl:padding-l wide:padding-r padding:b"> 
      <Contact />
    </section>
    <section className="xl:padding-l wide:padding-r padding:b">
      <Footer />
    </section>

  </main>
  );
}
