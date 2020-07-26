import React, { Component } from 'react';
import './Home.css';
import {connect} from 'react-redux';

class Home extends Component {

    componentDidMount(){
        // This will call our getMovies/getGeners generators on load so we can display on DOM
        this.props.dispatch({ type: 'FETCH_MOVIES' });
        
    }

  // Renders the entire Home on the DOM
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        {this.props.reduxState.movies.length>0 ? this.props.reduxState.movies.map((movies, index)=> {
            return (<ul key={index}>
                        <li>{movies.title}</li>
                    </ul>)
        }) : false }

        <br/>
        
      </div>
    );
  }
}

const mapStateToProps = (reduxState)=>({
    reduxState
})

export default connect(mapStateToProps)(Home);