import React, { Component } from 'react';
import TourTableBody from './TourTableBody';

class Tour extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playedgigs: [],
            upcominggigs: []
        };
    }
    componentDidMount() {
        fetch('http://localhost/upcominggigs.php')
            .then(
                (result) => result.json()
            )
            .then(
                (data) => {
                this.setState(
                    {
                        upcominggigs: data
                    }
                );
            });
        fetch('http://localhost/playedgigs.php')
            .then(
                (result) => result.json()
            )
            .then(
                (data) => {
                this.setState(
                    {
                        playedgigs: data
                    }
                );
            });
    }

    render() {
        const tourLayout = {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
        }
        return (
            <div style={tourLayout}>
                    <div>
                        <h4>Kommande</h4>
                        <TourTableBody inputData={this.state.upcominggigs} />
                    </div>
                    <div>
                        <h4>Spelade</h4>
                        <TourTableBody inputData={this.state.playedgigs} />
                    </div>
            </div>
        );
    }
}

export default Tour;
