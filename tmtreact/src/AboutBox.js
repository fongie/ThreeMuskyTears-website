import React, { Component } from 'react';

class AboutBox extends Component {
    render() {
        var aboutBoxStyling = {
            maxWidth: '400',
            padding: 10,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'black',
            backgroundColor: '#b8d2d0',
            margin: 'auto',
            marginBottom: 10,
        }
        return (
            <div id="allman" style={ aboutBoxStyling }>
                <h3>Allmän information:</h3>
                <div id="primary">
                    <p />Three Musky Tears spelar en svängig blandning av jazz, funk, och pop. Trion bjuder på egna låtar med grymt ös och texter på svenska, och har även en stor repertoar med spännande covers.
                    <p />Bandet består av tre medlemmar på gitarr, munspel, cajon, och sång, och kan spela såväl amplifierat som hel-akustiskt, beroende på behov och önskemål.
                    <p />Three Musky Tears har erfarenhet av många typer av spelningar och tar gärna emot bokningar av alla dess slag, vare sig det är festivalgig på stor scen, mindre akustiska spelningar på gatan eller för att underhålla på företagsfesten.
                    <p><b>Spelglädje och röj garanteras!</b></p>
                    <p />Kontakta oss via facebook eller email, se nedan.
                </div>
            </div>
        );
    }
}

export default AboutBox;
