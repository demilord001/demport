import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@dl/layout/Navbar";
import { Footer } from "@dl/layout/Footer";
import { Hero } from "@dl/sections/Hero";
import { About } from "@dl/sections/About";
import { Projects } from "@dl/sections/Projects";
import { Experience } from "@dl/sections/Experience";
import { Testimonials } from "@dl/sections/Testimonials";
import { Contact } from "@dl/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
