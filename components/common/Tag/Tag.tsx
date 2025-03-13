import { cn } from "@/lib/classNames";
import { displayValue } from "@/utils/view";

interface TagProps {
  label: string;
}

export const Tag = ({
  label,
  className,
  ...props
}: TagProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "px-2 py-1 rounded-full text-blue-foreground bg-blue-background text-xs w-fit font-medium",
        className
      )}
      {...props}
    >
      {displayValue(label)}
    </div>
  );
};
