import React, { useState } from "react";
import { Link } from "react-router-dom/";

import "./Form.css";
import Button from "../../UI/Button/Button";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const signupHandler = (event) => {
    event.preventDefault();
    // Sends this data
    const SignupData = JSON.stringify({
      username: username,
      email: email,
      phone_number: phone_number,
      password: password,
      cpassword: cpassword,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: SignupData,
    };

    fetch("http://127.0.0.1:8000/user", requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setUsername("");
        setEmail("");
        setPhone_number("");
        setPassword("");
        setCpassword("");
      });
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const phoneNumberHandler = (event) => {
    setPhone_number(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const cpasswordHandler = (event) => {
    setCpassword(event.target.value);
  };

  return (
    <form className="form" onSubmit={signupHandler}>
      <div className="flex-column">
        <label>Username </label>
      </div>
      <div className="inputForm">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          placeholder="Enter your Username"
          className="input"
          value={username}
          onChange={usernameHandler}
        />
      </div>
      <div className="flex-column">
        <label>Email </label>
      </div>
      <div className="inputForm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          viewBox="0 0 32 32"
          height="20"
        >
          <g data-name="Layer 3" id="Layer_3">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
          </g>
        </svg>
        <input
          placeholder="Enter your Email"
          className="input"
          type="email"
          onChange={emailHandler}
          value={email}
        />
      </div>
      <div className="flex-column">
        <label>Phone Number </label>
      </div>
      <div className="inputForm">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          placeholder="Enter your Phone Number"
          className="input"
          onChange={phoneNumberHandler}
          value={phone_number}
          type="text"
        />
      </div>
      <div className="flex-column">
        <label>Password </label>
      </div>
      <div className="inputForm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          viewBox="-64 0 512 512"
          height="20"
        >
          <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
          <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
        </svg>
        <input
          placeholder="Enter your Password"
          className="input"
          type="password"
          onChange={passwordHandler}
          value={password}
          autoComplete="new-password"
        />
      </div>
      <div className="flex-column">
        <label>Confirm Password </label>
      </div>
      <div className="inputForm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          viewBox="-64 0 512 512"
          height="20"
        >
          <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
          <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
        </svg>
        <input
          placeholder="Confirm your Password"
          className="input"
          type="password"
          onChange={cpasswordHandler}
          value={cpassword}
          autoComplete="new-password"
        />
      </div>
      <Button className="button-submit">Sign Up</Button>
      <p className="p">
        Already have an account?
        <Link className="span" to="/accounts/login">
          Log in
        </Link>
      </p>
      <div className="flex-row"></div>
    </form>
  );
};

export default SignUp;
