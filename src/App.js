import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from "./Components/projects"
import Contact from "./Components/contact"
import Footer from './Components/footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    < Footer/>
    </div>
  );
}

export default App;
