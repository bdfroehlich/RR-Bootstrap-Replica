import './App.css';
import TopBar from './components/TopBar';
import Background from './components/Background';
import Listings from './components/Listings';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <Listings />
    </div>
  );
}

export default App;
