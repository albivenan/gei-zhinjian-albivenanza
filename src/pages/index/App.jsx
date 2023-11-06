import { useState } from "react";
import { Link } from "react-router-dom";
//import { AiFillInstagram } from "react-icons/ai";
//import { FaTelegram } from "react-icons/fa";
//import { BsGithub } from "react-icons/bs";
import ghost from "../../assets/ghost.png";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import github from "../../assets/github.svg";
import ghostprofile from "/ghost.png";
import albi from "/albivenanza.jpg";

import Navbar from "../../layouts/index/navbar.jsx";
import Hero from "../../layouts/index/hero.jsx";
import Priority from "../../layouts/index/priority.jsx";
import Techtools from "../../layouts/index/techtools.jsx";
import Project from "../../layouts/index/project.jsx";
import Chatroom from "../../layouts/index/chatroom.jsx";
import News from "../../layouts/index/news.jsx";
import Footer from "../../layouts/index/footer.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative w-full m-auto">
    <div className="relative w-full z-50">
    <Navbar />
    </div>
      <div id="profile" className="">
        <img
          src={ghostprofile}
          alt="banner"
          className=" h-[25vh] w-full object-top object-cover"
        />
      </div>
      <Hero />
      <Priority />
      <Techtools />
      <Project />
      <Chatroom />
      <News />
      <Footer />
    </main>
  );
}

export default App;