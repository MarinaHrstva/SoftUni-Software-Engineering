
import './App.css';

function App() {

  const submitHandler = (e) => {
    e.preventDefault();

    
  }

  return (
    <div className="App">
      <header className="App-header">
        <form >
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="text" id='password' />
          </div>
          <div>
            <input type="submit" value='Login' onClick={submitHandler} />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
