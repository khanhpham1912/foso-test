import Image from "next/image";

export const ImageWithAlt = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="flex flex-col items-center text-center w-full gap-3">
      <div className="relative w-full h-[600px]">
        <Image src={src} alt={text} fill />
      </div>
      <div className="text-foreground-500 font-normal">{text}</div>
    </div>
  );
};
