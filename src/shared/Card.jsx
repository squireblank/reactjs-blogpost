import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, classes }) => {
  return <div className={`card ${classes}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

Card.defaultProps = {
  classes: null,
};

export default Card;
