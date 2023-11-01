import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");


  const handleUpClick = () => {
    // console.log("Uppercase button Clicked");
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    // console.log("Uppercase button Clicked");
    setText(text.toLowerCase());
  };
  
  const handleClearClick = () => {
    
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    // console.log("On Change : changing text");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> character in total</p>
        <p> <b>{text.split(" ").length * 0.008}</b> minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
