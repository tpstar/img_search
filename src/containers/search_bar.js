import React, { Component } from "react";
import { connect } from "react-redux";
// import { FormControl } from 'react-bootstrap';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  handleOnChange = event => {
    this.setState({term: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault(); // prevent the page from refreshing
    // fetch pictures here
    console.log(this.state.term);
    this.setState({term: ""}) // initialize the search term
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="input-group">
        <input
          placeholder="Search Pictures"
          className="form-control"
          value={this.state.term}
          onChange={this.handleOnChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    );
  }
}


export default SearchBar;
