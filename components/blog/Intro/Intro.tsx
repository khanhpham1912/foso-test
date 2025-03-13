import Image from "next/image";

export const Intro = () => {
  return (
    <div className="px-4 text-center relative flex items-center justify-between h-[400px] mb-24 mt-12">
      <Image
        src={"/calendar.png"}
        alt="calendar"
        width={252}
        height={238}
        className="hidden xl:block"
      />
      <div className="flex-1 mx-auto ">
        <nav className="text-sm text-gray-500 mb-4">
          <span>
            Trang chủ &gt; Tài nguyên &gt;{" "}
            <span className="text-gray-800 font-bold">Blog</span>
          </span>
        </nav>
        <h1 className="text-4xl md:text-6xl leading-24">
          Blog{" "}
          <span className="font-bold bg-gradient-to-r from-[#53B086] from-40% via-[#53B086]/70 via-52% to-[#53B086] to-55% text-transparent bg-clip-text">
            FOSO{" "}
          </span>
          – <br />
          Cập Nhật Tin Tức{" "}
          <div className="relative inline-block font-extrabold">
            <span className="absolute bottom-3 left-0 w-full h-6 bg-[#A3EED6] rounded-lg"></span>
            <span className="relative z-10">Mới Nhất</span>
          </div>
        </h1>
        <p className="text-gray-600 mt-4">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </p>
      </div>
      <Image
        src={"/writing.png"}
        alt="calendar"
        width={290}
        height={221}
        className="hidden xl:block"
      />
    </div>
  );
};
