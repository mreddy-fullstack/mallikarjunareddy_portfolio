import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/experience';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
