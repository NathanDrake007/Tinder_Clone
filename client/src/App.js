import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        <Switch>
          {user != null ? <Route path="/home" exact component={Home} /> : null}
          <Route path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
