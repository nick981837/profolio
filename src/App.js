
import Topbar from './components/topbar/Topbar';
import Intro from "./components/intro/intro"
import Profolio from "./components/portfolio/portfolio"
import Testimonials from './components/testimonials/testimonials';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import Menu from "./components/menu/Menu"
import "./app.scss"
import {useState} from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Testimonials/>
        <Profolio/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
