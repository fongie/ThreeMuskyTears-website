import React, { Component } from 'react';
import TourTableBody from './TourTableBody';
import playedGigs from '../data/playedgigs';
import upcomingGigs from '../data/upcominggigs';

class Tour extends Component {
    render() {
        return (
            <div id="tour-body">
                <section>
                    <div id="kommande">
                        <h4>Kommande</h4>
                        <TourTableBody inputData={upcomingGigs} />
                    </div>
                    <div id="spelade">
                        <h4>Spelade</h4>
                        <TourTableBody inputData={playedGigs} />
                    </div>
                </section>
            </div>
        );
    }
}

export default Tour;
