import React, { Component } from 'react';
import musketeer from './img/musketeer.jpg';

class Home extends Component {
    render() {
        const homeStyling = {
            maxHeight: 550,
            maxWidth: '100%',
            borderRadius: '40%',
        }
        return (
            <div>
                <img 
                    src={musketeer} 
                    style={homeStyling} 
                    alt="three musky tears band members pasted on old musketeer painting"
                />
            </div>
        );
    }
}

export default Home;
