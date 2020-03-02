// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  return (
    <div>
      { props.comments.map((c) => { return props.comments ? <Comment comment={c} /> : null }) }
      <CommentInput />
    </div>
  );
};

export default CommentSection;