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
            maxWidth: '100%',
        }
        const contentStyling = {
            minHeight: '91vh',
        }
        const childrenStyling = {
            marginLeft: 'auto',
            marginRight: 'auto',
        }
        const footerStyling = {
        }
        return (
            <div style={generalStyling}>
                <div style={contentStyling}>
                    <Header />
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
