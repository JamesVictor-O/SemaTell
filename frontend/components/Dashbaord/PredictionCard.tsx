import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Prediction } from "../../types";

interface PredictionCardProps {
  prediction: Prediction;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  const isPositive = prediction.livePL >= 0;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-primary/10 glassmorphism w-full">
      <div
        className="w-full aspect-2/1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${prediction.image}")` }}
      />

      <div className="flex w-full grow flex-col gap-4 p-4">
        <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          {prediction.question}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <p className="text-white/60 text-xs uppercase tracking-wide">
              Your Prediction
            </p>
            <p className="font-bold text-white">{prediction.userPrediction}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white/60 text-xs uppercase tracking-wide">
              Your Stake
            </p>
            <p className="font-bold text-white">
              {prediction.stake.toLocaleString()} KP
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white/60 text-xs uppercase tracking-wide">
              Current Price
            </p>
            <p className="font-bold text-white">
              {prediction.currentPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white/60 text-xs uppercase tracking-wide">
              Live P/L
            </p>
            <div
              className={`font-bold flex items-center gap-1 ${
                isPositive ? "text-success" : "text-danger"
              }`}
            >
              {isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>
                {isPositive ? "+" : ""}
                {prediction.livePL.toLocaleString()} KP
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between rounded-lg bg-primary/10 p-3 border border-primary/10">
          <span className="text-primary/90 font-medium text-sm">
            Potential Payout
          </span>
          <span className="text-primary font-bold text-base">
            {prediction.potentialPayout.toLocaleString()} KP
          </span>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;
