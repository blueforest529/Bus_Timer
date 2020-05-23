import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css'; 

import Main from "./container/Main"; 
// import BusTime from "./container/BusTime"; 
// import Viewer from "./container/Viewer";

function App() {
  return ( 
  <Router> 
    <div> 
      <Route exact path="/" component={Main} /> 
      {/* <Route path="/bustime/:bustimeId" component={BusTime} /> 
      <Route path="/viewer/:episodeId" component={Viewer} />  */}
      </div> 
    </Router> 
  );

}

export default App;
