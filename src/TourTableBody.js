import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TourTableItem from './TourTableItem';

/*
 * Generate a table with input from a json file
 * @prop dataInput - required, a json file
 * Note that additional styling for tr nth child is in App.css
 */

const propTypes = {
    inputData: PropTypes.array.isRequired,
};

class TourTableBody extends Component {
    constructor(props) {
        super(props);

        const tdStyling = {
            borderBottom: '1px solid black',
            borderCollapse: 'collapse',
        }
        const tableStyling = {
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 20,
            borderBottom: '1px solid black',
            borderCollapse: 'collapse',
        }

        this.state = {
            tdStyling,
            tableStyling,
        }
        this.insertTourTableItems = this.insertTourTableItems.bind(this);
    }

    /**
     * Takes an object containing gigs and their related date, place, city, and event(optional) information,
     * and outputs each in a TourTableItem
     */
    insertTourTableItems() {
        let tableItems = this.props.inputData.map(function(gig) {
            return (
                <TourTableItem 
                    date={gig.date} 
                    place={gig.place} 
                    city={gig.city} 
                    event={gig.event} 
                    key={gig.date}
                />
            );
        })
        return tableItems;
    }
    render() {
        return (
            <table style={this.state.tableStyling}>
                <tr>
                    <td 
                        headers="DATUM" 
                        style={this.state.tdStyling}
                    >
                        <strong>
                            DATUM
                        </strong>
                    </td>
                    <td 
                        headers="STÄLLE" 
                        style={this.state.tdStyling}
                    >
                        <strong>
                            STÄLLE
                        </strong>
                    </td>
                    <td 
                        headers="STAD" 
                        style={this.state.tdStyling}
                    >
                        <strong>
                            STAD
                        </strong>
                    </td>
                    <td 
                        headers="EVENT" 
                        style={this.state.tdStyling}
                    >
                        <strong>
                            EVENT
                        </strong>
                    </td>
                </tr>
                <tbody>
                    { this.insertTourTableItems() }
                </tbody>
            </table>
        );
    }
}

TourTableBody.propTypes = propTypes;

export default TourTableBody;
