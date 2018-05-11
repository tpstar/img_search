import React, { Component } from "react";
import { connect } from "react-redux";

class PictureList extends Component {

  renderPictures(pictureData) {

    const {title, link, media } = pictureData;
    // const pictureSource = pictureData.media.m;
    console.log(media.m)

    return (
      <div key={link}>
        <img src={media.m} alt={title} className="picture"/>
      </div>
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
