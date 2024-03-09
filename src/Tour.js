import React, { Component } from 'react';
import TourTableBody from './TourTableBody';

const gigs = [
]

const playedGigs = [
    { 
        date: '2016-12-03',
        place: 'Cousteau',
        city: 'Uppsala',
        event: 'https://www.facebook.com/events/214858735617336/'
     },
    { 
        date: '2016-10-29',
        place: 'Norrlands Nation',
        city: 'Uppsala',
        event: ''
     },
    { 
        date: '2016-10-22',
        place: 'Borgen',
        city: 'Uppsala',
        event: ''
     },
    { 
        date: '2016-09-08',
        place: 'Borgen',
        city: 'Uppsala',
        event: 'https://www.facebook.com/events/300722853641291/'
     },
    { 
        date: '2016-08-25',
        place: 'Botaniska Trädgården',
        city: 'Uppsala',
        event: ''
     },
    { 
        date: '2016-06-17',
        place: 'Kings Table',
        city: 'Stockholm',
        event: 'https://www.facebook.com/events/1156129114407406/'
     },
    { 
        date: '2016-06-15',
        place: 'Borgen',
        city: 'Uppsala',
        event: ''
     },
    { 
        date: '2016-06-04',
        place: 'Borgen',
        city: 'Uppsala',
        event: ''
     },
    { 
        date: '2016-05-27',
        place: 'Borgen',
        city: 'Uppsala',
        event: 'https://www.facebook.com/events/802731679828646/'
     },
    { 
        date: '2016-05-19',
        place: 'Cantina Real',
        city: 'Stockholm',
        event: 'https://www.facebook.com/events/1088966211165054/'
     },
    { 
        date: '2016-05-18',
        place: 'Borgen',
        city: 'Uppsala',
        event: 'https://www.facebook.com/events/1156129114407406/'
     },
    { 
        date: '2016-05-15',
        place: 'Borgen',
        city: 'Uppsala',
        event: 'https://www.facebook.com/events/1156129114407406/'
     },
    { 
        date: '2016-04-15',
        place: 'Broder Tuck',
        city: 'Stockholm',
        event: 'https://www.facebook.com/events/524190741114881'
     },
    { 
        date: '2017-06-15',
        place: 'PSB',
        city: 'Stockholm',
        event: 'https://www.facebook.com/events/383014042093433'
     },
    { 
        date: '2017-06-04',
        place: 'Base 10',
        city: 'Uppsala',
        event: 'https://www.facebook.com/events/383014042093433/'
     },
    { 
        date: '2017-07-29',
        place: 'Kinnekulle',
        city: 'Lidköping',
        event: ''
     },
    { 
        date: '2017-08-05',
        place: 'Creperie Lemoni',
        city: 'Uppsala',
        event: 'https://www.facebook.com/events/1796360810674568'
     },
    { 
        date: '2017-08-11',
        place: 'Gamleby',
        city: 'Gamleby',
        event: ''
     },
	{ 
		date: '2017-11-30',
		place: 'Clarion Hotel Sign',
		city: 'Stockholm',
		event: ''
	 },
	{ 
		date: '2019-06-29',
		place: 'Utomhusscenen',
		city: 'Uppsala',
		event: ''
	 },
    {
        date: '2022-07-15',
        place: 'The streets',
        city: 'Stockholm',
        event: ''
    },
	{ 
		date: '2023-09-09',
		place: 'Kulturnatten',
		city: 'Uppsala',
		event: ''
	 },
]

class Tour extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playedgigs: [...playedGigs],
            upcominggigs: [ ...gigs ]
        };
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
