import { PropsWithChildren } from "react";
import { Header } from "../Header";

export const StackedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-background relative flex h-screen flex-col overflow-hidden">
      <Header />

      <main className="flex flex-grow flex-col h-full">
        <div className="flex flex-col grow mx-auto container h-full overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
