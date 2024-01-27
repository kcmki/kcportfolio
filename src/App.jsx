
import './App.css'
import Header from './Componements/Header.jsx'
import Home from './Componements/Home.jsx'
import Projects from './Componements/Projects.jsx'
import Timeline from './Componements/Timeline.jsx'
import Footer from './Componements/Footer.jsx'

function App() {

  return (
    <div className=' bg-[#0e1014] w-full p-0 m-0'>
      <Header />
      <Home />
      <Projects />
      {/*<Timeline />*/}
      <Footer />
    </div>
  )
}

export default App
