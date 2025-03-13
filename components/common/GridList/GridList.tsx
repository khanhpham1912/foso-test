export const GridList = <T extends { id?: string | number }>({
  data,
  children,
}: {
  data: T[];
  children: (data: T, index?: number) => React.ReactNode;
}) => {
  return (
    <div role="list" className="flex gap-6 flex-wrap">
      {data.map((element, index) => children(element, index))}
    </div>
  );
};
