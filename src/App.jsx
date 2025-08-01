import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"


function App() {
  
  return (
    <>
      <main className="mx-auto max-w-7xl overflow-hidden antialiased">
        <div className="bg-image  inset-0 bg-cover bg-fixed bg-center">
          <div className="relative z-10">
            <Navbar/>
            <Hero/>
            <Projects/>
            <Skills/>
            <Experience/>
            <Education/>
            <Testimonials/>
            <Contact/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
