// import logo from '../public/logo192.png';
import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import MainStretch from './mainStretch';


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
        <MainStretch />
      </div>

      <div>
        {/* <img className='hornedBeast' src={pic}/> */}
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
