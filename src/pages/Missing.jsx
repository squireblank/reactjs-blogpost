import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main>
      <div className="missing">
        <h2>Oops...</h2>
        <p style={{ marginTop: "0.8rem", marginBottom: "0.5rem" }}>
          Page Not Found!!!
        </p>
        <Link to="/">Back To Home</Link>
      </div>
    </main>
  );
};

export default Missing;
