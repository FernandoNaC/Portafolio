import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import Works from './components/Works';
import NoPage from './components/NoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hardskills' element={<HardSkills/>}/>
        <Route path='/softskills' element={<SoftSkills/>}/>
        <Route path='/myworks' element={<Works/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
