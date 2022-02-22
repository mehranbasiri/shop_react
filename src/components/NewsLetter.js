import { Send } from "@material-ui/icons";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>NewsLetter</h1>
      <p>Get timely updates from your favorite products</p>
      <div className="input-box">
        <input placeholder="Your email" />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
