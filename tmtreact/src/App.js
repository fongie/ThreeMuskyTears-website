import React, { Component } from 'react';
import logo from '../img/TMTlogomindre.png';
import fbicon from '../img/fb.jpg';
import emailicon from '../img/email.png';
import musketeer from '../img/musketeer.jpg';
import './App.css';
//import '../../css/main.css';
//import '../../css/responsive.css';


class App extends Component {
    render() {
        var generalStyling = {
            fontFamily: 'Handlee',
            textAlign: 'center',
        }
        return (
            <div className="App" style={generalStyling}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

class Header extends Component {

    /*
    constructor(props) {
        super(props);
    }
    */
    render() {
        var headerStyling = {
            float: 'left',
            marginBottom: 30,
            paddingTop: 5,
            alignSelf: 'stretch',
            width: '100%'
        };
        return (
            <div id="header" style={headerStyling}>
                <Logo/>
                <Navigation/>
            </div>
        );
    }
}


class Logo extends Component {
    render() {
        var logoStyling = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%'
        };
        return (
            <div id="logo">
                <a href="http://www.threemuskytears.se">
                    <img src={logo} style={logoStyling}  alt="three musky tears band stockholm uppsala logo"/>
                </a>
            </div>
        );
    }
}

class NavigationListItem extends Component {
    render() {
        var navigationListItemStyling = {
            marginRight: 10,
            display: 'inline-block',
            fontSize: '1.3em'
        }
        //link and hover link color are defined in App.css
        var linkStyling = {
            default: {
                textDecoration: 'none',
                //color: '#434343',
                paddingTop: 15,
                paddingRight: 10,
            },
        }
        return (
            <li style={navigationListItemStyling}><a href={this.props.link} class="selected" style={linkStyling.default}>{this.props.name}</a></li>
        );
    }
}

class Navigation extends Component {
    render() {
        var navigationStyling = {
            textDecoration: 'none',
            textAlign: 'center',
            paddingTop: 10,
            marginTop: 20,
            fontFamily: 'Short Stack',
            zIndex: 3
        }

        var navigationListStyling = {
            listStyle: 'none',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0
        }

        return (
            <div id="navigation" style={navigationStyling}>
                <nav>
                    <ul style={navigationListStyling}/>
                    <NavigationListItem name="Home" link="index.html"/>
                    <NavigationListItem name="Tour" link="tour.html"/>
                    <NavigationListItem name="Media" link="media.html"/>
                    <NavigationListItem name="Contact" link="contact.html"/>
                </nav>
            </div>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <div id="mitten">
                <img src={musketeer} style={{maxWidth:'100%'}} alt="three musky tears band members pasted on old musketeer painting"/>
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        var footerStyling = {
            width: '100%',
            fontSize: '0.8em',
            textAlign: 'center',
            clear: 'both',
            height: 90,
        }
        var socialIconStyling = {
            display: 'inline-block',
            maxWidth: 25,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '30%',
        }
        return (
            <div id="noscroll" style={footerStyling}>
                <a href="https://www.facebook.com/threemuskytears/"><img src={fbicon} alt="facebook-icon" style={socialIconStyling}/></a>
                <a href="mailto:info@threemuskytears.se"><img src={emailicon} alt="email-icon" style={socialIconStyling}/></a>
                <CopyrightLink/>
            </div>
        );
    }
}

class CopyrightLink extends Component {
    render() {
        return (
            <p>&copy; <a style={{textDecoration: 'none'}} href="http://maxk.se">2017 Max Körlinge</a></p>

        );
    }
}

export default App;
