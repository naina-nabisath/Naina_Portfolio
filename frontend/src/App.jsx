import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Project from "./Components/Project"
import Internship from "./Components/Intership"
import Education from "./Components/Education"
import Connect from "./Components/Connect"
import Footer from "./Components/Footer"



function App() {
  return (
    <div className="bg-linear-to-tr from-[#042b44] to-[#096b90]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Internship />
      <Education />
      <Connect />
      <Footer />
    </div>
  )
}

export default App