//import logo from './logo.svg';
//import './App.css';

/*
<header className="App-header">
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
      </header>
*/

import Header from './components/Header'
import SocialProfiles from './components/SocialProfiles'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <SocialProfiles />
      <Footer />
    </div>
  );
}

export default App;
