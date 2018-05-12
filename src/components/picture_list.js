import React, { Component } from "react";
import { connect } from "react-redux";
import imagesLoaded from 'imagesloaded';


class PictureList extends Component {

  resizeGridItem(item){
     let grid = document.getElementsByClassName("grid")[0];
     let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
     let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
     let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
     item.style.gridRowEnd = "span "+rowSpan;
  }

  resizeInstance(instance){
    console.log(this);
     let item = instance.elements[0];
     this.resizeGridItem(item)
  }

  componentDidUpdate() {
    let allItems = document.getElementsByClassName("item");
    for(let x=0; x<allItems.length ;x++){
       this.resizeGridItem(allItems[x]);
    }
    let allItemsAfterImgLoaded = document.getElementsByClassName("item");
    for(let x=0;x<allItems.length;x++){
       imagesLoaded( allItemsAfterImgLoaded[x], this.resizeInstance.bind(this));
    }
  }

  renderPictures(pictureData) {

    const {title, link, media } = pictureData;

    return (
      <div className="item" ref="item" key={link}>
        <div className="content">
          <img src={media.m} alt={title} className="picture" ref="picture"/>
          <p>{title}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="grid" ref="grid">
        {this.props.pictures.map(this.renderPictures)}
      </div>
    );
  }
}

const mapStateToProps = ({ pictures }) => ({ pictures });

export default connect(mapStateToProps,{})(PictureList);
