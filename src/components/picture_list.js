import React, { Component } from "react";
import { connect } from "react-redux";
import imagesLoaded from 'imagesloaded';
import { PictureCard } from './picture_card';


class PictureList extends Component {

  resizeGridItem(item){
     let grid = document.getElementsByClassName("grid")[0];
     let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
     let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
     let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
     item.style.gridRowEnd = "span "+rowSpan;
  }

  resizeInstance(instance){
    // console.log(this);
     let item = instance.elements[0];
     this.resizeGridItem(item)
  }

  componentDidUpdate() {
    let allItems = document.getElementsByClassName("item");
    for(let x=0; x<allItems.length ;x++){
       this.resizeGridItem(allItems[x]);
    }
    let allItemsAfterImgLoaded = document.getElementsByClassName("item");
    //after images are loaded within a grid item, it is resized to ensure that the content is fully dispalyed
    for(let x=0;x<allItems.length;x++){
       imagesLoaded( allItemsAfterImgLoaded[x], this.resizeInstance.bind(this));
    }
  }

  renderPictures(pictureData) {

    const {title, link, media } = pictureData;

    return (
      <PictureCard key={link} title={title} link={link} media={media}/>
    );
  }

  render() {
    return (
      <div className="grid">
        {this.props.pictures.map(this.renderPictures)}
      </div>
    );
  }
}

const mapStateToProps = ({ pictures }) => ({ pictures });

export default connect(mapStateToProps,{})(PictureList);
