import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { useContext } from "react";
import AppContext from "../App/AppContext";

function Footer() {
  const { user } = useContext(AppContext);
  return (
    <>
      <div className="App-footer">
        <p>{user.isLoggedIn && <a href="#">Contact us</a>}</p>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </>
  );
}

export default Footer;
