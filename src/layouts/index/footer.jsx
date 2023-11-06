import { NavLink, Link } from "react-router-dom";


import instagram from "../../assets/instagram.svg"
import github from "../../assets/github.svg"
import telegram from "../../assets/telegram.svg"
import arrowup from "../../assets/arrow-up.svg";
import profile from "../../assets/ghost.png";

const Footer = () => {
  return (
    <footer className="w-full mt-20 py-4 bg-zinc-800">
      <div className="flex flex-col gap-y-2 items-center justify-center w-full h-full">
        <div className="flex flex-col ">
          <Link to="albivenanza" className="m-auto">
            <img
              src={profile}
              alt="profile"
              className="w-[70px] h-[70px] border-2 border-blue-600 shadow-sm shadow-blue-600 rounded-full"
            />
          </Link>
        </div>
        <ul className="flex flex-col text-center mt-2 leading-tight text-white">
          <li>
            <a href="#profil" className="text-sm">
              Profil
            </a>
          </li>
          <li>
            <a href="#alat&teknologi" className="text-sm">
              Alat & Teknologi
            </a>
          </li>
          <li>
            <a href="#projek" className="text-sm">
              Project Terbaru
            </a>
          </li>
          <li>
            <Link to="ruangperbincangan" className="text-sm"> 
              Ruang Perbincangan
            </Link>
          </li>
          <li>
            <a href="#berita" className="text-sm">
              Berita Hangat
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="font-bold text-center text-white">
          ©2023 Albivenanza.com - All Right Reserved
        </h6>
      </div>
    </footer>
  );
};

export default Footer;