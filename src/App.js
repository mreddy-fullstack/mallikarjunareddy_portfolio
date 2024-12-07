import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import SideBySideLayout from './components/SideBySideLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <SideBySideLayout/>
    </div>
  );
}

export default App;
