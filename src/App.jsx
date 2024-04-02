
import './App.css'
import AboutMe from './componentes/AboutMe/AboutMe'
import Footer from './componentes/Footer/Footer'
import Navbar from './componentes/Navbar/Navbar'
import Presentation from './componentes/Presentation/Presentation'
import Projects from './componentes/Projects/Projects'

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
