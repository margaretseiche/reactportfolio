import React from "react";
import "./style.css";

function AboutEducationCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="educationImage" alt={props.alt} src={props.image} />
      </div>
      <div className="content">
        <h5>{props.title}</h5>
        <p>{props.name}</p>
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.line3}</p>
      </div>
    </div>
  );
}

export default AboutEducationCard;
