import React, { Component } from "react";
import { connect } from "react-redux";

class PictureList extends Component {

  renderPictures(pictureData) {

    const {title, link, media } = pictureData;

    return (
      <figure key={link}>
        <img src={media.m} alt={title} className="picture"/>
        <figcaption>{title}</figcaption>
      </figure>
    );
  }

  render() {
    return (
      <div>
        {this.props.pictures.map(this.renderPictures)}
      </div>
    );
  }
}

const mapStateToProps = ({ pictures }) => ({ pictures });

export default connect(mapStateToProps,{})(PictureList);
