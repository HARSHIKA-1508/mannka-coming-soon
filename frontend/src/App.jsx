import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import TempleCard from "./pages/TempleCard";
import "./App.css";

import kashiImg from './assets/KashiVishanath.jpg';
import annapurnaImg from './assets/annapurna.jpg';
import kaalBhairavImg from './assets/KaalBhairav.jpg';

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
          title="Kaal Bhairav Temple "
          imgSrc={kaalBhairavImg}
          brief="Kaal Bhairav Mandir is one of the oldest Shiva temples in Varanasi, India."
          contact="+918858855308"
        />
      </div>
  <Home/>
    </div>
  )
}

export default App
