import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../redux/actions";

const Header = ({ logoutUser, setLogoutUser }) => {
  const { user } = useSelector((state) => state.auth);

  let dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutInitiate());
  };

  return (
    <div>
      <header style={{ marginTop: "20px" }}>
        {user ? (
          <Button className="btn" style={{ width: "100px" }} variant="contained" color="secondary" onClick={logout}>Logout</Button>
        ) : (
          <Link to="/login"><Button style={{ width: "100px" }} variant="contained" color="secondary" className="font-weight-bold">Login</Button></Link>
        )}
      </header>
    </div>
  );
};

export default Header;
