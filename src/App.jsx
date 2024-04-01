
import './App.css'
import AboutMe from './componentes/AboutMe'
import Footer from './componentes/Footer'
import Navbar from './componentes/Navbar'
import Presentation from './componentes/Presentation'
import Projects from './componentes/Projects'

function App() {


  return (
    <div>
      <Navbar/>
      <Presentation/>
      <Projects/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}

export default App
