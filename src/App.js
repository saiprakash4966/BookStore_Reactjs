import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Lender from './pages/Lender/lender';
import SignUp from './components/SignUp/SignUp';
import Header from './components/header/header';
import Books from './components/books/book';
import Dashboard from './components/dashboard/dashboard';
import BookHeader from './components/books/bookHeader';
import Book from './components/books/book';
import BookDetails from './components/books/bookDetails';
import RouterTwo from './components/router/router';

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
       {/* <Header/> */}
       {/* <Books/> */}
       {/* <BookHeader/> */}
       {/* <Book/> */}
       {/* <Dashboard/> */}
       {/* <BookDetails/> */}
       <RouterTwo/>

    </div>
  );
}

export default App;
