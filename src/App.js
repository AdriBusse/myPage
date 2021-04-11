import './App.css';
import Navbar from './components/Navbar';
import WorldMap from './components/WorldMap';

function App() {
  return (
    <div className="w-screen h-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
      <Navbar></Navbar>
      <div className="flex justify-center">
        <WorldMap />
      </div>
    </div>
  );
}

export default App;
