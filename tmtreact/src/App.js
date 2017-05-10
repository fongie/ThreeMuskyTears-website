import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
    render() {
        var generalStyling = {
            fontFamily: 'Handlee',
            textAlign: 'center',
        }
        return (
            <div style={generalStyling}>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default App;
