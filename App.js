// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Registration from "./Registration";
import Navbar from "./Navbar";
import ChangePassword from "./ChangePassword";
 
function App() {
  return (
    <div>
     <Navbar/>
       <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/Registration'  element={<Registration/>}></Route>
      <Route path='/ChangePassword'  element={<ChangePassword/>}></Route>

    </Routes> 
    </div>
    
      
    
  )
}

export default App;
