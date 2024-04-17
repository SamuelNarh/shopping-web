import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  email: "",
  password: "",
  accesstoken: "",
  token_type: "",
  user_id: 0,
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
  const [user_id, setUser_id] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  // Handling the signin event of the form
  const signinHandler = (event) => {
    event.preventDefault();

    try {
      if (email.trim().length < 5 || password.length < 8) {
        alert("Please enter valid email and password!");
      } else {
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
            setUser_id(data.user_id);
            setUsername(data.username);
           return navigate("/signin/user");
          })
          .catch((err) => console.log(err))
          .finally(() => {
            setEmail("");
            setPassword("");
          });
      }
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
