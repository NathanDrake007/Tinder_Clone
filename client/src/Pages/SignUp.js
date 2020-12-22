import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Helpers/axios";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../StateProvider";
import FormData from "form-data";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const history = useHistory();
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const signUp = async (event) => {
    event.preventDefault();
    console.log("signup");
    const form = new FormData();
    form.append("name", username);
    form.append("email", email);
    form.append("password", password);
    form.append("image", image);
    const response = await axios.post("/signup", form);

    if (response.status === 201) {
      console.log("success");
      const cookies = new Cookies();
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
        <label for="username">UserName</label>
        <input
          type="text"
          id="username"
          placeholder="enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input type="file" onChange={handleChange} />
        <Button onClick={signUp} variant="contained" color="primary">
          SIGN UP
        </Button>
        <Link to="/login" className="switch">
          <span>Click Here To Login</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
