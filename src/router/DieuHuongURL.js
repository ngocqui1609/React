import React, { Component } from 'react';
import {    BrowserRouter as Router,    Route,    Link, Switch  } from 'react-router-dom';
import News from './../components/News';
import Home from './../components/Home';
import NewsDetail from './../components/NewsDetail';
import Contact from './../components/Contact';

  
class DieuHuongURL extends Component {
    render() {
        return (
            <Switch>
                <div>                
                    <Route exact path="/react-router" component={Home} />                   
                    <Route exact path="/home" component={Home} />                   
                    <Route exact path="/tin" component={News} />                   
                    <Route exact path="/tin-tuc/:slug.:id.html" component={NewsDetail} />                   
                    <Route exact path="/lien-he" component={Contact} />                   
                </div>
            </Switch>
        );
    }
}

export default DieuHuongURL;