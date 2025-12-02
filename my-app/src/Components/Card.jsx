import React from "react";
// import "./Card.css";
function Card(props) {
  const link = props.link || "#";
  const [first, second, ] = [1, 2, 3, 4, 5];
  const [isClicked, setIsClicked] = React.useState(false);
  
  return (
    <div className={`card${isClicked === true ? "blue-card": " "}`}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
      {/* <a href={link} target="_blank" rel="noopener noreferrer"> */}
        <button type="button">Khreedna to padega na jii</button>
      {/* </a> */}
    </div>
  );
}

export default Card;
