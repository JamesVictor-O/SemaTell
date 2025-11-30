import React from "react";
import { ChevronRight } from "lucide-react";

interface StatRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subValue?: string;
}

const StatRow: React.FC<StatRowProps> = ({ icon, label, value }) => {
  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-xl border border-primary/10 glassmorphism p-4 transition-colors hover:bg-white/5">
      <div className="flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium leading-normal text-white/80">
          {label}
        </p>
        <p className="text-xl font-bold leading-tight text-white">{value}</p>
      </div>
      <ChevronRight className="h-4 w-4 text-white/50" />
    </div>
  );
};

export default StatRow;
