import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import SideBySideLayout from './components/SideBySideLayout';
import ProfileSections from './components/ProfileSections';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <SideBySideLayout/>
      <ProfileSections />
    </div>
  );
}

export default App;
