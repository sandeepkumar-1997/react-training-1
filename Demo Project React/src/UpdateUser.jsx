
import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "./actions/userAction";
import { useForm } from "react-hook-form";
import "./App.css";

const EditUser = ({ history, location }) => {
  const user = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updateUser(data))
    history.push("/")
  }

  const onError = (error) => {
    if (error.name) {
      setError("name", { message: "*Name can't be empty" })
    }
    if (error.email) {
      setError("email", { message: "*Please enter updated email" })
    }
    if (error.phone) {
      setError("phone", { message: "*Phone number must be 10 digits" })
    }
    if (error.dob) {
      setError("dob", { message: "*Date of Birth can't be empty" })
    }
  }

  return (
    <div >
      <div className="row" style= {{marginLeft:"380px"}}>
             <h1>Update User</h1>
            </div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="row">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%" ,margin:"auto" }} className="three columns">
            <label >Name</label>  <input
              {...register("name", {
                required: true
              })}
              defaultValue={user.name}
              type="text"
              placeholder="Enter correct name"
            /> <br />
            {errors?.name && <p style={{color:"red"}}> {errors.name.message}</p>}
            <label>Email</label>
            <input
              {...register("email", {
                required: true,
                // pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
              defaultValue={user.email}
              type="email"
              placeholder="Enter updated email"
            />
             {errors?.email && <p style={{color:"red"}}>{errors.email.message}</p>}
             <br />
            <label >Phone</label>  <input
              {...register("phone", { required: true, maxLength: 10, minLength: 10 })}
              defaultValue={user.phone}
              type="phone"
              placeholder="Enter updated phone number"
            />
            {errors?.phone && <p style={{color:"red"}}>{errors.phone.message}</p>}
             <br />
            <label >Date of Birth</label>  <input {...register("dob", { required: true })} defaultValue={user.dob} type="date" />{errors?.dob && <p style={{color:"red"}}>{errors.dob.message}</p>} <br />
            <button type="submit">Update</button>
          </div> </div> </form>
    </div>
  );
};

export default EditUser;
