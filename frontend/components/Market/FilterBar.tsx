import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Category } from "../../Services/types";
import { CATEGORIES } from "../../Services/constants";

interface FilterBarProps {
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeCategory,
  onSelect,
}) => {
  return (
    <div className="sticky top-[72px] z-40 bg-background-dark px-4 pb-4 pt-2">
      <div className="mx-auto w-full max-w-md md:max-w-none">
        <div className="flex min-w-0 gap-3 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelect(cat)}
                className={`
                  flex h-10 shrink-0 items-center justify-center rounded-full px-4 text-sm font-bold leading-normal transition-all duration-200
                  ${
                    isActive
                      ? "bg-primary/20 text-primary ring-1 ring-primary/50"
                      : "bg-[#393328]/40 text-white/80 hover:bg-[#393328] hover:text-white"
                  }
                `}
              >
                <span className="whitespace-nowrap">{cat}</span>
              </button>
            );
          })}

          <button className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#393328]/40 transition-colors hover:bg-[#393328]">
            <SlidersHorizontal className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
