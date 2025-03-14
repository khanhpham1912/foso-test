import { PropsWithChildren } from "react";

export const SectionTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="font-bold text-primary text-lg">{children}</h2>;
};
