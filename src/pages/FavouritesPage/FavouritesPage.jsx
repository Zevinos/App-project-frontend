import myApi from "../../api/myApi";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./FavouritesPage.css";

function FavouritesPage() {
  const [games, setGames] = useState(null);

  async function fetchFavorites() {
    try {
      const { data } = await myApi.get(`/favourites`);
      /**
       * [{gameId}]
       */
      let allFavGames = [];
      for (const fav of data) {
        const response = await myApi.get(`/games/${fav.gameId}`);
        allFavGames.push(response.data);
      }
      setGames(allFavGames);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchFavorites();
  }, []);

  if (!games) return <p className="Loading">Loading</p>;

  return (
    <div>
      <div className="FavContainer">
        <ul>
          {games.map((game) => {
            return (
              <Link to={`/games/${game.id}`}>
                <li key={game.id} className="FavCard">
                  <div className="TopCard">
                    <img
                      src={game.background_image}
                      alt=""
                      className="GameImage"
                    />
                  </div>
                  <div className="BottomhCard">
                    <h2>{game.name}</h2>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FavouritesPage;
