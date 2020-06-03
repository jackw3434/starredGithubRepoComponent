import React from 'react';
import MostStarredRepos from './components/mostStarredRepos';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // a component that displays the three most starred GitHub
  // repos for a given language, created in the last month.


  // info required to display:

  // Title: "Most Stars: '{the given language}'" (API reference - language: "Assembly")
  // Date since last month i.e "Repos created since 7th December 2017" (API reference - created:YYY-MM-DD)

  // Repository Name: (API reference - full_name: "chrislgarry/Apollo-11") should be a link.
  // clicking the link should open the repo in a new tab (API reference - html_url: "https://github.com/chrislgarry/Apollo-11")

  // Description: (APIT reference - description: "Original Apollo 11 Guidance Computer (AGC) source code for the command and lunar modules.")

  // Date in which the repo was created - "Created at: 11th December 2017" (API reference - created_at: "2014-04-03T15:45:02Z")

  // Star Icon with count of stars (API reference - stargazers_count: 47351)

  // 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'   

  render() {
    return (
      <div >
        <MostStarredRepos language='javascript' perPage={3} />
      </div >
    )
  }
}