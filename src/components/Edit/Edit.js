import React, { Component } from 'react';
import './Edit.css';
import {connect} from 'react-redux';

class Edit extends Component {
  
  state = {
    title: this.props.reduxState.details.title,
    description: this.props.reduxState.details.description,
    id: this.props.reduxState.details.id,
  }


  handleCancel = () => {
    console.log('In handleCancel');
    this.props.history.push('/details');
  }

  textInput = (event) => {
    console.log('In textInput')
    this.props.dispatch({type: 'UPDATE_MOVIE', payload: this.state});
    this.props.history.push('/details/');
  };
  
  descriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  };

  titleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  };

  // Renders the entire Edit on the DOM
  render() {
    return (
      <div className="Edit">
        <h1>Edit</h1>
        <br/>
        <input value={this.state.title} 
        onChange={this.titleChange} type='text'>
        </input>

        <textarea value={this.state.description} 
        onChange={this.descriptionChange} type='text'>
        </textarea>

        <button onClick={this.handleCancel}>Cancel</button>
        <button onClick={this.textInput}>Save</button>
        
      </div>
    );
  }
}

const mapStateToProps = (reduxState)=>({
  reduxState
})

export default connect(mapStateToProps)(Edit);