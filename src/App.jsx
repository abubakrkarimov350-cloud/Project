import GameCard from "./GameCard";
import "./index.css";

function App() {
  const games = [
    {
      name: "Minecraft",
      players: "1-10",
      emoji: "⛏️",
      genre: "Sandbox",
    },
    {
      name: "PUBG",
      players: "1-4",
      emoji: "🔫",
      genre: "Battle Royale",
    },
    {
      name: "FIFA",
      players: "1-2",
      emoji: "⚽",
      genre: "Sport",
    },
    {
      name: "GTA V",
      players: "1-30",
      emoji: "🚗",
      genre: "Action",
    },
    {
      name: "Among Us",
      players: "4-15",
      emoji: "🚀",
      genre: "Survival",
    },
    {
      name: "Free Fire",
      players: "1-4",
      emoji: "🔥",
      genre: "Battle Royale",
    },
    {
      name: "Roblox",
      players: "1-20",
      emoji: "🎲",
      genre: "Adventure",
    },
  ];

  return (
    <div className="container">
      <h1>🎮 O'yinlar ro'yxati</h1>

      <div className="games">
        {games.map((game) => (
          <GameCard
            key={game.name}
            name={game.name}
            players={game.players}
            emoji={game.emoji}
            genre={game.genre}
          />
        ))}
      </div>
    </div>
  );
}

export default App;