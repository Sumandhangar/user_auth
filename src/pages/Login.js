import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory, Link } from "react-router-dom";
import axiox from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate, setErrorEmpty } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const Login = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  let history = useHistory();
  let dispatch = useDispatch();
  const {user, error} = useSelector(state => state.auth);


  useEffect(() => {
    dispatch(setErrorEmpty());
  if(user) {
    history.push("/");
  }
  }, [user])


  const login = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));

    // axiox
    //   .post("http://localhost:5000/api/auth/login", {
    //     email,
    //     password,
    //   })
    //   .then((response) => {
    //     console.log("response", response);
    //     localStorage.setItem(
    //       "login",
    //       JSON.stringify({
    //         userLogin: true,
    //         token: response.data.access_token,
    //       })
    //     );
    //     setError("");
    //     setEmail("");
    //     setPassword("");
    //     setLogoutUser(false);
    //     history.push("/");
    //   })
    //   .catch((error) => setError(error.response.data.message));
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Login Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={login}
      >
        <TextField
          id="username"
          label="Username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
      <p>
        Don't have an account then please do{" "}
        <Link to="/register">Register</Link> yourself
      </p>
    </div>
  );
};

export default Login;
