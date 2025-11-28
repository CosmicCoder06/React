function Card(props) {
  return (
    <div className = "card">
      <img src="" alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>Khreedna to padega na jii</button>
    </div>
  );
}

export default Card;
