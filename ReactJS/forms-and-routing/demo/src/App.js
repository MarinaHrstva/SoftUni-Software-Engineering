import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import * as gameService from './services/gameService'
import { AuthContext } from './contexts/authContext'

import Header from './components/header/Header'
import Home from './components/home/Home';
import Login from './components/login/login';
import Register from './components/register/Register';
import CreateGame from './components/create-game/CreateGame';
import Catalog from './components/catalog/Catalog';
import GameDetails from './components/catalog/GameDetails';



function App() {

	const [games, setGames] = useState([]);
	const [auth, setAuttth] =useState({})
	const navigate = useNavigate()

	useEffect(() => {
		gameService.getAll()
			.then(result => {
				setGames(result);
			})
	}, [])


	const addComment = (gameId, comment) => {
		setGames(state => {
			const game = state.find(x => x._id == gameId);
			const comments = game.comments || [];
			comments.push(comment);

			return [
				...state.filter(x => x._id != gameId),
				{ ...game, comments }
			]
		})

	}

	const addGame = (gameData) => {

		setGames(state => [
			...state,
			gameData
		])

		navigate('/catalog');
	}

	const userLogin=()=>{

	}

	return (
		<AuthContext.Provider value={{auth}}>

			<div id="box">
				<Header />
				<main id="main-content">
					<Routes>
						<Route path='/' element={<Home games={games} />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/createGame' element={<CreateGame addGame={addGame} />} />
						<Route path='/catalog' element={<Catalog games={games} />} />
						<Route path='/catalog/:gameId' element={<GameDetails games={games} addComment={addComment} />} />
					</Routes>

				</main>

			</div>
		</AuthContext.Provider>

	);
}

export default App;
