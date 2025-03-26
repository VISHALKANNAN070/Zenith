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
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
