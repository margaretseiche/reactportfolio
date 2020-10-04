import React from "react";
import "./style.css";

// const style = {
//   float: left
// }

function AboutWorkCard(props) {
  return (
    <div className="card">
      {/* <div className="img-container" style={style.float}> */}
      <div className="img-container" >
        <img className="workImage" alt={props.alt} src={props.image} />
      </div>
      {/* <div className="content" style={style.float}> */}
      <div className="content" >
        <h5>{props.title}</h5>
        
          <p>{props.line1}</p>
          <p>{props.line2}</p>
          <p>{props.line3}</p>
        
      </div>
    </div>
  );
}

export default AboutWorkCard;
