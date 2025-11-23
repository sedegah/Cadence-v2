import Hero from "@/components/home/hero"
import About from "@/components/home/about"
import Projects from "@/components/home/projects"
import Competencies from "@/components/home/competencies"
import TechStack from "@/components/home/tech-stack"
import Contact from "@/components/home/contact"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Competencies />
      <TechStack />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
