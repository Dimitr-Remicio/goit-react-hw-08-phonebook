import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { register } from "../redux/auth/operationsAuth";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { selectIsAuthLoading } from "../redux/auth/selectorauth";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const primary = {
    main: "#ffffff",
    light: "#ffffff",
    dark: "#ffffff",
    contrastText: "#fff",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const credentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    if (name.value && email.value && password.value) {
      dispatch(register(credentials));
      Notify.success("Congratulations! You have been registered.");
    } else {
      Notify.failure("Please verify the provided information and try again.");
    }
    console.log(credentials);
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        minWidth: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#202020",
      }}
    >
      <h2>Register</h2>
      <div
        style={{
          width: "50%",
          maxWidth: "30vw",
          backgroundColor: "#2D2D2D",
          color: "white",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent>
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px",
                padding: "30px",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div className="divnameinput">
                <p>Name</p>
              </div>
              <input label="Name" name="name" required />
              <div className="divnameinput">
                <p>Email</p>
              </div>
              <input label="Email" name="email" type="email" required />
              <div className="divnameinput">
                <p>Password</p>
              </div>
              <input
                label="Password"
                name="password"
                type="password"
                required
              />
            </div>

            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                margin: "0 auto",
                backgroundColor: "#484441",
                color: "white",
              }}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Send"}
            </button>
          </form>
        </CardContent>
      </div>
    </div>
  );
};

export default Register;
