import React, { Component } from 'react';
import './Home.css';
import {connect} from 'react-redux';

class Home extends Component {

    componentDidMount(){
        // This will call our getMovies/getGeners generators on load so we can display on DOM
        this.props.dispatch({ type: 'FETCH_MOVIES' });
        
    }

    handleClick = (movies) => {
        console.log('In handleClick');
        this.props.dispatch({ type: 'SET_DETAILS', payload: movies });
        this.props.history.push('/details/');
    }

  // Renders the entire Home on the DOM
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
       <form>
        {
            this.props.reduxState.movies.length>0 ? 
            this.props.reduxState.movies.map((movies, index)=>
                    <ul key={index} movies={movies} id={movies.id}>
                        <li onClick={()=>this.handleClick(movies)}>
                            <img
                            src={movies.poster}>
                            </ img>                        
                        </li>
                    </ul>) :
            false }
        </form>

        <br/>
        
      </div>
    );
  }
}

const mapStateToProps = (reduxState)=>({
    reduxState
})

export default connect(mapStateToProps)(Home);