import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { news_item } from "../../variables/index/news.jsx";



const News = () => {
  const [news, setNews] = useState(news_item);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/project");
      (response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
        <div id="berita" className=" mt-30 mb-10 relative">
                <div className="text-5xl mb-8 pb-4 px-10">
          <h3  className="tablet font-bold text-center">
            Berita <span className="font-light">Hangat</span>
          </h3>
          <p  className="mt-8 text-base text-center">
            Berita berperan sebagai sarana informasi yang menyampaikan fakta-fakta terkini, serta menjembatani komunikasi antara masyarakat dengan berbagai topik dan peristiwa yang relevan. Dengan fitur-fitur seperti liputan beragam, laporan mendalam, dan ruang opini, berita memfasilitasi pertukaran gagasan dan memberikan pemahaman yang lebih dalam kepada khalayak tentang isu-isu penting dalam masyarakat. Ini memungkinkan masyarakat untuk berpartisipasi dalam dialog yang berkelanjutan dan membuat keputusan yang lebih terinformasi.
          </p>
        </div>
<div className="container m-auto px-4">
    <Splide options={{type: "loop", autoplay: true, gap: "5rem"}} aria-label="My Favorite Images" className="border-2 border-blue-600 mx-4 rounded-2xl overflow-hidden container mx-auto">
        {news.length > 0 ? (
          news.map((item, i) => (
            <SplideSlide key={i}>
              <img
                src={item.project_image}
                alt={item.name}
                className="object-cover w-full h-[300px] rounded-lg"
              />
              <div className="project-desc flex h-[370px] flex-col justify-between px-4">
                <div className="w-full flex-1 text-start">
                  <p className="text-xs mt-2">
                    diunggah dan sumber oleh: {item.source}
                  </p>
                  <h4 className="mt-4 text-2xl text-center font-bold">
                    {item.name}
                  </h4>
                  <p className="first-letter:ml-4 mt-2 text-justify text-base text-base">
                    {item.description}
                  </p>
                </div>
                <div className="w-full flex mb-7 pr-4 items-center justify-end">
                  <a
                    href={item.url}
                    class="relative z-20 inline-flex items-center justify-start inline-block p-1 font-medium transition-all text-sm bg-blue-600 border-2 border-blue-600 rounded-full hover:bg-white group"
                  >
                    <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                      Lihat detail
                    </span>
                  </a>
                </div>
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
    </div>
    )
};

export default News;