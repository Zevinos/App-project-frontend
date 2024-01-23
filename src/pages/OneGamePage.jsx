import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import rawgApi from '../api/rawgApi'
import myApi from '../api/myApi'
function OneGamePage() {
    const params = useParams()
    const [game, setGame] = useState(null)
    const [isFav, setIsFav] = useState(false)



    async function fetchOneGame () {
        try {
            //const response = await rawgApi.get('/' + params.gameId)
            const response = await myApi.get('/games/' + params.gameId)
            console.log(response)
            setGame(response.data)

            const favouriteResponse = await myApi.get('/favourites?gameId=' + params.gameId)
            if (favouriteResponse.data.length >= 1) setIsFav(true)
            else setIsFav(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchOneGame()
    }, [])

    if (!game) return <p>Loading...</p>


  return (
    <div>
    <div>OneGamePage</div>
    <h2>{game.name}</h2>
    <p>{isFav ? 'Is favorite' : 'Not favorite'}</p>

    </div>
  )
}

export default OneGamePage