import React from "react";
import { TabOption } from "../../types";

interface TabGroupProps {
  selectedTab: TabOption;
  onSelectTab: (tab: TabOption) => void;
}

const TabGroup: React.FC<TabGroupProps> = ({ selectedTab, onSelectTab }) => {
  const tabs: TabOption[] = ["My League", "Global Top 100", "Thematic"];

  return (
    <div className="px-4 py-3 sticky top-16 z-40 bg-background-dark/95 backdrop-blur-xl">
      <div className="flex h-11 w-full items-center justify-center rounded-xl p-1 glass-effect">
        {tabs.map((tab) => (
          <label
            key={tab}
            className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold leading-normal transition-all duration-300 ${
              selectedTab === tab
                ? "bg-primary shadow-lg text-white"
                : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
            }`}
            onClick={() => onSelectTab(tab)}
          >
            <span className="truncate">{tab}</span>
            <input
              type="radio"
              name="leaderboard-toggle"
              value={tab}
              className="invisible w-0 absolute"
              checked={selectedTab === tab}
              readOnly
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default TabGroup;
