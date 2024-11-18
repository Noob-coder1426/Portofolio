import Navbar from "./section/Navbar"
import Hero from "./section/Hero"
import About from "./section/About"
import Clients from "./section/Clients"
import Contact from "./section/Contact"
import Footer from "./section/Footer"
import Experience from "./section/Experience"


function App() {

  return (
    <main className="max-w-7xl mx-auto relative">

    <Navbar/>
    <Hero/>
    <About/>
    <Clients/>
    <Experience/>
    <Contact/>
    <Footer/>

    </main>
  )
}

export default App
