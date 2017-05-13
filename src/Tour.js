import React, { Component } from 'react';
import TourTableBody from './TourTableBody';
import playedGigs from '../data/playedgigs';
import upcomingGigs from '../data/upcominggigs';

class Tour extends Component {
    render() {
        let tourLayout = {
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
        }
        return (
            <div style={tourLayout}>
                    <div>
                        <h4>Kommande</h4>
                        <TourTableBody inputData={upcomingGigs} />
                    </div>
                    <div>
                        <h4>Spelade</h4>
                        <TourTableBody inputData={playedGigs} />
                    </div>
            </div>
        );
    }
}

export default Tour;
