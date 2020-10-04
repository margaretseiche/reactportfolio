import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="portfolioImage" alt={props.alt} src={props.image} />
      </div>
      <div className="content">
        <h5>{props.title}</h5>
        <p>{props.text}</p>
        <a className="portfolioButton" href={props.deployed} target="_blank" rel="noopener noreferrer">
          Deployed
        </a>
        <a className="portfolioButton" href={props.github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;
