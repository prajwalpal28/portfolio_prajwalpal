import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Landing } from './Pages/Landing'
import { About } from './Pages/About'
import { Projects } from './Pages/Projects'
import { Techstack } from './Pages/Techstack'
import { Contact } from './Pages/Contact'
import { Footer } from './Components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen h-full bg-gradient-to-b from-gray-light via-black to-gray-light">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/techstack" element={<Techstack />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
