import React from 'react';

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('/projects/new', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({name: this.state.value}), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Project Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }
}