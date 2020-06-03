import React from 'react';
import DateAndStar from './dateAndStar';

export default class SingleRepo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        let { full_name, description, created_at, stargazers_count, html_url } = this.props.repo;

        return (
            <div>
                {/* Github Repo full name */}
                <div onClick={() => window.open(html_url)}>
                    < p style={{ color: 'blue', textDecorationLine: 'underline' }}>{full_name}</p >
                </div>

                {/* Github Repo description */}
                < p >{description ? description : "No Description"}</p >

                {/* Github Repo Date and Star Count component */}
                <DateAndStar date={created_at} starCount={stargazers_count} />

            </div>
        )
    }
}