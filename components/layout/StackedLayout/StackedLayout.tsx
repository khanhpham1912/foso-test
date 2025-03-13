import { PropsWithChildren } from "react";
import { Header } from "../Header";

export const StackedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-background relative flex h-screen flex-col overflow-hidden">
      <Header />

      <main className="flex flex-grow flex-col h-full min-h-[calc(100vh-113.41px)]">
        {children}
      </main>
    </div>
  );
};
