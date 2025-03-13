import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-8 py-4 ">
      <button className="text-gray-300 flex items-center cursor-pointer">
        <ChevronLeftIcon className="size-6" />
        Trang trước
      </button>
      <div className="flex space-x-2">
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 text-white"
        >
          1
        </Link>
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          2
        </Link>
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          3
        </Link>
        <span className="w-8 h-8 flex items-center justify-center">...</span>
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          9
        </Link>
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          10
        </Link>
      </div>
      <button className="text-gray-700 flex items-center cursor-pointer">
        Trang kế tiếp
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
};
