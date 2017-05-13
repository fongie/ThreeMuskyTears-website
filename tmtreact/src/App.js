import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
    render() {
        const generalStyling = {
            fontFamily: 'Handlee',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
        }
        const rowStyling = {
            display: 'flex',
            flexFlow: 'row wrap',
            minHeight: '91vh',
        }
        const childrenStyling = {
            order: 2,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        const footerStyling = {
            order: 3,
            alignSelf: 'flex-end',
        }
        return (
            <div style={generalStyling}>
                <div style={rowStyling}>
                    <Header style={{order:1}} />
                    <div style={childrenStyling}>
                        {this.props.children}
                    </div>
                </div>
                <Footer style={footerStyling} />
            </div>
        );
    }
}

export default App;
