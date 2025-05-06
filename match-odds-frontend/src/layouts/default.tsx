import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";
import Info from "@/components/Info/Info";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Info />
      </footer>
    </div>
  );
}
