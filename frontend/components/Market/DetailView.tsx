import React from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { Market } from "../../Services/types";

interface DetailViewProps {
  market: Market;
  onBack: () => void;
}

export const DetailView: React.FC<DetailViewProps> = ({ market, onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark animate-in slide-in-from-right duration-300">
      {/* Detail Header */}
      <div className="sticky top-0 z-50 flex items-center p-4 bg-background-dark/80 backdrop-blur-lg border-b border-white/5">
        <button
          onClick={onBack}
          className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 text-white mr-4"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <h1 className="text-white text-lg font-bold truncate">
          Market Details
        </h1>
      </div>

      <div className="p-4 space-y-6 pb-20">
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <div
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url("${market.imageUrl}")` }}
          />
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-accent-pink/20 text-accent-pink text-xs font-bold tracking-widest mb-3">
            {market.category}
          </span>
          <h2 className="text-2xl font-bold text-white leading-tight mb-2">
            {market.question}
          </h2>
          <p className="text-gray-400">Market ID: #{market.id}</p>
        </div>

        <div className="bg-card-dark p-6 rounded-xl border border-white/10 space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-gray-400 text-sm mb-1">Probability</p>
              <p className="text-4xl font-extrabold text-primary">
                {market.percentage}%
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm mb-1">Outcome</p>
              <p className="text-xl font-bold text-white">
                {market.currentPrediction}
              </p>
            </div>
          </div>

          {/* Simple Progress Bar */}
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary"
              style={{ width: `${market.percentage}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-accent-cyan/20 bg-accent-cyan/10 p-4 text-accent-cyan">
          <Clock className="h-4 w-4" />
          <span className="font-medium">
            Market closes in {market.closesIn}
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg">Activity</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-linear-to-tr from-purple-500 to-blue-500" />
                  <div>
                    <p className="text-white text-sm font-medium">
                      User_{9000 + i}
                    </p>
                    <p className="text-xs text-gray-500">Bought Yes</p>
                  </div>
                </div>
                <span className="text-green-400 font-mono text-sm">+$240</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/95 border-t border-white/10 backdrop-blur-md">
        <button className="w-full h-12 bg-primary text-black font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
          Predict Now
        </button>
      </div>
    </div>
  );
};
