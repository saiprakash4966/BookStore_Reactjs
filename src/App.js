import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Lender from './pages/Lender/lender';
import SignUp from './components/SignUp/SignUp';
import Header from './components/header/header';
import Book from './components/books/book';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
       {/* <Lender/> */}
       <Header/>
       {/* <Book/> */}
    </div>
  );
}

export default App;