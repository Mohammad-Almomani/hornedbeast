import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Main from './components/main';
import NavBar from './components/navBar';
import Cards from './components/cards';


function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Header />
      </div>
      <div>
        {/* <Main /> */}
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
