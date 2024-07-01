import Image from "next/image";
import Hero from "@/components/hero";
import Service from "@/components/service";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <About />
      <Contact />
    </main>
  );
}
