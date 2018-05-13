import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPictures } from "../actions";


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
    // fetch pictures
    this.props.fetchPictures(this.state.term);
    this.setState({term: ""}) // initialize the search term
  }

  render() {
    const styles = {
      marginBottom: '30px',
      // width: '60%',
      // marginLeft: '20%'
    }
    return (
      <div style={styles} id="search-bar">
        <form onSubmit={this.handleOnSubmit} className="input-group">
          <input
            placeholder="Type Your Search Term Here"
            className="form-control"
            value={this.state.term}
            onChange={this.handleOnChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchPictures })(SearchBar);
