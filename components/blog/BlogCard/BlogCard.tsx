"use client";
// components
import Image from "next/image";
import { Tag, TextWithIcon } from "@/components/common";

// models
import { Blog } from "@/models/blog";

// icons
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/16/solid";

// utils
import { displayDate, displayNumber, displayValue } from "@/utils/view";

// hooks
import { useRouter } from "next/navigation";

import image from "@/public/blog/image.png";

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("#");
  };
  return (
    <div className="flex flex-col gap-6 w-md">
      <Image
        src={image}
        alt="blog-img"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        className="rounded-3xl cursor-pointer"
        onClick={handleNavigate}
      />
      <div className="flex flex-col gap-4">
        <Tag label={blog.tag} />
        <span className="text-2xl font-extrabold text-pretty text-foreground-700 hover:underline cursor-pointer">
          {displayValue(blog.title)}
        </span>
        <div className="flex items-center gap-3 text-base text-foreground-500">
          <TextWithIcon
            icon={<CalendarIcon className="size-4" />}
            content={displayDate(blog.publishDate)}
          />
          <div className="border-r-foreground-300 h-full border-r" />
          <TextWithIcon
            icon={<ClockIcon className="size-4" />}
            content={displayNumber(blog.readTime)}
          />
        </div>
        <div
          className="flex justify-start items-center gap-7 text-foreground-500 cursor-pointer"
          onClick={handleNavigate}
        >
          <span className="font-semibold">Khám phá thêm</span>
          <ArrowRightIcon className="size-6" />
        </div>
      </div>
    </div>
  );
};
