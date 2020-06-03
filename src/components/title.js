import React from 'react';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  } 

  render() {
    return (
      <div>
        < p style={{ fontWeight: 'bold' }}> Most Stars: '{this.props.language}'</p >
      </div>
    )
  }
}