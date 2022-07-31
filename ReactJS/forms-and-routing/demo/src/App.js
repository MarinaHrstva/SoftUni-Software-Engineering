import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home';
import Login from './components/login/login';
import Register from './components/register/Register';
import CreateGame from './components/create-game/CreateGame';



function App() {
  return (

    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/createGame' element={<CreateGame/>}/>
        </Routes>
          
      </main>

    </div>

  );
}

export default App;
