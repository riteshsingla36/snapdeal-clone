import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import address from "../Utils/apiAddress";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const toastoptions = {
    position: "top-center",
    autoClose: 3000,
    newestOnTop: true,
    pauseOnHover: true,
    theme: "colored",
  };

  const handleValidation = () => {
    if (details.name === "") {
      toast.error("Please enter a name", toastoptions);
      return false;
    }
    if (details.email === "") {
      toast.error("Please enter a email", toastoptions);
      return false;
    }
    if (details.password.length < 8) {
      toast.error("Password must be at least 8 characters", toastoptions);
      return false;
    }
    if (details.password !== details.confirmPassword) {
      toast.error("Password and confirm password do not match", toastoptions);
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (handleValidation()) {
      const { data } = await axios.post(`${address}/user/signup`, {
        name: details.name,
        email: details.email,
        password: details.password,
      });

      if (data.status) {
        localStorage.setItem("snapdeal-user", JSON.stringify(data.user));
        localStorage.setItem("token", JSON.stringify(data.token));
        navigate("/")
      } else {
        toast.error(data.msg, toastoptions);
      }
    }
  };

  return (
    <>
      <Container>
        <div className="main-container">
          <div className="left">
            <img
              src={`https://media.springernature.com/relative-r300-703_m1050/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg`}
              alt="not found"
            />
          </div>
          <div className="right">
            <input
              type="text"
              value={details.name}
              onChange={handleChange}
              placeholder="name"
              name="name"
            />
            <input
              type="email"
              value={details.email}
              onChange={handleChange}
              placeholder="email"
              name="email"
            />
            <input
              type="password"
              value={details.password}
              onChange={handleChange}
              placeholder="password"
              name="password"
            />
            <input
              type="password"
              value={details.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <button onClick={handleSignup}>Register</button>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: grey;
  width: 100%;
  height: 100vh;
  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border: 1px solid silver;
    background-color: red;
    width: fit-content;
    height: fit-content;
    padding: 0.5rem;
    border-radius: 1rem;
    .left {
      img {
        width: 15rem;
        height: 20rem;
        border-radius: 1rem;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      input {
        font-size: large;
        padding: 0.2rem;
        border-radius: 0.3rem;

        &:focus {
          outline: none;
        }
      }
      button {
        background-color: #e50047;
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-size: large;
        padding: 0.4rem;
      }
    }
  }
`;

export default Signup;
