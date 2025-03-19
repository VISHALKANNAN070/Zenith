import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/header'
import Home from './assets/Home'
import About from './assets/About'
import Project from './assets/Project'
import Contact from './assets/Contact'
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
    </>
  )
}

export default App
