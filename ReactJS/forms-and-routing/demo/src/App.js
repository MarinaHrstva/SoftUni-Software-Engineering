import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import * as gameService from './services/gameServise'


import Header from './components/header/Header'
import Home from './components/home/Home';
import Login from './components/login/login';
import Register from './components/register/Register';
import CreateGame from './components/create-game/CreateGame';
import Catalog from './components/create-game/catalog/Catalog';



function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result);
      })
  }, [])


  return (

    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home  games={games}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/createGame' element={<CreateGame />} />
          <Route path='/catalog' element={<Catalog games={games} />} />

        </Routes>

      </main>

    </div>

  );
}

export default App;
