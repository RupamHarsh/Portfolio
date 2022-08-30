import Header from './components/Header'
import MainPage from './components/MainPage';
import Skills from './components/Skills';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Project from './components/Projects';
import About from './components/About';
import Error from './components/Error';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
