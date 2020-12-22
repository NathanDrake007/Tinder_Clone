import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import axios from "../Helpers/axios";
import Cookies from "universal-cookie";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const cookies = new Cookies();
  useEffect(() => {
    if (user) {
      history.push("/home");
    }
    var _user;
    if (cookies.get("jwt") != null) {
      _user = cookies.get("user");
      console.log(cookies.get("jwt"));
      dispatch({
        type: "SET_USER",
        user: _user,
      });
    }
    // eslint-disable-next-line
  }, [user]);

  const signIn = async (event) => {
    event.preventDefault();
    const response = await axios.post("/login", {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      console.log(response.data);
      cookies.set("jwt", response.data.jwt, { path: "/" });
      cookies.set("user", response.data.user, { path: "/" });
      dispatch({
        type: "SET_USER",
        user: response.data.user,
      });
      history.push("/home");
    } else {
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  };
  return (
    <div className="login">
      <div className="login_form">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="enter your mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signIn} variant="contained" color="primary">
          SIGN IN
        </Button>
        <Link to="/signup" className="switch">
          <span>Click Here To Sign Up</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
