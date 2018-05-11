import React, { Component } from "react";
import { connect } from "react-redux";

class PictureList extends Component {

  render() {
    return (
      <p>
        Picture List
      </p>
    );
  }
}


export default connect(null,{})(PictureList);
