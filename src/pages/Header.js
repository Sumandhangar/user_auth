import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../redux/actions";

const Header = ({ logoutUser, setLogoutUser }) => {
  // const [login, setLogin] = useState("");
  const { user } = useSelector(state => state.auth);


  // useEffect(() => {
  //   hydrateStateWithLocalStorage();
  // }, [logoutUser]);

  let dispatch = useDispatch();


  const logout = () => {
    // localStorage.removeItem("login");
    // setLogoutUser(true);
    dispatch(logoutInitiate());
  };

  // const hydrateStateWithLocalStorage = () => {
  //   if (localStorage.hasOwnProperty("login")) {
  //     let value = localStorage.getItem("login");
  //     try {
  //       value = JSON.parse(value);
  //       setLogin(value);
  //     } catch (e) {
  //       setLogin("");
  //     }
  //   }
  // };
  return (
    <div>
      <header style={{ marginTop: "20px" }}>
        {user ? (
          <Button
            className='btn'
            style={{ width: "100px" }}
            variant="contained"
            color="secondary"
            onClick={logout}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button
              style={{ width: "100px" }}
              variant="contained"
              color="secondary"
              className="font-weight-bold"
            >
              Login
            </Button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
