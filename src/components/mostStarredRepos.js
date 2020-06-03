import React from 'react';
import SingleRepo from './singleRepo';
import Title from './title';
import CreatedSince from './createdSince';

export default class MostStarredRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createdSince: "",
            mostStarredRepos: []
        };
    }

    // 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'  

    componentDidMount() {

        let date, year, month, day, lastMonth, query;

        date = new Date();
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();
   
        if (month < 10) {
            month = '0' + month
        }

        if (day < 10) {
            day = '0' + day
        }

        lastMonth = year + '-' + month + '-' + day;

        query = 'created:>=' + lastMonth + '+language:' + this.props.language;

        // Simple GET request using fetch
        fetch('https://api.github.com/search/repositories?q=' + query + '&per_page='+ this.props.perPage +'&sort=stars&order=desc')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    createdSince: new Date(lastMonth).toDateString(),
                    mostStarredRepos: data.items
                })
            })
    }

    render() {
        return (
            < div style={{ border: "3px solid black", width: 400, padding: 20 }}>

                <div style={{paddingBottom:5}}>                 
                    <Title language={this.props.language} />             
                    <CreatedSince date={this.state.createdSince} />
                </div>

                {/* Top 3 Repos */}
                {/* Single Repo Component */}
                {this.state.mostStarredRepos.map((repo, i) => {
                    return (
                        < div key={i}>
                            <SingleRepo repo={repo} />
                        </div >
                    )
                })}
            </div >
        )
    }
}