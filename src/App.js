import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Main from './components/main';


function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
