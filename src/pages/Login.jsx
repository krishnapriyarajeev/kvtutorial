import "../styles.scss";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Logo from "../assets/kv-logo.png";
import login from "../assets/kv-login.jpeg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("Token", true);
    const uname = "admin";
    const pword = "12345678";
    console.log(userName);
    console.log(password);
    // console.log(valu);
    // console.log({ valu, valp, uname, pword, userName, password });

    if (uname === userName && pword === password) navigate("/employees");
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [erroru, setErroru] = useState(false);
  const [errorp, setErrorp] = useState(false);

  const userNameRef = useRef();
  let valu;
  let valp;

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const onChangePassword = (text) => {
    valp = text;
    setPassword(text);
    setErrorp(text.length < 8);

    console.log(text);
  };

  const onChangeUsername = (text) => {
    valu = text;
    if (text.length > 10) {
      setErroru(true);
    } else {
      setErroru(false);
      setUserName(text);
    }

    console.log(text);
  };

  return (
    <div className="login-wrapper">
      {/* <!-- Hero Section --> */}
      <div className="hero">
        <div className="wrapper-hero">
          <img src={login} alt="Login Image" className="login-image" />
        </div>
      </div>
      {/* <!-- Login Section --> */}
      <div className="login">
        <form method="post" className="form-login">
          <img src={Logo} alt="Logo" className="logo" />
          <TextField
            onChange={onChangeUsername}
            userName={valu}
            label="Username"
            type="text"
            ref={userNameRef}
            error={erroru}
          />
          <TextField
            onChange={onChangePassword}
            userName={valp}
            label="Password"
            type="password"
            error={errorp}
          />
          <Button onClick={handleClick} text="Log In" color="#ffffff" />
        </form>
      </div>
    </div>
  );
};

export default Login;
