import { useState, useEffect } from "react";

import { techtools } from "../../variables/index/techtools.jsx";

const Techtools = () => {
  const [techtoolsItem, setTechtoolsItem] = useState(techtools);

  return (
    <div id="alat&teknologi" className="pb-20 mb-20 relative">
    <div className="tech-table w-full">
      <div  className="classtitle w-full m-auto -mt-7 pb-4 px-8">
        <h3 className="tablet font-bold text-5xl text-center">
          Alat <span className="font-light">&</span> Teknologi
        </h3>
        <p className="mt-8 text-base text-center">
          Pemahaman tentang library, bahasa, dan framework dalam pengembangan
          perangkat lunak sangat penting. Kombinasi dari ketiganya digunakan
          fungsi untuk membangun perangkat lunak dengan lebih efisien, efektif,
          aman, dan interaktif.
        </p>
      </div>
      <div className="container m-auto flex flex-wrap w-full gap-y-8 mt-8 px-1/2 justify-around">
        {techtools.map((item, i) => (
          <div
          
            className="flex h-full flex-col hovericons techwidth w-[110px] items-center pt-4 px-4 hover:shadow-2xl relative card2 rounded-2xl bg-blue-50 relative"
            key={i}
          >
            <div className="flex flex-col relative transition-all duration-500 justify-between items-center h-[125px]">
              <img src={item.image} alt={item.name} className="w-full image " />
              <h4 className={`h4 ${item.tag} py-2 font-bold`}>{item.name}</h4>
            </div>
            <p className="phone text-sm text-center flex-1 h-full">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Techtools;