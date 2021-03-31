import React, { Component } from 'react';
import {    BrowserRouter as Router,    Route,    Link,NavLink  } from 'react-router-dom';
 import './../css/App.css';
 import Nav from './Nav' ;  
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';
import DieuHuongURL from './../router/DieuHuongURL';
  
class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Nav/>           
              <DieuHuongURL/>
          <Footer/>
          
      </div>
      </Router>
    );
  }
}

export default App;
