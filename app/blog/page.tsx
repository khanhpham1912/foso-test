"use client";

// components
import {
  BlogCard,
  BlogDetail,
  ReactionReview,
  TableOfContents,
} from "@/components/blog";
import Image from "next/image";

// models
import { Blog, EBlogCate } from "@/models/blog";
import Link from "next/link";
import { Tag, TextWithIcon } from "@/components/common";
import { CalendarIcon, ClockIcon } from "@heroicons/react/16/solid";
import { displayDate, displayNumber } from "@/utils/view";

const fakeBlogs: Blog[] = [
  {
    title: "Xu hướng thiết kế website năm 2025",
    id: 1,
    tag: EBlogCate.PROD_MANAGEMENT,
    publishDate: new Date("2025-03-01"),
    readTime: 8,
  },
  {
    title: "Cách tối ưu UX/UI cho ứng dụng mobile",
    id: 2,
    tag: EBlogCate.PROD_MANAGEMENT,
    publishDate: new Date("2025-02-15"),
    readTime: 6,
  },
  {
    title: "Quản lý sản xuất hiệu quả với phần mềm ERP",
    id: 3,
    tag: EBlogCate.PROD_MANAGEMENT,
    publishDate: new Date("2025-01-20"),
    readTime: 10,
  },
  {
    title: "Bí quyết tăng doanh số với phần mềm quản lý bán hàng",
    id: 4,
    tag: EBlogCate.PROD_MANAGEMENT,
    publishDate: new Date("2025-03-05"),
    readTime: 7,
  },
  {
    title: "FOSO đạt giải thưởng công nghệ xuất sắc 2025",
    id: 5,
    tag: EBlogCate.PROD_MANAGEMENT,
    publishDate: new Date("2025-02-10"),
    readTime: 5,
  },
  {
    title: "Cập nhật mới nhất về FOSO trong năm 2025",
    id: 6,
    tag: EBlogCate.PROD_MANAGEMENT,
    publishDate: new Date("2025-03-08"),
    readTime: 4,
  },
];

const fakeBlog: Blog = {
  title: "Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết",
  tag: EBlogCate.PROD_MANAGEMENT,
  publishDate: new Date("2025-03-08"),
  readTime: 10,
};

export default function BlogPage() {
  return (
    <div className="app-content pb-6">
      <div className="flex gap-4 mx-auto max-w-7xl mb-24">
        <div className="flex flex-col gap-10">
          <nav className="text-sm text-gray-500 flex space-x-1 ">
            <Link href="#" className="hover:underline">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="#" className="hover:underline">
              Tài nguyên
            </Link>
            <span>/</span>
            <Link href="#" className="hover:underline">
              Blog
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-700">
              Quản Lý Sản Xuất
            </span>
          </nav>
          <div className="grow flex gap-6">
            <div className="flex flex-col flex-3/4 gap-7 relative">
              <div className="absolute top-12 -left-24 hidden 2xl:flex xl:flex-col xl:gap-4 items-center">
                <p className="font-bold text-base text-gray-900">Chia sẻ</p>
                <div className="flex flex-col space-y-3">
                  {[
                    { src: "/social/zalo.png", alt: "Zalo", href: "#" },
                    { src: "/social/facebook.png", alt: "Facebook", href: "#" },
                    { src: "/social/x.png", alt: "Twitter", href: "#" },
                    { src: "/social/linkedin.png", alt: "LinkedIn", href: "#" },
                    { src: "/social/reddit.png", alt: "Reddit", href: "#" },
                  ].map((icon, index) => (
                    <Link
                      key={icon.alt}
                      className="w-10 h-10 relative flex items-center justify-center rounded-xl border border-primary p-2"
                      href={icon.href}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <Tag label={fakeBlog.tag} />
              <span className="font-extrabold text-4xl">{fakeBlog.title}</span>
              <div className="flex justify-between items-center my-3">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/logo.png"
                      alt="FOSO Logo"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-full bg-white p-2"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm">Tác giả</p>
                    <p className="text-gray-900 font-semibold">FOSO Creator</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center text-gray-500">
                  <TextWithIcon
                    icon={<CalendarIcon className="size-4" />}
                    content={displayDate(fakeBlog.publishDate)}
                  />
                  <div className="border-r-foreground-300 h-3 border-r" />

                  <TextWithIcon
                    icon={<ClockIcon className="size-4" />}
                    content={`${displayNumber(fakeBlog.readTime)} phút đọc`}
                  />
                </div>
              </div>
              <BlogDetail />
              <ReactionReview />
            </div>
            <div className="flex flex-col flex-1/4 gap-7">
              <TableOfContents />
              <Image
                src={"/banner1.png"}
                alt="Banner 1"
                height={650}
                width={366}
                className="cursor-pointer"
              />
              <Image
                src={"/banner2.png"}
                alt="Banner 2"
                height={650}
                width={366}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="font-extrabold text-4xl mb-7">Bài viết liên quan</div>
        <div className="flex gap-6 overflow-x-auto">
          {fakeBlogs.map((blog) => (
            <div className="w-xl" key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
