import React from "react";
import { ArrowUpDown } from "lucide-react";

const StickyHeader: React.FC = () => {
  return (
    <div className="sticky top-[116px] z-30 flex gap-4 px-4 py-2 justify-between items-center rounded-lg glass-effect mb-2 mx-4 mt-2">
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider ml-10">
          User
        </p>
      </div>
      <div className="flex items-center gap-4 mr-2">
        <button className="hidden sm:flex items-center gap-1 text-zinc-400 text-xs font-medium leading-normal transition-colors hover:text-white">
          Acc <ArrowUpDown className="h-3 w-3" />
        </button>
        <button className="flex items-center gap-1 text-zinc-400 text-xs font-medium leading-normal transition-colors hover:text-white">
          KP <ArrowUpDown className="h-3 w-3" />
        </button>
        <button className="flex items-center gap-1 text-zinc-400 text-xs font-medium leading-normal transition-colors hover:text-white">
          Streak <ArrowUpDown className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default StickyHeader;
