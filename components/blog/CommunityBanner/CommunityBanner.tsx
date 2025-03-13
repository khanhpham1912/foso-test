import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
export const CommunityBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 rounded-2xl flex justify-between">
      <div className="flex-1/4 py-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold leading-snug">
          Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
        </h2>
        <button className="mt-4 px-6 py-3 w-fit text-white bg-blue-600 font-semibold rounded-full flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-color cursor-pointer border border-white hover:border-blue-600">
          Tham Gia Ngay
          <ArrowUpRightIcon className="size-4" />
        </button>
      </div>

      <div className="relative w-60 lg:w-80 h-52">
        <Image
          src="/community-illustration.png"
          alt="Community Illustration"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
