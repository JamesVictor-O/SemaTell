import React from "react";
import { UserStats } from "../../types";

interface ProfileHeaderProps {
  user: UserStats;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <section className="flex flex-col gap-4 rounded-xl glassmorphism p-4 w-full">
      <div className="flex items-center gap-4">
        <div
          className="h-20 w-20 flex-shrink-0 rounded-full bg-cover bg-center bg-no-repeat border-2 border-primary/20"
          style={{ backgroundImage: `url("${user.avatar}")` }}
          aria-label={user.name}
        />
        <div className="flex flex-col justify-center">
          <p className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            {user.name}
          </p>
          <p className="text-primary/80 text-sm font-normal leading-normal">
            {user.accuracy}% Accurate
          </p>
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-0.5">
            {user.league} - {user.tier} TIER
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-lg border border-primary/20 bg-primary/10 p-4">
        <p className="text-primary/90 text-sm font-medium leading-normal">
          KP Balance
        </p>
        <p className="text-primary text-3xl font-bold leading-tight tracking-tight">
          {user.balance.toLocaleString()}
        </p>
      </div>
    </section>
  );
};

export default ProfileHeader;
