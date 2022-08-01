
import { useState } from 'react'
import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [tac, setTac] = useState('');
  const [userType, setUserType] = useState('corporate');
  const [gender, setGender] = useState('f');



  const submitHandler = (e) => {
    e.preventDefault();
console.log(password, age, username, bio);
  }

  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>

          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' value={username} onChange={onUsernameChange} />
          </div>

          <div>
            <label htmlFor="password" value={password} onChange={(e) => setPassword(e.target.value)}>Password:</label>
            <input type="password" id='password' />
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" name='age' id='age' value={age} onChange={e=>setAge(e.target.value)} />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio" cols="30" rows="10" value={bio} onChange={e=>setBio(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="tac">Terms and Conditions:</label>
            <input type="checkbox" name='tac' id='tac' />
          </div>

          <div>
            <label htmlFor="individual-user-type">Individual:</label>
            <input type="radio" name='user-type' value='individual' id='individual-user-type' />
            <label htmlFor="corporate-user-type">Corporate:</label>
            <input type="radio" name='user-type' value='corporate' id='corporate-user-type' />
          </div>

          <div>
            <label htmlFor="gender"></label>
            <select name="gender" id="gender">
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>

          <div>
            <input type="submit" value='Login' />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
