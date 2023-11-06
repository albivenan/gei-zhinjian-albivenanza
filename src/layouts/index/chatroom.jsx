import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ghost from "/ghost.png";
import quotation from "../../assets/quotation.svg";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { news_item } from "../../variables/index/news.jsx"; 

const Chatroom = () => {
  const [umum, setUmum] = useState(news_item);
 
  return (
    <>
                <div id="ruangperbincangan" class="tech-tools text-5xl mb-8 pb-4 px-10">
          <h3 className="tablet font-bold text-center">
            <span className="font-light">Ruang</span> Perbincangan
          </h3>
          <p  className="mt-8 text-base text-center">
            "Ruang perbincangan" adalah fitur di mana pengguna dan author dapat
            saling berinteraksi. Ini menjadi tempat di mana pengguna dan author
            bisa "mengcurahkan" pendapat, pertanyaan, dan pengalaman.
          </p>
        </div>
    <div className="container m-auto">
              <div class="title-tech w-full flex justify-center items-center flex-col">
          <div class="text-start px-2 mt-4">
            <h4  className="font-bold text-3xl">Pesan Author</h4>
            <p  class="mb-4">
              "Pesan author" adalah pesan atau komunikasi yang diberikan
              langsung oleh author kepada pengunjung atau pembaca. Ini digunakan
              untuk memberikan informasi tambahan, penjelasan, atau panduan yang
              relevan dengan konten yang dibagikan.
            </p>
          </div>
        </div>

        <div  class="shadow-md px-2">
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0 "
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label
              class="block p-5 leading-normal cursor-pointer text-black font-medium"
              for="tab-multi-one"
            >
              Lihat pesan
            </label>
            <div class="tab-content overflow-hidden border-l-2 bg-blue-100 border-blue-500 leading-normal">
              <div class="w-full overflow-x-auto">
                <table class="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="text-center py-2 px-2 font-bold text-gray-600">
                        No.
                      </th>
                      <th class="text-left w-full py-2 px-4 font-bold text-gray-600">
                        Messages
                      </th>
                      <th class="text-right py-2 px-4 font-bold text-gray-600">
                        Image
                      </th>
                    </tr>
                  </thead>
<tbody>

      <tr>
        <td className="text-center py-3 px-2 w-10 bg-gray-100">1</td>
        <td className="text-left py-3 px-4">Maaf, server sedang dalam gangguan</td>
        <td className="text-center py-3 px-4">-</td>
      </tr>
</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="tech-definiton text-end mt-4 px-2">
          <h4  className="font-bold text-3xl">Pesan Publik</h4>
          <p  className="mb-2">
            "Pesan pengunjung" merujuk pada respons, komentar, atau pesan yang
            ditinggalkan oleh pengunjung atau pembaca guna berinteraksi dengan
            author. Memberikan umpan balik, mengajukan pertanyaan, atau berbagi
            pemikiran mereka terkait dengan curhatan hati atau konten yang
            dibahas.
          </p>
          <div className="w-full flex justify-end items-center">
            <Link
              to="/sendmessagepublic"
              class="relative inline-flex mt-2 items-center justify-start inline-block p-1 overflow-hidden font-medium transition-all text-base bg-blue-600 border-2 border-blue-600 rounded-full hover:bg-white group"
            >
              <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-neutral-900">
                Kirim pesan umum
              </span>
            </Link>
          </div>
        </div>
        </div>
        <div className="container mt-6 m-auto">
    <Splide options={{type: "loop", autoplay: true, direction: "ttb", gap: "5rem", height: "580px"}} aria-label="My Favorite Images" className="border-2 border-blue-600 mx-4 pb-8 rounded-2xl overflow-hidden mb-20">
          {umum.length > 0 ? (
            umum.map((item, i) => (
              <SplideSlide key={i}>
                <div className="flex justify-between items-center mt-2">
                  <h2 className="font-bold text-xl bg-neutral-800 rounded-full ml-2 p-1 w-9 text-center text-white">
                    {i + 1}
                  </h2>
                  <p className="text-xs py-1/2 text-end mr-2">
                    diunggah pada Senin, 15 Januari 2021
                  </p>
                </div>
                <div className="w-[110px] h-[110px] m-auto relative rounded-full border-rotate">
                  <div className="content">
                    <img
                      className="object-cover rounded-full p-1"
                      src={item.project_image}
                      alt={ghost}
                    />
                  </div>
                </div>
                <h3 className="text-center text-2xl overflow-y-hidden font-bold">
                  {item.name}
                </h3>
                <div className="w-[20px] m-auto mb-2">
                  <img src={quotation} alt="quotation" />
                </div>
                <div className="w-full h-[360px] px-4 mr-2 text-justify overflow-y-auto text-base">
                  <p className="leading-tight first-letter:ml-4">
                    {item.description}
                  </p>
                </div>
                <div className="w-[20px] m-auto mt-2">
                  <img
                    src={quotation}
                    alt="quotation"
                    className="rotate-180 "
                  />
                </div>
              </SplideSlide>
            ))
          ) : (
            <SplideSlide>
              <p>empty</p>
            </SplideSlide>
          )}
          <div class="splide__arrows">
		<button class="splide__arrow splide__arrow--prev">
			Prev
		</button>
		<button class="splide__arrow splide__arrow--next">
			Next
		</button>
  </div>
      </Splide>
      </div>
    </>
  );
};


export default Chatroom;