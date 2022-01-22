import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './home';
import Table from './north';
import States from './states';
import Haryana from './haryana';
import { BrowserRouter as Router , Route, Link, Routes} from 'react-router-dom';

function Project(){
    return<>
        <Router> 
        <nav class="navbar navbar-expand-lg bg-white fixed-top p-0">
  <div class="container-fluid">
    <Link to ="/"><img class=" w-50 h-25" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kts6xsxMofWgao4u3OgRNWcT0NCldj2guQ&usqp=CAU"}></img></Link>
    <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <Link to ="/" class="nav-link clr">Home</Link>
        </li>
        <li class="nav-item dropdown clr ">
        <Link to="/" class="dropdown-toggle clr " data-bs-toggle="dropdown">Destinations</Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item clr" to ="/north">North</Link></li>
            <li><Link class="dropdown-item clr" to="/north">East</Link></li>
            <li><Link class="dropdown-item clr " to="/north">Centeral</Link></li>
            <li><Link class="dropdown-item clr " to="/north">West</Link></li>
            <li><Link class="dropdown-item clr " to="/north">North East</Link></li>
            <li><Link class="dropdown-item clr" to="/north">South</Link></li>
          </ul>
        </li>
        <li class="nav-item ">
        <Link to ="/" class="nav-link clr">Tour Packages</Link>
        </li>
        <li class="nav-item ">
        <Link to ="/" class="nav-link clr ">Contact</Link>
        </li>
      </ul> 
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   <Routes>
    <Route exact path ="/" element={<Home/>}></Route>
    <Route  path ="/north"  element={<Table/>}></Route>
    <Route  path ="/states"  element={<States/>}></Route>
    <Route  path ="/haryana"  element={<Haryana/>}></Route>
    </Routes>
    </Router>
    </>
}



ReactDOM.render(<Project></Project>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
