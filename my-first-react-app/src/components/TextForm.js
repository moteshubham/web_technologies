import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    // console.log("Uppercase button Clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowClick = () => {
    // console.log("Uppercase button Clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    let textCleared = "";
    setText(textCleared);
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change : changing text");
    setText(event.target.value);

  };
  const handleCopyText = () => {
    const myText = document.getElementById("myBox");
    myText.select();
    navigator.clipboard.writeText(myText.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpace = () => {
    let myText = text.split(/[ ]+/).join(" ");
    setText(myText);
    props.showAlert("Extra Space Removed", "success");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#646d87",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove ExtraSpaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Your text summary</h2>
        <p>
          {" "}
          <b>{text.split(" ").length}</b> words and <b>{text.length}</b> character in total
        </p>
        <p>
          {" "}
          <b>{text.split(" ").length * 0.008}</b> minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
