import React from "react";

const Title = (props) => {
  return (
    <header style={styles}>
      <h1>{props.children}</h1>
    </header>
  )
}

const styles = {
  textAlign: 'center',
  margin: '30px 0 20px'
}

export { Title };
