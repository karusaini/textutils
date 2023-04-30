import "./App.css";
import Navbar from "./Navbar";
import TextFrom from "./TextFrom";
import { useState } from "react";
// import About from "./About";
import Alert from "./components/alert";

// import { BrowserRouter as Router, Switch, Route  } 
// from "react-router-dom";

function App() {
  // Sabse pehle yaha dark aapne bina "" iske likha h isliye
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not ()
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#5b586c";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now ';
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextFrom  showAlert={showAlert} heading="Enter the to analyze below"  mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
