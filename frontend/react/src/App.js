import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './home/index'
import About from "./about";
import './App.css'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand">Anaxo - Online Tools</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="container">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
