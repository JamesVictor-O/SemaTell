import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TopBar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="flex h-16 items-center justify-between p-4 pb-2">
        <Link
          href="/dashboard"
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Leaderboard
        </h1>
      </div>
    </div>
  );
};

export default TopBar;
