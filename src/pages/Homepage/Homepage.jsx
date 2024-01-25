import { useState, useEffect } from "react";
//import rawgApi from "../../api/rawgApi";
import { Link } from "react-router-dom";
import myApi from "../../api/myApi";
//import NavBar from "../../components/Navbar/NavBar";
import "./HomePage.css";
function HomePage() {
  const [games, setGames] = useState(null);

  async function fetchGames() {
    try {
      //const response = await rawgApi.get()
      const response = await myApi.get("/games");
      console.log(response);
      //setGames(response.data.results)
      setGames(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  if (!games) return <p>Loading...</p>;
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        {games.map((game) => {
          return (
            <li key={game.id} className="Card">
              <img src={game.background_image} alt="" className="GameImg" />
              <p>
                Game: <Link to={`/games/${game.id}`}>{game.name}</Link>
              </p>
              <p>{game.released}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
