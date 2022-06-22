import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate, setErrorEmpty } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const Register = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  let dispatch = useDispatch();
  const { user, error } = useSelector(state => state.auth);


  useEffect(() => {
    dispatch(setErrorEmpty());
    if (user) {
      history.push("/");
    }
  }, [user])

  const register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <Link to='/'><button className="btn btn-primary mt-5">Back to Home</button></Link>
            <div style={{ marginTop: "100px" }}>
              <h2>Register Page</h2>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <form className={classes.root} noValidate autoComplete="off" onSubmit={register}>
                <TextField id="username" label="Username" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <TextField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <Button style={{ width: "100px" }} variant="contained" color="primary" type="submit">Register</Button>
              </form>
              <p>Already have an account then please <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
