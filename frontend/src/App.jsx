import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import TempleCard from "./pages/TempleCard";
import "./App.css";

import kashiImg from './assets/Kashi Vishwanath.jpg';
import annapurnaImg from './assets/annapurna.jpg';
import somnathImg from './assets/somnath.jpg';

function App() {

  return (
    <div>
     <Navbar />
      <Hero />
      <div className="card-container">
        <TempleCard
          title="Kashi Vishwanath"
          imgSrc={kashiImg}
          brief="One of the holiest temples dedicated to Lord Shiva in Varanasi."
          contact="+918858855308"
        />
        <TempleCard
          title="Annapurna Temple"
          imgSrc={annapurnaImg}
          brief="Famous temple of Goddess Annapurna providing divine blessings."
          contact="+918858855308"
        />
        <TempleCard
          title="Kashi "
          imgSrc={somnathImg}
          brief="First among the twelve Jyotirlinga shrines of Lord Shiva."
          contact="+918858855308"
        />
      </div>
  <Home/>
    </div>
  )
}

export default App
