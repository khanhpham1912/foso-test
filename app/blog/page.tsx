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
    <div className="app-content">
      <div className="flex gap-4 mx-auto max-w-7xl mb-24">
        <div className="flex flex-col flex-3/4 gap-7">
          <span className="font-extrabold text-4xl">{fakeBlog.title}</span>
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
