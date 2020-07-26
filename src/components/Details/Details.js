import React, { Component } from 'react';
import './Details.css';
import {connect} from 'react-redux';

class Details extends Component {
  
  componentDidMount(){
    // This will call our getMovies/getGeners generators on load so we can display on DOM
    // this.props.dispatch({ type: 'FETCH_GENRES' });
}

  handleHome = () => {
    console.log('In backHome');
    this.props.history.push('/');
  }

  // Renders the entire Details on the DOM
  render() {
    return (
      <div className="Details">
        <h1>Details</h1>
        <button onClick={this.handleHome}>Back to List</button>
        <br/>
        
      </div>
    );
  }
}

export default connect()(Details);