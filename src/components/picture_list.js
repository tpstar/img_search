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

const mapStateToProps = state => {
  const { pictures } = state; //pictures from reducers
  console.log('mapstatetoprops', pictures);
}

export default connect(mapStateToProps,{})(PictureList);
