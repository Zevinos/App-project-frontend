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
    <div className="Container">
      <ul>
        {games.map((game) => {
          return (
            <Link to={`/games/${game.id}`}>
              <li key={game.id} className="Card">
                <div className="LeftCard">
                  <img src={game.background_image} alt="" className="GameImg" />
                </div>
                <div className="RigthCard">
                  <h2>{game.name}</h2>

                  <p className="date">{game.released} PC</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
