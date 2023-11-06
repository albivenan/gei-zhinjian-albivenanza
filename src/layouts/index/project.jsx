import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { project_item } from "../../variables/index/project.jsx";



const Project = () => {
function alertshow() {
  alert("Maaf, server sedang dalam gangguan!")
}

  const [project, setProject] = useState(project_item);
  console.log(project)
  return (
    <div id="projek" className="pb-20 bg-blue-50 mt-20 mb-20 relative">
    <div className="m-auto tech-table text-base">
      <div className="title-tech classtitle pb-4 w-full flex justify-center items-center flex-col">
        <div className="project-title text-center text-5xl -mt-10  mb-8 w-full m-auto">
          <h3 className="tablet font-bold">
            Project<span className="font-light"> Terbaru</span>
          </h3>
          <p  className="mt-8 text-base">
            Menawarkan website yang telah jadi sebagai template. Klien bisa
            melakukan pembelian apabila masih tersedia.
          </p>
        </div>
      </div>

      <div className="container m-auto table-tech flex-wrap mt-8 w-full justify-around flex gap-4 gap-y-10">
        {project.length > 0 ? (
          project.map((item, i) => (
            <div
            
              key={i}
              className="hover:-translate-y-2 duration-700 w-[350px] flex flex-col border-b-2 border-black hover:shadow-2xl rounded-lg pb-6 h-[600px] flex flex-col justify-start parent"
            >
              <div className="relative w-full overflow-hidden">
                <div className="image-container relative w-full h-[300px] overflow-hidden rounded-lg ">
                  <img
                    src={item.project_image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-3 flex-1 self-start overflow-hidden max-h-[250px]">
                <h4 className="text-2xl font-bold">{item.name}</h4>
                <p className="font-light text-sm">Jenis Website : {item.jenis_website}</p>
                <p className="font-light">Harga: {item.harga ? item.harga : "?"}</p>
                <p className="">{item.description}</p>
              </div>
              <div className="w-full px-4 flex items-center justify-between">
                <button
                onClick={alertshow}
                  className="detailproduct w-1/2 invisible opacity-0 relative inline-flex items-center justify-start inline-block py-1 px-4 overflow-hidden font-medium transition-all text-base bg-neutral-800 rounded-full hover:bg-white group"
                >
                  <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all rounded-full"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-neutral-900">
                    Lihat detail
                  </span>
                </button>
                <div className="inline-flex w-full justify-end items-center">
                  {
                    item.beli === "ya" ? (
                  <button
                    onClick={alertshow}
                    class="relative inline-flex items-center justify-start inline-block py-1 px-4 overflow-hidden font-medium transition-all text-base bg-blue-600 rounded-full hover:bg-white group"
                  >
                    <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-neutral-900">
                      Beli
                    </span>
                  </button>
                    ) : (
                                      <button onClick={alertshow}
                    className="relative inline-flex items-center justify-start inline-block py-1 px-4 overflow-hidden font-medium transition-all text-base bg-red-500 rounded-full hover:bg-white group"
                  >
                    <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-neutral-900">
                      Terjual
                    </span>
                  </button>
                    )
                  }
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>empty</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Project;