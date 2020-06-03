import React from 'react';
import StarIcon from './starIcon'

export default class DateAndStar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let date = new Date(this.props.date);
        date.toDateString();

        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

        let humanReadableDate = day + " " + monthNames[month] + " " + year;

        return (
            < div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ color: 'grey' }}>Created: {humanReadableDate}</p>
                <div style={{ display: 'flex' }}>
                    <StarIcon />
                    <p style={{ color: 'grey' }}>Star Count: {this.props.starCount}</p>
                </div>
            </div >
        )
    }
}