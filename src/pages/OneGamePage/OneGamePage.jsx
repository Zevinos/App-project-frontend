import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import rawgApi from "../../api/rawgApi";
import myApi from "../../api/myApi";
import "./OneGamePage.css";
import { useNavigate } from "react-router-dom";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

function OneGamePage() {
  const params = useParams();
  const [game, setGame] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();

  async function fetchOneGame() {
    try {
      //const response = await rawgApi.get("/{id}" + params.gameId);
      const response = await myApi.get("/games/" + params.gameId);
      console.log(response);
      setGame(response.data);

      const favouriteResponse = await myApi.get(
        "/favourites?gameId=" + params.gameId
      );
      if (favouriteResponse.data.length >= 1)
        setIsFav({ id: favouriteResponse.data[0].id });
      else setIsFav(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      const response = await myApi.delete(`/games/${params.gameId}`);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit() {
    try {
      const newFav = {
        gameId: Number(params.gameId),
      };
      const response = await myApi.post(`/favourites`, newFav);
      console.log(response);
      fetchOneGame();
      //navigate(`/favorite`);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleDeleteFav() {
    try {
      const response = await myApi.delete(`/favourites/${isFav.id}`);
      console.log(response);
      fetchOneGame();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOneGame();
  }, []);

  if (!game) return <p>Loading...</p>;

  return (
    <div className="one-game-page-container">
      <div className="form">
        <img src={game.background_image} alt="" className="first-image" />
        <h1>{game.name}</h1>
        <h2>created by riot in {game.released}</h2>
        <div className="game-details">
          <h2>Description :</h2>
          <p>{game.description}</p>
        </div>
        <div className="like">
          {isFav ? (
            <HiHeart onClick={handleDeleteFav} className="Heart" />
          ) : (
            <HiOutlineHeart onClick={handleSubmit} className="Heart" />
          )}
          <p>{isFav ? "Added to Favorite" : "Add to favorite"}</p>
          <button className="delete-button" onClick={handleDelete}>
            Delete Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneGamePage;
