import React, { Component } from 'react';
import './Details.css';
import {connect} from 'react-redux';

class Details extends Component {
  
//   componentDidMount(){
//     // This will call our getgenres/getGeners generators on load so we can display on DOM
//     this.props.dispatch({ type: 'FETCH_GENRES' });
// }

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
        <img src={this.props.reduxState.details.poster}></img>
        <p>{this.props.reduxState.details.title}</p>
        <p>{this.props.reduxState.details.description}</p>

          <h3>Genres: </h3>
          {this.props.reduxState.details.array_agg.map((genre, index)=>(  
          <p key={index}>{genre}</p>
          ))}
        
        <br/>
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