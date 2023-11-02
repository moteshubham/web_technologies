// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3c4f63";
      showAlert("Dark Mode enabled.","success");
      document.title="TextUtils-Dark"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled.","success");
    }
  };

  const showAlert = (message, type) => {
    {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter text to analyze below" showAlert={showAlert} mode={mode} />
      </div>
      {/* <div>
        <About />
      </div> */}
    </>
  );
}

export default App;
