import React from "react";

function Card() {
  return (
  <div className="card mx-auto mb-4" style={{ width: "12rem", height: "23rem" }}>
    <img src="https://via.placeholder.com/500x325" className="img-fluid" alt=" "/>
    <div className="card-body text-center">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary ">Find Out More!</a>
    </div>
  </div>
  );
}

export default Card;