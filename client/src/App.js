
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ParticularPost from './components/ParticularPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/CreatePost' element={<CreatePost/>} />
        <Route path='/Particular/:id' element={<ParticularPost/>} />


      </Routes>
    </div>
  );
}

export default App;
