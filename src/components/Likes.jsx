import React from "react";
// // onclick =() => {
//   this.handleClick(movie);
// },likes=> true

const Likes = props => {
  // true
  let classes = "fa fa-heart";
  if (!props.likes) {
    classes = classes + "-o";
    console.log(classes);
  }

  return <i onClick={props.onClick} className={classes}></i>;
};

export default Likes;
