import myApi from "../../api/myApi";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FavouritesPage() {
  const params = useParams();
  const [game, setGame] = useState(null);

  async function fetchOneGame() {
    try {
      const response = await myApi.get(`/favourites/${isFav.id}`);
      console.log(response);
      setGame(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchOneGame();
  }, []);

  return (
    <div>
      <p>Favorites</p>
      <div>
        <p>hey</p>
      </div>
    </div>
  );
}

export default FavouritesPage;
