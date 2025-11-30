import React from "react";
import { Clock } from "lucide-react";
import { Market } from "../../Services/types";

interface MarketCardProps {
  market: Market;
  onPredict: (market: Market) => void;
  onViewDetails: (market: Market) => void;
}

export const MarketCard: React.FC<MarketCardProps> = ({
  market,
  onPredict,
  onViewDetails,
}) => {
  return (
    <div className="group flex w-full flex-col items-stretch justify-start rounded-xl border border-white/10 bg-card-dark/80 p-3 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-card-dark hover:shadow-lg hover:shadow-black/20 md:p-4">
      {/* Image with overlay gradient on hover (optional enhancement) */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-800">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url("${market.imageUrl}")` }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-50" />
      </div>

      <div className="flex w-full grow flex-col items-stretch justify-center gap-3 py-3 md:gap-4 md:py-4">
        {/* Category Tag */}
        <p className="text-accent-pink text-xs font-bold leading-normal tracking-widest uppercase">
          {market.category}
        </p>

        {/* Question */}
        <h3 className="line-clamp-2 text-base font-bold leading-tight tracking-[-0.015em] text-white md:text-lg">
          {market.question}
        </h3>

        {/* Prediction Stats */}
        <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
          <p className="text-xl font-extrabold text-primary md:text-2xl">
            {market.percentage}%
          </p>
          <p className="text-sm font-normal leading-normal text-[#B0B0B0] md:text-base">
            Current Prediction:{" "}
            <span className="font-medium text-white">
              {market.currentPrediction}
            </span>
          </p>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 text-accent-cyan">
          <Clock className="h-4 w-4" />
          <p className="text-sm font-medium">Closes in: {market.closesIn}</p>
        </div>

        {/* Actions */}
        {/* <div className="mt-3 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <button
            onClick={() => onViewDetails(market)}
            className="flex h-11 flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-accent-cyan/50 px-4 text-sm font-bold leading-normal text-accent-cyan transition-all hover:bg-accent-cyan/10 active:scale-95 md:h-12"
          >
            <span className="truncate">View Details</span>
          </button>
          <button
            onClick={() => onPredict(market)}
            className="flex h-11 flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal text-black shadow-md shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95 md:h-12"
          >
            <span className="truncate">Predict</span>
          </button>
        </div> */}
        <div className="mt-2 flex items-center gap-3 justify-between">
          <button
            onClick={() => onViewDetails(market)}
            className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 border border-accent-cyan/50 text-accent-cyan text-sm font-bold leading-normal hover:bg-accent-cyan/10 active:scale-95 transition-all"
          >
            <span className="truncate">View Details</span>
          </button>
          <button
            onClick={() => onPredict(market)}
            className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-black text-sm font-bold leading-normal hover:bg-primary/90 active:scale-95 transition-all shadow-md shadow-primary/20"
          >
            <span className="truncate">Predict</span>
          </button>
        </div>
      </div>
    </div>
  );
};
