import React, { Component } from 'react';
import musketeer from '../img/musketeer.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={musketeer} style={{maxHeight: 550, maxWidth:'100%', borderRadius:'40%'}} alt="three musky tears band members pasted on old musketeer painting"/>
            </div>
        );
    }
}

export default Home;
