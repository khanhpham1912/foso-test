"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

const TableOfContentsItem = ({
  number,
  title,
  isSubItem = false,
}: {
  number: string;
  title: string;
  isSubItem?: boolean;
}) => {
  const id = `section${number.replace(".", "")}`;

  return (
    <li className={`${isSubItem ? "ml-6" : ""} py-1`}>
      <Link
        href={`#${id}`}
        className={`flex group hover:text-primary transition-colors duration-200 `}
      >
        <span className="text-primary font-medium mr-2">{number}</span>
        <span className="text-gray-700 group-hover:text-primary">{title}</span>
      </Link>
    </li>
  );
};

export const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <div className="font-extrabold text-2xl mb-4">Nội Dung Bài Viết</div>
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? (
            <ChevronUpIcon className="size-5" />
          ) : (
            <ChevronDownIcon className="size-5" />
          )}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col">
          <TableOfContentsItem number="1." title="Quy trình 5S là gì?" />
          <TableOfContentsItem
            number="2."
            title="Lợi ích quy trình 5S đem lại"
          />
          <TableOfContentsItem
            number="3."
            title="Tại sao doanh nghiệp nên áp dụng quy trình 5S?"
          />
          <TableOfContentsItem
            number="3.1"
            title="Cải thiện rõ nét môi trường làm việc"
            isSubItem
          />
          <TableOfContentsItem
            number="3.2"
            title="Tiết kiệm thời gian đáng kể"
            isSubItem
          />
          <TableOfContentsItem
            number="3.3"
            title="Tăng năng suất làm việc"
            isSubItem
          />
          <TableOfContentsItem
            number="3.4"
            title="Tiết kiệm chi phí"
            isSubItem
          />
          <TableOfContentsItem
            number="3.5"
            title="Tăng chất lượng sản phẩm"
            isSubItem
          />
          <TableOfContentsItem number="4." title="Quy trình 5S gồm các bước:" />
          <TableOfContentsItem
            number="4.1"
            title="Seiri (Ngăn nắp)"
            isSubItem
          />
          <TableOfContentsItem
            number="4.2"
            title="Seiton (Sắp xếp)"
            isSubItem
          />
          <TableOfContentsItem number="4.3" title="Seiso (Vệ sinh)" isSubItem />
          <TableOfContentsItem
            number="4.4"
            title="Seiketsu (Tiêu chuẩn hóa)"
            isSubItem
          />
          <TableOfContentsItem
            number="4.5"
            title="Shitsuke (Kỷ luật)"
            isSubItem
          />
          <TableOfContentsItem
            number="5."
            title="Quy trình được thực hiện như sau:"
          />
          <TableOfContentsItem
            number="5.1"
            title="Giai đoạn chuẩn bị"
            isSubItem
          />
          <TableOfContentsItem
            number="5.2"
            title="Triển khai rộng rãi"
            isSubItem
          />
          <TableOfContentsItem
            number="5.3"
            title="Thực hiện vệ sinh toàn bộ doanh nghiệp"
            isSubItem
          />
          <TableOfContentsItem
            number="5.4"
            title="Sàng lọc, sắp xếp và đánh giá"
            isSubItem
          />
          <TableOfContentsItem number="5.5" title="Đánh giá" isSubItem />
          <TableOfContentsItem
            number="6."
            title="Quy trình 5S có giống với Kaizen?"
          />
          <TableOfContentsItem
            number="7."
            title="Đối tượng nào nên áp dụng 5S?"
          />
          <TableOfContentsItem
            number="8."
            title="Các yếu tố tạo nên thành công cho quy trình 5S"
          />
        </ul>
      )}
    </div>
  );
};
