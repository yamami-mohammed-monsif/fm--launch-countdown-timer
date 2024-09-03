function Card({ timeLeft, label }) {
  return (
    <div className="card-container">
      <div className="card">
        <p className="top">{timeLeft}</p>
        <p className="bottom">{timeLeft}</p>
      </div>
      <p className="label">{label}</p>
    </div>
  );
}

export default Card;
