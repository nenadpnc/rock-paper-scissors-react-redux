import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import HumanVSCompContainer from './humanVsComp/HumanVSCompContainer';
import CompVSCompContainer from './compVSComp/CompVSCompContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>  
          <header>
            <nav>
              <Link to="/">Human vs. Computer</Link>
              <Link to="/comp-vs-comp">Computer vs. Computer</Link>
            </nav>
          </header>
          <main>
            <h1>Rock Paper Scissors</h1>
            <Route exact path="/" component={HumanVSCompContainer}/>
            <Route path="/comp-vs-comp" component={CompVSCompContainer} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
