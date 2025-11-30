import React from "react";

interface TabsProps {
  activeTab: "active" | "wins";
  onChange: (tab: "active" | "wins") => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onChange }) => {
  return (
    <nav className="flex px-0 py-2">
      <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-black/20 p-1 border border-white/5">
        <button
          onClick={() => onChange("active")}
          className={`flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold leading-normal transition-all duration-200 ${
            activeTab === "active"
              ? "bg-primary text-background-dark shadow-lg shadow-primary/20"
              : "text-white/60 hover:text-white"
          }`}
        >
          <span className="truncate">Active Predictions</span>
        </button>
        <button
          onClick={() => onChange("wins")}
          className={`flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold leading-normal transition-all duration-200 ${
            activeTab === "wins"
              ? "bg-primary text-background-dark shadow-lg shadow-primary/20"
              : "text-white/60 hover:text-white"
          }`}
        >
          <span className="truncate">Recent Wins</span>
        </button>
      </div>
    </nav>
  );
};

export default Tabs;
