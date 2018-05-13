import React from "react";

const PictureCard = (props) => {

  const { title, link, media } = props;

  return (
    <div className="item" style={styles.itemStyle}>
      <div className="content">
        <a href={link} target="_blank">
          <img src={media.m} alt={title} className="picture" style={styles.imageStyle}/>
        </a>
        <p style={styles.paragraphStyle}>{title}</p>
      </div>
    </div>
  )
}

const styles = {
  paragraphStyle: {
    fontSize: '95%',
    padding: '4%',
    color: '#555'
  },
  imageStyle: {
    width: '100%'
  },
  itemStyle: {
    padding: '0',
    background: '#eff1f3'
  }

}

export { PictureCard };
