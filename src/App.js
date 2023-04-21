import './App.css';
import Homepage from './Screens/Homepage';
import Login from './Screens/Login';

//Images


// Carousel bootstrap
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Carousel from './Components/Carousel';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element = {<Homepage/>}/> 
        <Route exact path='/login' element = {<Login/>}/>  
      </Routes>
    </div>
  );
}

export default App;
