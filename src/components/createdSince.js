import React from 'react';

export default class CreatedSince extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                < p style={{ fontStyle: 'italic', color: 'grey' }}> Repos created since {this.props.date}</p >
            </div>
        )
    }
}