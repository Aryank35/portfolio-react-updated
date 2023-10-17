import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero";
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <div className="App h-full w-full box-border ">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Project/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
