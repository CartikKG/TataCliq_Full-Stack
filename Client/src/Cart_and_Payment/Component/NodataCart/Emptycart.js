import { Button } from "@chakra-ui/react";
import { fontSize } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Empty.css";

const Emptycart = () => {
  return (
    <div id="E-Cart">
      <div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ margin: "auto", width: "40%" }}
            src="https://www.zoe.menu/assets/images/empty_cart.gif"
            alt="khali"
          />
          <h1
            style={{
              fontWeight: "820",
              fontSize: "19px",
              fontFamily: "Segoe UI",
              color: "#7E7E7E",
            }}
          >
            Let's fill it up Shall We..?
          </h1>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "20px",
            }}
          >
            <Link to="/">
              {" "}
              <Button
                mt={"20px"}
                style={{ borderRadius: "4px", padding: "25px" }}
                colorScheme="red"
              >
                Continue Shopping
              </Button>
            </Link>
            <Button
              mt={"20px"}
              style={{ borderRadius: "4px", padding: "25px" }}
              colorScheme="red"
            >
              View Saved Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emptycart;
