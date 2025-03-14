"use client";
import { useDebounceFn } from "@/hooks";
import { cn } from "@/lib/classNames";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export const Search = ({
  value,
  onChange,
  className,
  ...props
}: { value?: string; onChange: (value: string) => void } & Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "onChange"
>) => {
  const [searchValue, setSearchValue] = useState<string>(value ?? "");
  const onChangeDebounced = useDebounceFn(onChange, 300);
  const handleChangeValue = (value: string) => {
    setSearchValue(value);
    onChangeDebounced(value);
  };
  return (
    <div
      className={cn(
        "flex rounded-md bg-white outline-0 -outline-offset-0 focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-primary shadow",
        className
      )}
    >
      <input
        value={searchValue}
        onChange={(e) => {
          handleChangeValue(e.target.value ?? "");
        }}
        placeholder="Search"
        id="search"
        name="search"
        type="text"
        className="block min-w-0 grow px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        {...props}
      />
      <div className="flex py-1.5 pr-1.5">
        <div className="inline-flex items-center rounded-lg p-2 font-sans text-xs text-white bg-primary">
          <MagnifyingGlassIcon className="size-4" />
        </div>
      </div>
    </div>
  );
};
