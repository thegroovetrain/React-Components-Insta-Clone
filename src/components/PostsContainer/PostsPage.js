//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  // * this seems like a serious waste of bytes to be quite honest. 
  // * why would I use state here?
  return (
    <div className="posts-container-wrapper">
      { dummyData.map((p) => { return (<Post post={p} />) })}
    </div>
  );
};

export default PostsPage;

