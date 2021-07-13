import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delteUser } from "./actions/userAction";
import { Link, NavLink } from 'react-router-dom'
import "./App.css";

const Home = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row" style={{marginLeft:"630px"}}><h1>User List</h1></div>
      <div className="row">
        <div className="four columns"></div>
        <div className="two columns">

          <NavLink style={{ marginLeft: "300px" }} to="/add-user">
            <button>
            Add User</button>
          </NavLink>

          <table className="u-full-width">
            <thead>
              <tr>
                <th>Name:</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date of Birth</th>
                <th>Actions</th>

              </tr>
            </thead>
            {users.map((user) => (
              <tbody>
                <td >{user.name}</td>
                <td >{user.email}</td>
                <td >{user.phone}</td>
                <td >{user.dob}</td>
               <td >  
                 <Link to={{ pathname: "/update-user", state: user }}><button>Edit</button></Link>
                <button style={{backgroundColor:"red"}}  onClick={() => dispatch(delteUser(user.email))}>
                  Delete
                </button>
                </td> 
              </tbody>
            ))}</table>
        </div></div></div>
  );
};

export default Home;