import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
export const AdvertisementCard = ({
  image,
  title,
  buttonText,
}: {
  image: string;
  title: string;
  buttonText: string;
}) => {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-6 rounded-2xl text-white text-center shadow-lg w-full max-w-sm">
      <div className="relative w-full h-40 mb-4">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={300}
          height={180}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <button className="mt-4 px-6 py-3 w-fit text-white bg-blue-600 font-semibold rounded-full flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-color cursor-pointer border border-white hover:border-blue-600">
        {buttonText}
        <ArrowUpRightIcon className="size-4" />
      </button>
    </div>
  );
};
