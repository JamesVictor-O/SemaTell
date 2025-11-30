import React from "react";
import { Bell } from "lucide-react";

const TopBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background-dark/80 px-4 py-3 backdrop-blur-md border-b border-primary/10">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-white">
         Home
      </h1>
      <button className="relative flex size-10 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10">
        <Bell className="h-5 w-5" />
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary ring-2 ring-background-dark" />
      </button>
    </header>
  );
};

export default TopBar;
