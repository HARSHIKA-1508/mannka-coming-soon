import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import TempleCard from "./pages/TempleCard";
import "./App.css";

import kashiImg from './assets/KashiVishanath.jpg';
import annapurnaImg from './assets/annapurnaTemple.jpg';
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
          brief={["One of the holiest temples dedicated to Lord Shiva in Varanasi.",
            "This temple is among the twelve Jyotirlingas, attracting devotees from all over India.",
            "At Mannka we believe that connecting with the divine should be serene and enriching experience, free from the usual hustle and crowds.",
            "We will provide the overall process in less than 30 min with Panditji by your side to assist in Puja. "
          ]}
          contact="+918858855308"
        />
        <TempleCard
          title="Annapurna Temple"
          imgSrc={annapurnaImg}
          brief={[" Annapurna Mandir, is one of the most famous Hindu temples (Mandir) in the holy city of Varanasi.",
            " This temple has great religious importance in Hinduism and is dedicated to the goddess Annapurna. ",
            "At Mannka we believe that connecting with the divine should be serene and enriching experience, free from the usual hustle and crowds.",
            "We will provide the overall process in less than 30 min with Panditji by your side to assist in Puja. "
          ]}
          contact="+918858855308"
        />
        <TempleCard
          title="Kaal Bhairav Temple "
          imgSrc={kaalBhairavImg}
          brief={["Kaal Bhairav Mandir is one of the oldest Shiva temples in Varanasi, India.",
            "This temple has great historical and cultural importance in Hinduism; especially amongst the locals. ",
            "At Mannka we believe that connecting with the divine should be serene and enriching experience, free from the usual hustle and crowds.",
            "We will provide the overall process in less than 30 min with Panditji by your side to assist in Puja. "]}
          contact="+918858855308"
        />
      </div>
  <Home/>
    </div>
  )
}

export default App
