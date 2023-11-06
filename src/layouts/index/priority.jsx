import { useState, useEffect } from "react";


const Priority = () => {

  return (
        <div className="border-2 w-full bg-blue-50 mt-4 mb-20">
    <div className="relative container m-auto tech-table w-full px-4 py-20">
      <div className=" tech-definiton">
        <h3 className="font-bold text-2xl">
          Menawarkan fokus pada kinerja yang unggul, sistem keamanan yang
          handal, dan tampilan yang klasik namun tetap elegan.
        </h3>
        <p className="mt-2">
          Dengan berfokus pada kinerja yang unggul, kami menegaskan komitmen
          kami untuk memberikan sistem keamanan yang tak tergoyahkan. Menyajikan
          solusi keamanan yang tak kompromi, memastikan pelanggan kami memiliki
          ketenangan pikiran sepanjang waktu.
        </p>
        <p className="mt-2">
          Tampilan yang kami tawarkan adalah kombinasi sempurna antara klasik
          dan elegan. Dengan desain yang menggabungkan design klasik namun
          elegan, kami menciptakan estetika. Kami percaya bahwa tampilan yang
          baik adalah cerminan dari kualitas dalam, dan itulah yang kami
          hadirkan dengan bangga kepada setiap klien kami.
        </p>
      </div>

      <div class="title-tech mt-6 w-full flex justify-center items-center flex-col">
        <div class="text-end">
          <h3 className="font-bold text-2xl">
            Menyajikan jasa pembuatan website yang terpercaya, murah, dan
            mementingkan kepuasan klien.
          </h3>
          <p  class="mt-2">
            Menerima jasa pembuatan website komersial, portofolio, blog,
            artikel, dan sejenisnya adalah suatu layanan yang saya tawarkan guna
            menyampaikan informasi atau kebutuhan individu, bisnis, atau
            organisasi. Memiliki fleksibilitas untuk menciptakan situs web yang
            disesuaikan sepenuhnya dengan tujuan klien. Layanan ini memungkinkan
            klien untuk berkolaborasi atau meminta design dengan saya dalam
            merancang web dan pengembangan untuk mencapai hasil yang sesuai
            dengan visi dan kebutuhan klien.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Priority;