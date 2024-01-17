import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import About  from "./Pages/About"
import Contact from "./Pages/Contact"
import Policies from "./Pages/Policies"
import PageNotFound from "./Pages/PageNotFound"
import Regsiter from './Pages/auth/Regsiter';
import Login from './Pages/auth/Login';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<Regsiter/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policies/>}/>
      <Route path='*' element={<PageNotFound/>}/>

    </Routes>

    </>
    
  );
}

export default App;
