import React, { Component } from 'react';
import './Home.css';
import {connect} from 'react-redux';

class Home extends Component {

    componentDidMount(){
        // This will call our getMovies/getGeners generators on load so we can display on DOM
        this.props.dispatch({ type: 'FETCH_MOVIES' });
        this.props.dispatch({ type: 'FETCH_GENRES' });
    }

  // Renders the entire Home on the DOM
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        {
            JSON.stringify(this.props.reduxState.movies)
        }
        <br/>
        
      </div>
    );
  }
}

const mapStateToProps = (reduxState)=>({
    reduxState
})

export default connect(mapStateToProps)(Home);