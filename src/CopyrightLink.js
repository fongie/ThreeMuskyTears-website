import React, { Component } from 'react';

class CopyrightLink extends Component {
    render() {
        return (
            <p>
                &copy; 
                <a 
                    style={{textDecoration: 'none'}} 
                    href="http://maxk.se"
                >
                    2019 Max Körlinge
                </a>
            </p>

        );
    }
}

export default CopyrightLink;
