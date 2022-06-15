import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "./Products";
import Layout from "./Layout";

const Home = () => {
  const { user } = useSelector(state => state.auth);


  const userNotLogin = () => 
  (
    <>
       <Layout/>
    </>
  );
  return (
    <div style={{ marginTop: "100px" }}>
      {user ? <h2>Welcome Back User</h2> : <>{userNotLogin()}</>}
    </div>
  );
};

export default Home;
