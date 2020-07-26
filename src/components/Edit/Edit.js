import React, { Component } from 'react';
import './Edit.css';

class Edit extends Component {
  // Renders the entire Edit on the DOM
  
  handleCancel = () => {
    console.log('In handleCancel');
    this.props.history.push('/details');
  }

  
  render() {
    return (
      <div className="Edit">
        <h1>Edit</h1>
        <br/>
        <button onClick={this.handleCancel}>Cancel</button>
        
      </div>
    );
  }
}

export default Edit;