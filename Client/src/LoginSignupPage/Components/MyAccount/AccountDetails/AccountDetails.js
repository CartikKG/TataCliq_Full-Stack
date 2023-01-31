import React, { useEffect } from "react";
import "./AccountDetails.css";
import SocialProfileSimple from "../Profile";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const AccountDetails = () => {
  let [state, setState] = React.useState({});
  let navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let id = localStorage.getItem("userId") || "";
    let res = await fetch(`https://tata-cliq-server.onrender.com/users/${id}`);
    let { data } = await res.json();
     setState(data);
  };

  return (
    <div className="account">
      <div >
        <h1 style={{ fontSize: "200%" }}>{state.name}</h1>
        <br />
        <h1 style={{ fontSize: "150%", marginBottom: "10px" }}>
          <span style={{ color: "#D3D3D3" }}>Email:-</span>
          {state.email}
        </h1>
        <p>
          {" "}
          <span style={{ color: "#D3D3D3" }}>Account Created Date:-</span>{" "}
          {state.createdAt}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "35px",
          }}
        >
          <Button colorScheme="blue">My Wishlist</Button>
          <Link to="/cart">
            {" "}
            <Button colorScheme="blue">View Cart</Button>
          </Link>
          <Button
            onClick={() => {
              localStorage.clear();
              navigate("/");
              window.location.reload(false);
            }}
            colorScheme="red"
          >
            LogOut
          </Button>
        </div>
      </div>
      <div>
        <img
          style={{ borderRadius: "100%",width:"100%" ,margin: "auto" }}
          src={state.avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default AccountDetails;
