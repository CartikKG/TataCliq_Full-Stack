import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userAction } from "../../Actions/userAction";
import { USER_ACTIONS } from "../../Reducers/userReducer";
import AuthSuccess from "../AuthSuccess/AuthSuccess";
import Email from "../Email/Email";
import Mobile from "../Mobile/Mobile";
import Otp from "../Otp/Otp";
import "./UserAuth.css";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

// import db from "../../db.json";

const UserAuth = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((storeData) => {
    return storeData.counter.users;
  });
  const [authType, toggleAuthType] = useState("email");
  const [stage, setStage] = useState(0);
  const userInfo = useRef({ email: "", mobile: "" });
  const otpCred = useRef({ type: "", i: "" });
  let navigate = useNavigate();

  useEffect(() => {
    document.getElementById("continue").disabled = true;
    if (usersData.length === 0) {
      getUsersData();
      sessionStorage.setItem("loggedIn", JSON.stringify({}));
    }
  }, []);

  const getUsersData = async () => {
    const res = await fetch(
      // "https://raghvendra-tatacilq-data.onrender.com/users"
      "https://tata-cliq-server.onrender.com/users"
    );
    const data = await res.json();
    // console.log(data);
    dispatch(USER_ACTIONS.setUsers(data));
  };

  const register = async () => {
    // const user = {
    //   email,
    //   mobile,
    // };

    const requestOption = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo.current),
    };

    await fetch(
      // "https://raghvendra-tatacilq-data.onrender.com/users",
      "https://tata-cliq-server.onrender.com/users",
      requestOption
    );
    // const data = await res.json();
    // console.log(data);
    getUsersData();
  };

  const validate = () => {
    if (authType === "email") {
      const email = document.querySelector(".email").value;
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(mailformat)) {
        document.getElementById("continue").disabled = false;

        document.getElementById("continue").style.backgroundImage =
          "linear-gradient(to bottom right, #89216b, #da4453)";
      } else {
        document.getElementById("continue").disabled = true;
      }
    } else if (authType === "signup") {
      const email = document.querySelector(".email").value;
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (email.match(mailformat)) {
        document.getElementById("continue").disabled = false;

        document.getElementById("continue").style.backgroundImage =
          "linear-gradient(to bottom right, #89216b, #da4453)";
      } else {
        document.getElementById("continue").disabled = true;
      }
    } else if (authType === "mobile") {
      const mobile = document.querySelector(".mobile").value;
      if (mobile.length === 10) {
        document.getElementById("continue").disabled = false;

        document.getElementById("continue").style.backgroundImage =
          "linear-gradient(to bottom right, #89216b, #da4453)";
      } else {
        document.getElementById("continue").disabled = true;
      }
    } else if (authType === "otp") {
      //console.log("logic");
      document.getElementById("continue").disabled = false;
    } else if (authType === "success") {
      document.getElementById("continue").style.display = "none";
      document.getElementById("pink").style.display = "none";
    }
  };

  const foo = () => {
    if (stage === 0) {
      // login logic
      if (authType === "signup") {
        toggleAuthType("email");
      }
      if (authType === "email") {
        const email = document.querySelector(".email").value;
        const info = usersData.filter((elem) => {
          return elem.email === email;
        });
        // console.log(info);
        if (info.length === 0) {
          setStage(1);
          toggleAuthType("mobile");
          userInfo.current.email = email;
        } else {
          setStage(2);
          otpCred.current.type = "e";
          otpCred.current.i = email;
          toggleAuthType("otp");
        }
      } else {
        const mobile = document.querySelector(".mobile").value;
        const info = usersData.filter((elem) => {
          return elem.mobile === mobile;
        });
        // console.log(info);
        if (info.length === 0) {
          setStage(1);
          toggleAuthType("mobile");
        } else {
          setStage(2);
          otpCred.current.type = "m";
          otpCred.current.i = mobile;
          toggleAuthType("otp");
        }
      }
    } else if (stage === 1) {
      userInfo.current.mobile = document.querySelector(".mobile").value;
      register(userInfo);
      setStage(2);
      otpCred.current.type = "m";
      otpCred.current.i = document.querySelector(".mobile").value;
      toggleAuthType("otp");
    } else if (stage === 2) {
      setStage(3);

      const idenTf = usersData.filter((elem) => {
        if (otpCred.current.type === "m") {
          return elem.mobile === otpCred.current.i;
        } else {
          return elem.email === otpCred.current.i;
        }
      });
      console.log(idenTf[0]);
      sessionStorage.setItem("loggedIn", JSON.stringify(idenTf[0]));
      toggleAuthType("success");
    }
  };

  const google = () => {
    window.open(`http://localhost:3005/auth/google/callback`, "_self");
  };
  const facebook = () => {
    window.open(`http://localhost:3005/auth/facebook/callback`, "_self");
  };

  return (
    <div id="pop-up">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="close-btn"
      >
        &times;
      </div>
      {authType === "email" ? (
        <div className="email-auth">
          <div className="pop">
            <h1>Welcome to Tata CLiQ</h1>
          </div>
          <Email validate={validate} toggleAuthType={toggleAuthType} />
          <br />
          <div>
            <Button
              onClick={google}
              colorScheme="facebook"
              leftIcon={<FaFacebook />}
            >
              Login with Facebook
            </Button>
            <br />
            <br />
            <Button
              onClick={facebook}
              colorScheme="red"
              leftIcon={<FaGoogle />}
            >
              Signin with Google+
            </Button>
          </div>
          <br />
          <div>
            <p>
              Dont have an account yet?{" "}
              <span
                style={{ color: "red" }}
                onClick={() => {
                  toggleAuthType("signup");
                  setStage(-1);
                }}
              >
                SignUp
              </span>{" "}
            </p>
          </div>
        </div>
      ) : authType === "signup" ? (
        <div className="mobile-auth">
          <div className="pop">
            <h1>Welcome to Tata CLiQ</h1>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder=""
              className="email"
              autoComplete="off"
              required
              onChange={validate}
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">E-mail Address</span>
            </label>
          </div>
          <br />
          <div className="form">
            <input
              type="text"
              placeholder=""
              className="password"
              autoComplete="off"
              required
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Password</span>
            </label>
          </div>
          <br />
          <div className="form">
            <input type="text" placeholder="" className="" required />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Mobile Number</span>
            </label>
          </div>
          <br />
          <div className="form">
            <input
              type="text"
              placeholder=""
              className="avatar_url"
              autoComplete="off"
              required
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Enter Your Avatar URL..</span>
            </label>
          </div>
        </div>
      ) : authType === "mobile" ? (
        <div className="mobile-auth">
          <div className="pop">
            <h1>Welcome to Tata CLiQ</h1>
          </div>
          <Mobile
            validate={validate}
            toggleAuthType={toggleAuthType}
            x={stage}
          />
        </div>
      ) : authType === "otp" ? (
        <Otp validate={validate} otpCred={otpCred.current} />
      ) : (
        <AuthSuccess validate={validate} />
      )}

      <br />
      {stage == -1 ? (
        <>
          <p id="pink">
            By continuing, you agree to our{" "}
            <span style={{ color: "#da1c5c" }}>Terms of Use</span> and{" "}
            <span style={{ color: "#da1c5c" }}>Privacy Policy</span>
          </p>

          <button
            id="continue"
            onClick={() => {
              setStage(0);
              toggleAuthType("email");
            }}
          >
            Continue
          </button>
        </>
      ) : (
        <>
          <p id="pink">
            By continuing, you agree to our{" "}
            <span style={{ color: "#da1c5c" }}>Terms of Use</span> and{" "}
            <span style={{ color: "#da1c5c" }}>Privacy Policy</span>
          </p>

          <button id="continue" onClick={foo}>
            Continue
          </button>
        </>
      )}
    </div>
  );
};

export default UserAuth;
