import React, { useEffect, useState } from "react";
import './styles/style.css';
import './styles/images.css';
import './styles/no-touch.min.css';
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";
import SnowMusic from "./SnowMusic.mp3";

function App() {
  
  const [audio] = useState(new Audio(SnowMusic));
  const [MusicStartTrigger, setMusicStartTrigger] = useState(false);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.addEventListener('start', () => audio.play());
  }, [audio]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
  [playing, audio]
);

  useEffect(() => {
    MusicStartTrigger && setPlaying(true) ;
  },[MusicStartTrigger]);

  

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
      easing: 'ease',
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App" onMouseMove={() => setMusicStartTrigger(true)}>
      <button className='audio-button' onClick={toggle}>
          <i className={`${playing ? "fas fa-pause" : "fas fa-play"}`} />
      </button>
      <Header />
      <Particles />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
