import React from "react";
import { Flame, Shield, ShieldCheck } from "lucide-react";
import { UserData } from "../../types";

interface LeaderboardItemProps {
  user: UserData;
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

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ user }) => {
  const isCurrentUser = user.isCurrentUser;

  // Determine styles based on "You" status
  const containerClass = isCurrentUser
    ? "bg-primary/20 border-primary/50 ring-1 ring-primary/30"
    : "bg-zinc-900/40 border-zinc-800 hover:bg-zinc-800/50";

  // Determine icon color
  let iconColorClass = "text-zinc-400";
  if (user.tierColor === "gold") iconColorClass = "text-gold";
  if (user.tierColor === "teal") iconColorClass = "text-teal";
  if (user.tierColor === "coral") iconColorClass = "text-coral";
  if (user.tierColor === "slate") iconColorClass = "text-slate-400";

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${containerClass}`}
    >
      {/* Rank */}
      <div className="text-zinc-400 font-bold w-6 text-center text-sm">
        {user.rank}
      </div>

      {/* Avatar */}
      <div
        className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 shrink-0 border border-white/10"
        style={{ backgroundImage: `url("${user.avatar}")` }}
      />

      {/* Name & Tier */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <p
          className={`text-base font-semibold leading-normal truncate ${
            isCurrentUser ? "text-white" : "text-zinc-100"
          }`}
        >
          {user.name}
        </p>
        <div className="mt-0.5 flex items-center gap-1.5">
          {getTierIcon(user.tierIcon, `h-4 w-4 ${iconColorClass}`)}
          <p className="text-xs font-medium leading-normal text-zinc-400 truncate">
            {user.tier}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 shrink-0 text-right">
        {/* Accuracy */}
        <p className="text-white text-sm font-medium leading-normal w-12 hidden sm:block">
          {user.accuracy}
        </p>

        {/* KP (Mobile optimized) */}
        <div className="flex flex-col items-end">
          <p className="text-zinc-200 text-sm font-medium leading-normal w-14">
            {user.kp}
          </p>
        </div>

        {/* Streak */}
        <div className="flex w-8 items-center justify-end gap-0.5">
          <Flame
            className={`h-4 w-4 ${
              user.streak > 0 ? "text-coral" : "text-zinc-600"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              user.streak > 0 ? "text-white" : "text-zinc-500"
            }`}
          >
            {user.streak}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardItem;
