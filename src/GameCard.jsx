function GameCard({ name, players, emoji, genre }) {
  return (
    <div className="game-card">
      <h2>{emoji} {name}</h2>
      <p>👥 O'yinchilar: {players}</p>
      <p>🎮 Janr: {genre}</p>
    </div>
  );
}

export default GameCard;
