import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Landing } from './Pages/Landing'
import { About } from './Pages/About'
import { Projects } from './Pages/Projects'
import { Techstack } from './Pages/Techstack'
import { Contact } from './Pages/Contact'
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-screen bg-gradient-to-b from-black via-gray to-gray-light">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/techstack" element={<Techstack />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
