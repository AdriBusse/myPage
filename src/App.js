import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorldMap from './components/WorldMap';

function App() {
  return (
    <div className="w-screen h-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
      <Navbar></Navbar>
      {/**Page Content */}
      <div className="flex justify-center h-screen"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
