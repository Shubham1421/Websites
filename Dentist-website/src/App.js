
import './App.css';
import LayoutMain from './components/LayoutMain';
import Navbar from './components/Navbar';

function App() {
  return (
  <div className="App" style={{backgroundColor:'#cfe4e9',backgroundImage: 'linear-gradient(#66a7b6,white)'}}>
      <Navbar/>
      <LayoutMain/>
      {/* <Cards/> */}
  </div>
  );
}

export default App;
