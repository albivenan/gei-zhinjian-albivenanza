import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import hamburger from "../../assets/hamburger-menu.svg";

const Navbar = () => {
  function handleHamburger() {
    const child = document.querySelector(".hamburger-child");
    const parent = document.querySelector(".hamburger");

    parent.classList.toggle("hamburger-child-active");

    if (parent.classList.contains("hamburger-child-active")) {
      child.style.opacity = "1";
      child.style.transform = "translateY(0)";
      parent.style.transform = "rotate(90deg)";
    } else {
      child.style.opacity = "0";
      child.style.transform = "translateY(-100%)";
      parent.style.transform = "rotate(0)";
    }
  }
  return (
    <div className="fixed left-0 right-0 top-0">
      <div className="flex w-full justify-between items-center px-4 h-[70px] pt-4 pb-2 bg-white border-b-2 border-b-black shadow-b-black shadow-lg">
      <div className="icon-profile relative">
        <h2 className="text-2xl font-bold -mt-1 relative">
          Albivenanza<span className="mix-blend-exclusion text-white">Dev</span>
        </h2>
      <p className="text-sm relative">UI/UX Designer & Fullstack Developer</p>
        </div>
        <div className="hamburger-child2-parent flex justify-end items-center">
        <ul className="hamburger-child2 flex w-full justify-around items-center">
        <li>
          <a to="#profil">Profil</a>
        </li>
        <li>
          <a to="#alat&teknologi">Alat & Teknologi</a>
        </li>
        <li>
          <a to="#project">projek</a>
        </li>
        <li>
          <a to="#ruangperbincangan">Ruang Perbincangan</a>
        </li>
        <li>
          <NavLink to="#berita">Berita Hangat</NavLink>
        </li>
        </ul>

          <Link to="/login" className="w-[120px] p-1 text-center mr-2 bg-blue-600 text-white rounded-3xl">
            Login Admin
          </Link>

          <img
            src={hamburger}
            alt="hamburger"
            className="z-10 hamburger block transition duration-200 w-[35px] h-[35px]"
            onClick={handleHamburger}
          />
        </div>
      </div>
      <div className=" -translate-Y-full opacity-0 transition duration-200 hamburger-child absolute -z-10 right-0">
      <ul className=" mt-2 rounded-3xl  w-[60vw] grid justify-items-center gap-y-5 py-5 bg-neutral-800 mr-2 text-white">
        <li>
          <a href="#profil">Profil</a>
        </li>
        <li>
          <a href="#alat&teknologi">Alat & Teknologi</a>
        </li>
        <li>
          <a href="#projek">projek</a>
        </li>
        <li>
          <a href="#ruangperbincangan">Ruang Perbincangan</a>
        </li>
        <li>
          <NavLink to="#berita">Berita Hangat</NavLink>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;