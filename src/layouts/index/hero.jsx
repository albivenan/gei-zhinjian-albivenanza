import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from "/albivenanza.jpg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";

const Hero = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div id="profil" className="container m-auto mb-20">
      <div className="flex -mt-10 justify-items-center">
        <a href={profile}>
        <img
          src={profile}
          alt="profile"
          className="ml-5 w-[150px] h-[150px] object-cover rounded-full border-4 border-blue-600"
        /></a>
        <div className="self-center mt-6 ml-2 leading-tight">
          <h1 className="text-2xl font-bold">Gei Zhinjian Albivenanza</h1>
          <p className="">UI/UX Designer | Fullstack Developer</p>
          <div className="social-media">
            <div className="wrapper flex gap-x-4">
              <a
                href="#_"
                className="icon animate-spinnmove p-1 border-1 border-black rounded-full shadow-black block shadow-sm"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-[27px] h-[27px]"
                />
                <div className="tooltip">Instagram</div>
              </a>
              <a
                href="https://instagram.com/alvenza_"
                className="animate-spinnmove2 p-1 border-1 border-black rounded-full shadow-black block shadow-sm"
              >
                <img
                  src={github}
                  alt="instagram"
                  className="w-[27px] h-[27px]"
                />
              </a>
              <a
                href="https://t.me/lucidnightmaresx"
                className="animate-spinnmove3 p-1 border-1 border-black rounded-full shadow-black block shadow-sm"
              >
                <img
                  src={telegram}
                  alt="telegram"
                  className="w-[27px] h-[27px]"
                />
              </a>
            </div>
            <div className="sociap-media2"></div>
          </div>
        </div>
      </div>

      <div className="hero box-border flex px-5 mt-5 m-auto">
        <div className="w-full">
          <p className="first-letter:ml-4 ">
            Saya adalah seorang mahasiswa Teknik Informatika dari Universitas
            Nahdlotul Ulama Jepara (UNISNU Jepara) dan alumni SMAN 1 Tahunan
            Jepara pada angkatan 2023/2024. Saya sudah belajar mengenai UI/IX Design
            dan Fullstack (Frontend-Backend) selama hampir setengah tahun. Kini
            siap mengaplikasikan pemahaman guna memberikan kepuasan kepada
            klien.
          </p>
          <p className="first-letter:ml-4 mt-4">
            Kepada yang terhormat Bapak Ir. Adi Sucipto, M. Kom., selaku dosen mata kuliah Sistem Teknologi dan Informasi. Website ini dirancang guna memenuhi tugas Ujian Tengah Semester (UTS) Gasal Semester 1 Thn. 2023/2024. Sebagaimana yang ditugaskan, hasil penugasan selama setengah semesterini disatukan dalam bentuk folder Google Drive pada tombol "Tugas STI" di bawah.
          </p>

          <div class="flex ml-4 gap-x-4 mt-6">
            <Link
              to="/sendmessageprivate"
              class="relative inline-flex items-center justify-start inline-block p-1 overflow-hidden font-medium transition-all text-base bg-blue-600 border-2 border-blue-600 rounded-full hover:bg-white group"
            >
              <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-neutral-900">
                Kirim pesan privat
              </span>
            </Link>
                                     <button
                    class="relative inline-flex items-center justify-start inline-block py-1 px-4 overflow-hidden font-medium transition-all text-base bg-black rounded-full hover:bg-white group"
                  >
                    <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-neutral-900">
                      Kerja sama
                    </span>
                  </button>
            <a
              href="https://drive.google.com/drive/folders/1rBpyvjhOgUa0J9L0KbNG6RCj3o6vwvkW"
              class="relative inline-flex items-center justify-start inline-block p-1 overflow-hidden font-medium transition-all text-base bg-blue-600 border-2 border-blue-600 rounded-full hover:bg-white group"
            >
              <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-neutral-900">
                Tugas STI
              </span>
            </a>
          </div>
        </div>

        <div class="herochild w-full -mt-28 flex justify-center items-center flex-col">
          <div class="tech-tools text-center">
            <p className="text-blue-600 -mt-1 text-sm font-light">
              Ready to build your website
            </p>
            <h2 className=" text-5xl font-extralight">UI/UX DESIGNER</h2>
            <h3 class="text-4xl -mt-1 font-bold">FULLSTACK DEVELOPER</h3>
          </div>

          <div className="flex justify-between relative w-96">
            <div className=" flex relative w-full flex-col">
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scale font-bold bg-green-600 absolute top-32 right-10 text-xl text-white h-16 w-16 rounded-full flex items-center justify-center ">
                Klasik
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scalea font-bold bg-blue-600 absolute top-10 right-5 text-sm text-white h-20 w-20 rounded-full flex items-center justify-center ">
                Sederhana
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scaleb font-bold text-xs text-white bg-pink-500 p-2 my-2 h-12 w-12 rounded-full flex items-center justify-center ml-2">
                Privasi
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scalec absolute bottom-32 m-auto font-bold text-xs text-white bg-purple-500 p-2 my-2 h-12 w-12 rounded-full flex items-center justify-center ml-2">
                Elegan
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scaleb absolute bottom-1 m-auto font-bold text-sm text-white bg-purple-500 p-2 h-20 w-20 rounded-full flex items-center justify-center ml-2">
                Terpercaya
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scalec2 absolute bottom-10 right-5 font-bold text-xs text-white bg-black p-2 my-2 h-12 w-12 rounded-full flex items-center justify-center mt-2">
                Murah
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scalec3 absolute bottom-28 right-6 font-bold text-xs text-white bg-yellow-500 p-2 h-14 w-14 rounded-full flex items-center justify-center">
                Interaktif
              </h3>
            </div>

            <div className="mt-5 flex gap-x-5 pt-10 justify-between">
              <div data-aos="fade-down" data-aos-mirror="true" className="h-[230px] w-[4px] animate-floata rounded-full bg-black" />
              <div data-aos="fade-up" data-aos-mirror="true" className="mt-16 h-[230px] w-[4px] animate-floatb rounded-full bg-black" />
              <div data-aos="fade-down" data-aos-mirror="true" className="h-[230px] w-[4px] animate-floatc rounded-full bg-black" />
            </div>

            <div className="relative flex w-full flex-col">
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scale absolute top-28 right-2 font-bold bg-blue-600 p-2 text-xs text-white h-12 w-12 rounded-full flex items-center justify-center mt-2">
                Artikel
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scalea absolute top-4 right-4 font-bold text-xs text-white bg-green-600 p-2 h-24 w-24 rounded-full flex items-center justify-center">
                E-Commerce
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scaleb absolute top-40 left-5 font-bold text-base text-center leading-tight text-white bg-black p-2 h-20 w-20 rounded-full flex items-center justify-center">
                News Portals
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scalec absolute font-bold text-xl top-20 left-6 text-white bg-yellow-500 p-2 h-12 w-12 rounded-full flex items-center justify-center">
                Blog
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scaleb absolute bottom-16 right-4 font-bold text-xs text-white bg-red-600 p-2 h-20 w-20 rounded-full flex items-center justify-center">
                Educational
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="animate-scalec2 absolute bottom-2 left-2 font-bold text-xs text-white bg-purple-500 p-2 h-16 w-16 rounded-full flex items-center justify-center">
                Bussiness
              </h3>
              <h3 data-aos="zoom-in" data-aos-mirror="true" className="absolute bottom-0 right-0 animate-scalea font-bold text-xs text-white bg-pink-500 p-2 h-20 w-20 rounded-full flex items-center justify-center ml-2">
                Government
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
