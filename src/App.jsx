import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
function App() {
  return (
    <>
     <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Project />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
      <Analytics/>
      <SpeedInsights/>
    </>
  )
}

export default App
