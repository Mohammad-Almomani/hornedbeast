import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Header />
      </div>
      <div className='cardscrdas'>
        <Main />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
