import React, { Component } from 'react';
import './Details.css';
import {connect} from 'react-redux';

class Details extends Component {
  
  componentDidMount(){
    // This will call our getMovies/getGeners generators on load so we can display on DOM
    // this.props.dispatch({ type: 'FETCH_GENRES' });
}

  handleHome = () => {
    console.log('In handleHome');
    this.props.history.push('/');
  }

  handleEdit = () => {
    console.log('In handleEdit');
    this.props.history.push('/edit');
  }

  // Renders the entire Details on the DOM
  render() {
    return (
      <div className="Details">
        <h1>Details</h1>
        <button onClick={this.handleHome}>Back to List</button>
        <button onClick={this.handleEdit}>Edit</button>
        <br/>
        
      </div>
    );
  }
}

const mapStateToProps = (reduxState)=>({
  reduxState
})

export default connect(mapStateToProps)(Details);