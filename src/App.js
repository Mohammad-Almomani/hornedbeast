import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Main from './components/main';
// import BasicExample from './components/navBar'
import BasicExample from './components/cards';


function App() {
  return (
    <div className="App">
      <div>
        <BasicExample />
        {/* <BasicExample /> */}
      </div>
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
