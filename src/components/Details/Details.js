
import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
  
  componentDidMount(){
    // This will call our getMovies/getGeners generators on load so we can display on DOM
    this.props.dispatch({ type: 'FETCH_GENRES' });
}

  // Renders the entire Details on the DOM
  render() {
    return (
      <div className="Details">
        <h1>Details</h1>
        <br/>
        
      </div>
    );
  }
}

export default Details;