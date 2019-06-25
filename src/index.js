import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Tour from './Tour';
import Media from './Media';
import About from './About';
import './index.css';

ReactDOM.render(
    <Router>
        <App>
            <Route exact={true} path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/tour" component={Tour} />
            <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
        </App>
    </Router>
    ,
    document.getElementById('root')
);
