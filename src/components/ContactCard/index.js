import React from "react";
import "./style.css";

function ContactCard(props) {
  return (
    <div>

      <div className="content">
        <a href={props.reference} target="_blank" rel="noopener noreferrer">
          <img id="social" src={props.image} alt={props.alt} title={props.title} />
        </a>
      </div>

    </div>
  );
}

export default ContactCard;
