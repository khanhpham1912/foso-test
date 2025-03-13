import { ArrowUpRightIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky flex items-center px-4 py-6">
      <div className="min-w-0 flex-1 flex items-center mx-auto bg-white shadow-md rounded-full w-full max-w-7xl ">
        <nav className="flex items-center justify-between px-6 py-3 mx-auto gap-16">
          {/* Logo */}
          <Image src="/logo.png" alt="FOSO Logo" width={100} height={40} />

          {/* Menu */}
          <div className="flex items-center gap-9 text-gray-700 font-medium">
            <div className="cursor-pointer hover:text-primary">
              Về Chúng Tôi
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
              Giải Pháp <ChevronDownIcon className="size-4" />
            </div>
            <div className=" flex items-center gap-1 cursor-pointer font-semibold text-gray-900 relative">
              Tài Nguyên
              <ChevronDownIcon className="size-4" />
              {/* Selected mark */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
            </div>
            <div className="cursor-pointer hover:text-primary">Liên Hệ</div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language change */}
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-200 rounded-full">
              <Image
                src="/flag-vn.png"
                alt="Vietnam flag"
                width={20}
                height={20}
              />
              <span>VI</span>
              <ChevronDownIcon className="size-4" />
            </button>

            {/* Support customer btn */}
            <button className="flex items-center gap-3 px-4 py-2 bg-primary-400 text-foreground font-bold rounded-full cursor-pointer ">
              Trở Thành Khách Hàng
              <div className="flex items-center justify-center p-1 bg-black rounded-full">
                <ArrowUpRightIcon className="size-4 text-white" />
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
