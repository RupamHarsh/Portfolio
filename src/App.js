import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage';
import Skills from './components/SkillsPage/Skills';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Project from './components/ProjectPage/Projects';
import About from './components/AboutPage/About';
import Error from './components/ErrorPage/Error';
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
