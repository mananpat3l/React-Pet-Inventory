import './App.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {Route, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import About from './components/About-page/About';
import Edit from './components/Edit/Edit';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={() => (<Redirect to="/About" />)} />
        <Route exact path="/About" component={About} />
        <Route path="/Search/:term?" component={Search} />
        <Route exact path="/Edit" component={Edit} />

        <br/>
        <footer>&copy; 2021 | TOM & JERRY SHOP <br/>
          Contact Us : tomplusjerry@dot.com <br/>
          <SocialIcon url="https://twitter.com" />
          <SocialIcon url="https://linkedin.com" />
          <SocialIcon url="https://facebook.com" />

        </footer>
      </div>
    );
  }
}
