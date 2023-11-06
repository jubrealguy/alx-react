import holberton from './holberton.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton} alt='' />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <div>
            <label for='email'>Email:</label>
            <input type='email' id='email' />
            <label for='password'>Password:</label>
            <input type='password' id='password' />
            <button>OK</button>
        </div>
      </div>
      <footer className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;