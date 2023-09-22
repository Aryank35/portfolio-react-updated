import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/hero';
import Skills from './Components/Skills'
import Project from './Components/Project';

function App() {
  return (
    <>
    <div className="App h-full w-full box-border ">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Project/>
     
    </div>
    </>
  );
}

export default App;
