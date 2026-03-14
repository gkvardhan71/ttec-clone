import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Footer from "../components/Footer"
import Stats from "../components/Stats"
import Clients from "../components/Clients"
import CaseStudies from "../components/CaseStudies"
import ContactForm from "../components/ContactForm"

export default function Home() {
  return (

    <main>

      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Clients />
      <CaseStudies />
      <ContactForm />
      <Footer />

    </main>

  )
}