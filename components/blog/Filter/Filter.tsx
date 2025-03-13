import { cn } from "@/lib/classNames";

const categoryList = [
  { title: "Tất cả", count: 108 },
  { title: "Thiết Kế Website", count: 36 },
  { title: "Thiết Kế App Mobile", count: 13 },
  { title: "Quản Lý Sản Xuất", count: 25 },
  { title: "Quản Lý Bán Hàng", count: 22 },
  { title: "Báo Chí Nói Về FOSO", count: 7 },
  { title: "Tin Tức FOSO", count: 5 },
];
export const Filter = () => {
  return (
    <div className="px-4 pb-4">
      {/* Search Section */}
      <div>
        <h2 className="font-extrabold text-2xl mb-3">Tìm Kiếm</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết"
            className="w-full p-3 pl-4 pr-12 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-lg">
            🔍
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-6">
        <h2 className="font-extrabold text-2xl mb-3">Danh Mục</h2>
        <ul className="space-y-2 text-foreground-500">
          {categoryList.map((item, index) => (
            <li
              key={item.title}
              className={cn(
                "flex justify-between hover:text-primary hover:font-medium group cursor-pointer py-1",
                index !== categoryList.length - 1 &&
                  "border-b border-b-foreground-300"
              )}
            >
              <span>{item.title}</span>
              <span className="text-gray-400 group-hover:text-primary group-hover:font-medium">
                {item.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
