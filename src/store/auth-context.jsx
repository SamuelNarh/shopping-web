import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  email: "",
  password: "",
  accesstoken: "",
  token_type: "",
  username: "",
  emailHandler: () => {},
  passwordHandler: () => {},
  onLogout: () => {},
  signinHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accesstoken, setAccestoken] = useState("");
  const [token_type, setToken_type] = useState("");
  const [user_id, setUser_id] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setAccestoken(localStorage.getItem("auth-token"));
    setToken_type(localStorage.getItem("token-type"));
    setUsername(localStorage.getItem("username"));
    setUser_id(localStorage.getItem("user-id"));
  }, []);


  const navigate = useNavigate();

  // Handling the signin event of the form
  const signinHandler = (event) => {
    event.preventDefault();
    try {
      // if (email.trim().length < 5 || password.length < 8) {
      //   alert("Please enter valid email and password!");
      // } else {
      // Sends this data
      const LoginData = new FormData();
      LoginData.append("username", email);
      LoginData.append("password", password);

      const requestOptions = {
        method: "POST",
        body: LoginData,
      };

      fetch("http://127.0.0.1:8000/login", requestOptions)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          console.log(data);
          setAccestoken(data.access_token);
          setToken_type(data.token_type);
          setUser_id(() => data.user_id, []);
          setUsername(data.username);
          localStorage.setItem("auth-token", data.access_token);
          localStorage.setItem("token-type", data.token_type);
          localStorage.setItem("user-id", data.user_id);
          localStorage.setItem("username", data.username);
          console.log(data.user_id);
          navigate("/");
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setEmail("");
          setPassword("");
        });
    } catch (err) {}
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onLogout = () => {
    setAccestoken("");
    setToken_type("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <AuthContext.Provider
      value={{
        email: email,
        password: password,
        accesstoken: accesstoken,
        token_type: token_type,
        user_id: user_id,
        username: username,
        emailHandler: emailHandler,
        passwordHandler: passwordHandler,
        signinHandler: signinHandler,
        onLogout: onLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
