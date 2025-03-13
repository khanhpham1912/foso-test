"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export const TableOfContents = ({
  contents,
}: {
  contents: {
    id: string;
    title: string;
    children?: { id: string; title: string }[];
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-lg"
      >
        Nội Dung Bài Viết
        {isOpen ? (
          <ChevronUpIcon className="size-5" />
        ) : (
          <ChevronDownIcon className="size-5" />
        )}
      </button>
      {isOpen && (
        <ol className="mt-2 space-y-1 text-gray-700 list-decimal list-inside">
          {contents.map((item) => (
            <li
              key={item.id}
              className={
                item.children
                  ? "font-semibold text-green-600"
                  : "ml-4 text-gray-600"
              }
            >
              {item.title}
              {item.children && (
                <ol className="ml-4 list-decimal">
                  {item.children.map((subItem) => (
                    <li key={subItem.id} className="text-gray-600">
                      {subItem.title}
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
