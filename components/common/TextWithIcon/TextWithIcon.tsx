import { cn } from "@/lib/classNames";

interface IconLabelProps {
  icon: React.ReactElement;
  content: React.ReactNode;
}

export const TextWithIcon = ({
  icon,
  content,
  className,
  ...props
}: IconLabelProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {icon}
      <div>{content}</div>
    </div>
  );
};
