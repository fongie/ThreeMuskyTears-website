import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fbicon from '../img/fb.jpg';

class TourTableItem extends Component {
    constructor(props) {
        super(props);

        const imgStyling = {
            maxWidth: 20,
        }
        const tdStyling = {
            borderBottom: '1px solid black',
            borderCollapse: 'collapse',
        }

        this.state = {
            imgStyling: imgStyling,
            tdStyling: tdStyling,
        }

        this.eventPropHandler = this.eventPropHandler.bind(this);
    }
    eventPropHandler() {
        if (this.props.event) {
            return (
           <a href={ this.props.event }>
                <img alt="facebook"  src={ fbicon } class="icon" style={this.state.imgStyling} />
            </a>
            );
        } else {
            return <strong>-</strong>;
        }
    }
    render() {
        return (
            <tr>
                <td headers="DATUM" style={this.state.tdStyling}>
                    <strong>{this.props.date}</strong>
                </td>
                <td headers="STÄLLE" style={this.state.tdStyling}>
                    <strong>{this.props.place}</strong>
                </td>
                <td headers="STAD" style={this.state.tdStyling}>
                    <strong>{this.props.city}</strong>
                </td>
                <td headers="EVENT" style={this.state.tdStyling}>
                    {this.eventPropHandler()}
                </td>
            </tr>
        );
    }
}

TourTableItem.propTypes = {
    date: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
}

export default TourTableItem;
