import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./actions/userAction";
import { useForm } from "react-hook-form";
import "./App.css";

const Adduser= ({ history }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addUser(data))
    history.push("/")
  }

  const onError = (error) => {
    if (error.name) {
      setError("name", { message: "*Please enter the name" })
    }
    if (error.email) {
      setError("email", { message: "*Enter a valid email" })
    }
    if (error.phone) {
      setError("phone", { message: "*Phone number must be 10 digits" })
    }
    if (error.dob) {
      setError("dob", { message: "*Please enter date of birth"})
    }
  }

  return (
    <div className="container">
      <div className="row" style= {{marginLeft:"380px"}}>
        <h1>Add User</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="row">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%", margin: "auto" }} className="three columns">
            <label >Name</label>  
            <input
              {...register("name", {
                required: true
              })}

              type="text"
              placeholder="Enter name"
            /> <br />
            {errors?.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            <label >Email</label>
            <input
              {...register("email", { required: true})}
              type="email"
              placeholder="Enter email"
            /> 
            {errors?.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            <br />
            <label >Phone</label>  <input
              {...register("phone", { required: true, maxLength: 10, minLength: 10})}
              type="phone"
              placeholder="Enter mobile number"

            />
            {errors?.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
             <br />
            <label >Date of Birth</label>
            <input {...register("dob", { required: true })}
              type="date" />
            {errors?.dob &&
              <p style={{ color: "red" }}>{errors.dob.message}</p>} <br />
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default Adduser;
