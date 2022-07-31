import {Routes, Route} from 'react-router-dom'

import Header from './components/header/Header'
import Home from './components/home/Home';

import Login from './components/home/login/login';



function App() {
  return (

    <div id="box">
      <Header/>
      <main id="main-content">
     <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>


     </Routes>
      </main>
   
    </div>

  );
}

export default App;
