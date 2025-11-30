import React from "react";
import { Menu, Bell } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-lg border-b border-white/5">
      <div className="flex items-center p-4">
       
        <h1 className="text-white text-xl font-extrabold leading-tight tracking-[-0.015em] flex-1 text-center">
          Markets
        </h1>
        <div className="flex w-12 items-center justify-end">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
