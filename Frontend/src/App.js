
import React from 'react';
import './App.css';
import Cards from './Components/mizizCards';
import Footer from './Components/myFooter';
import Navbar0 from './Components/myNavbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Covid19 from './Components/Covid19';
import FindChemist from './Components/FindChemist';
import MyCard from './Components/myCard';
import FirstAid from './Components/firstAid';
import About from './Components/About';
import Fogg from './Components/reset';
import Sign from './Components/signup';
import Login from './Components/Mysign';
import MapComponent from './Components/MapComponent';
import Covid19Locations from './Components/Covid19Locations';
import Symptoms from './Components/symptoms';

function App() {
 
  return (
    <div className="App">
        <Router>
          <Navbar0 />
            <Switch >
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/FirstAid" component={FirstAid} />
              <Route path="/Covid19" component={Covid19} />
              <Route path="/symptoms" component={Symptoms}/>
              <Route path="/FindChemist" component={FindChemist} />
              <Route path="/FindChemist" component={FindChemist} />
              <Route path="/signup" component={Sign} />
              <Route path="/Mysign" component={Login} />
              <Route path="/reset" component={Fogg} />
              <Route path="/FindChemist" component={FindChemist} />
              <Route path = "/MapComponent" component={MapComponent}/>
              <Route path="/Covid19Locations" component={Covid19Locations}/>
            </Switch>
          < Footer/>
        </Router>
    </div> 
   
  
  );
}

const Home =()=>(
  <div>
    <MyCard/>
    <Cards />  
  </div>
)

export default App;
