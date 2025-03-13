import { BlogCard, CommunityBanner, Filter, Intro } from "@/components/blog";
import { GridList } from "@/components/common";
import { Blog, EBlogCate } from "@/models/blog";

const fakeBlogs: Blog[] = [
  {
    title: "Xu hướng thiết kế website năm 2025",
    id: 1,
    tag: EBlogCate.DES_WEBSITE,
    publishDate: new Date("2025-03-01"),
    readTime: 8,
  },
  {
    title: "Cách tối ưu UX/UI cho ứng dụng mobile",
    id: 2,
    tag: EBlogCate.DES_APP_MOBILE,
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
    tag: EBlogCate.SALES_MANAGEMENT,
    publishDate: new Date("2025-03-05"),
    readTime: 7,
  },
  {
    title: "FOSO đạt giải thưởng công nghệ xuất sắc 2025",
    id: 5,
    tag: EBlogCate.FOSO_ACHIEVEMENT,
    publishDate: new Date("2025-02-10"),
    readTime: 5,
  },
  {
    title: "Cập nhật mới nhất về FOSO trong năm 2025",
    id: 6,
    tag: EBlogCate.FOSO_NEWS,
    publishDate: new Date("2025-03-08"),
    readTime: 4,
  },
];

export default function Home() {
  return (
    <div className="app-content">
      <Intro />
      <div className="flex gap-4 mx-auto max-w-7xl">
        <div className="flex flex-col flex-3/4 gap-7">
          <span className="font-extrabold text-4xl">Tất cả bài viết</span>
          <CommunityBanner />

          <GridList data={fakeBlogs}>
            {(blog) => <BlogCard blog={blog} key={blog.id} />}
          </GridList>
          <div>pagination</div>
        </div>
        <div className="flex flex-col flex-1/4">
          <Filter />
        </div>
      </div>
    </div>
  );
}
