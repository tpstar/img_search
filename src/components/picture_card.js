import React from "react";

const PictureCard = (props) => {

  const { title, link, media } = props;

  return (
    <div className="item">
      <div className="content">
        <img src={media.m} alt={title} className="picture"/>
        <p>{title}</p>
      </div>
    </div>
  )
}

// const styles = {
// }

export { PictureCard };
