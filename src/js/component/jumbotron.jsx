import React from "react";

function Jumbotron () {
  return (
  <div className="jumbotron" style={{ padding: "50px", backgroundColor: "rgba(128, 128, 128, 0.2)", marginBottom: "20px" }}>
    <h1 className="display-4">A Warm Welcome!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Call the action!</a>
    </p>
  </div>
  );
}
  
export default Jumbotron;