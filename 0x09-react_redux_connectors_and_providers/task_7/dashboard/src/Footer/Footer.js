import React from "react";
import "./Footer.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFullYear, getFooterCopy } from "../utils/utils";


const Footer = ({ isLoggedIn }) => {
  return (
    <>
      <div className="App-footer">
        <p>{isLoggedIn && <a href="#">Contact us</a>}</p>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

Footer.defaultProps = {
  isLoggedIn: false,
};

// Create mapStateToProps
const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
});

// Connect the component to Redux
export default connect(mapStateToProps)(Footer);
