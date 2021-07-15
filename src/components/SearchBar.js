import React, { Component } from 'react'

export default class SearchBar extends Component {
   handleChange = event => {
       this.props.setQuery(event.target.value);
  }
    render() {
        return (
            <input type="text" value={this.props.query} onChange={this.handleChange} />
        )
    }
}