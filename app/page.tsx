// app/page.tsx
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
// Impor FadeInWhenVisible sekarang bisa dihapus karena sudah tidak digunakan
// import { FadeInWhenVisible } from "@/components/FadeInWhenVisible"; 
import { AnimatedDivider } from "@/components/AnimatedDivider";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      
      <AnimatedDivider />
      
      {/* Komponen Projects sekarang berdiri sendiri */}
      <Projects />
      
      <AnimatedDivider />
      
      {/* Komponen About sekarang berdiri sendiri */}
      <About />
      
      <AnimatedDivider />
      
      {/* Komponen Skills sekarang berdiri sendiri */}
      <Skills />
      
      <AnimatedDivider />
      
      {/* Komponen Contact sekarang berdiri sendiri */}
      <Contact />

      <div className="h-24" />
    </main>
  );
}