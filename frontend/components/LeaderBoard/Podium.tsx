import React from "react";
import { Shield, ShieldCheck } from "lucide-react";
import { UserData } from "../../types";

interface PodiumProps {
  first: UserData;
  second: UserData;
  third: UserData;
}

const getTierIcon = (tierIcon: string, className: string) => {
  switch (tierIcon) {
    case "verified":
      return <ShieldCheck className={className} />;
    case "shield":
    default:
      return <Shield className={className} />;
  }
};

const Podium: React.FC<PodiumProps> = ({ first, second, third }) => {
  return (
    <section className="mb-8 mt-2 px-4">
      <div className="grid grid-cols-3 items-end gap-2 text-center max-w-md mx-auto">
        {/* Rank 2 (Left) */}
        <div className="flex flex-col items-center gap-2 order-1">
          <div className="relative animate-in slide-in-from-bottom-4 duration-700 fade-in">
            <div
              className="w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full border-2 border-teal-500/50 shadow-[0_0_15px_rgba(45,212,191,0.3)]"
              style={{ backgroundImage: `url("${second.avatar}")` }}
              role="img"
              aria-label={`Profile picture of ${second.name}`}
            />
            <div className="absolute -bottom-2 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 border-2 border-background-dark text-background-dark font-bold text-base shadow-lg z-10">
              2
            </div>
          </div>
          <div className="w-full">
            <p className="text-white text-sm font-semibold leading-normal truncate w-full px-1">
              {second.name}
            </p>
            <div className="mt-0.5 flex items-center justify-center gap-1">
              {getTierIcon(second.tierIcon, "h-4 w-4 text-teal")}
              <span className="text-xs font-medium text-zinc-400">
                {second.tier}
              </span>
            </div>
          </div>
        </div>

        {/* Rank 1 (Center) */}
        <div className="flex flex-col items-center gap-2 order-2 -mt-4 z-10">
          <div className="relative animate-in slide-in-from-bottom-8 duration-700 fade-in">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gold blur-xl opacity-20"></div>
            <div
              className="w-28 h-28 bg-center bg-no-repeat bg-cover rounded-full border-4 border-gold shadow-[0_0_25px_rgba(255,191,0,0.4)]"
              style={{ backgroundImage: `url("${first.avatar}")` }}
              role="img"
              aria-label={`Profile picture of ${first.name}`}
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gold border-4 border-background-dark text-background-dark font-bold text-xl shadow-xl z-20">
              1
            </div>
          </div>
          <div className="w-full mt-2">
            <p className="text-white text-base font-bold leading-normal truncate w-full px-1">
              {first.name}
            </p>
            <div className="mt-0.5 flex items-center justify-center gap-1">
              {getTierIcon(first.tierIcon, "h-5 w-5 text-gold")}
              <span className="text-sm font-medium text-zinc-300">
                {first.tier}
              </span>
            </div>
          </div>
        </div>

        {/* Rank 3 (Right) */}
        <div className="flex flex-col items-center gap-2 order-3">
          <div className="relative animate-in slide-in-from-bottom-4 duration-700 fade-in delay-100">
            <div
              className="w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full border-2 border-amber-700 shadow-[0_0_15px_rgba(180,83,9,0.3)]"
              style={{ backgroundImage: `url("${third.avatar}")` }}
              role="img"
              aria-label={`Profile picture of ${third.name}`}
            />
            <div className="absolute -bottom-2 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-700 border-2 border-background-dark text-white font-bold text-base shadow-lg z-10">
              3
            </div>
          </div>
          <div className="w-full">
            <p className="text-white text-sm font-semibold leading-normal truncate w-full px-1">
              {third.name}
            </p>
            <div className="mt-0.5 flex items-center justify-center gap-1">
              {getTierIcon(third.tierIcon, "h-4 w-4 text-teal")}
              <span className="text-xs font-medium text-zinc-400">
                {third.tier}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podium;
