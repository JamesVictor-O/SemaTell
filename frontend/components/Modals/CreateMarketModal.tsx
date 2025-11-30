import React, { useState } from "react";
import { X, Plus, ChevronRight, Calendar } from "lucide-react";

interface Outcome {
  id: number;
  value: string;
  placeholder: string;
}

interface CreateMarketModalProps {
  onClose: () => void;
}

export default function CreateMarketModal({ onClose }: CreateMarketModalProps) {
  const [question, setQuestion] = useState("");
  const [outcomes, setOutcomes] = useState<Outcome[]>([
    { id: 1, value: "Yes", placeholder: "Yes" },
    { id: 2, value: "No", placeholder: "No" },
  ]);
  const [stake] = useState(1000);
  const [description, setDescription] = useState("");

  const addOutcome = () => {
    const newId = outcomes.length + 1;
    setOutcomes([
      ...outcomes,
      { id: newId, value: "", placeholder: `Outcome ${newId}` },
    ]);
  };

  const updateOutcome = (id: number, newValue: string) => {
    setOutcomes(
      outcomes.map((o) => (o.id === id ? { ...o, value: newValue } : o))
    );
  };

  return (
    <div className="z-10 flex h-full w-full max-h-[100vh] flex-col overflow-hidden rounded-t-2xl border border-white/5 bg-background-dark/95 backdrop-blur-xl shadow-2xl sm:h-auto sm:max-h-[90vh] sm:w-[480px] sm:rounded-3xl">
      {/* Drag Handle (Mobile aesthetic) */}
      <div className="w-full shrink-0 flex justify-center pt-3 pb-1">
        <div className="h-1.5 w-10 rounded-full bg-[#544c3b/60]" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 shrink-0">
        <div className="w-10" /> {/* Spacer for centering */}
        <h2 className="text-white text-lg font-bold tracking-tight">
          Create a New Market
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>

      {/* Scrollable Form Content */}
      <div className="flex-1 space-y-6 overflow-y-auto px-5 py-2">
        {/* Market Question */}
        <div className="space-y-2">
          <label className="text-white text-[15px] font-semibold">
            Market Question
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., Will it rain in Lagos tomorrow?"
            className="w-full h-14 px-4 bg-input-dark rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-transparent focus:border-primary/30"
          />
        </div>

        {/* Outcomes */}
        <div className="space-y-3">
          <div className="pb-1">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome.id} className="space-y-2">
                  <label className="block truncate text-[15px] font-semibold text-white">
                    Outcome {outcome.id}
                  </label>
                  <input
                    type="text"
                    value={outcome.value}
                    onChange={(e) => updateOutcome(outcome.id, e.target.value)}
                    placeholder={outcome.placeholder}
                    className="h-14 w-full rounded-xl border border-transparent bg-input px-4 text-white placeholder:text-white/30 transition-all focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={addOutcome}
            className="flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-sm py-2 px-1 rounded-lg hover:bg-primary/5 w-fit transition-colors"
          >
            <Plus size={20} strokeWidth={2.5} />
            <span>Add Option</span>
          </button>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-[15px] font-semibold text-white">
            Category
          </label>
          <button className="flex h-14 w-full items-center justify-between rounded-xl bg-input px-4 text-white/40 transition-colors hover:bg-[#433c30] group">
            <span className="group-hover:text-white/60 transition-colors">
              Select a category
            </span>
            <ChevronRight
              size={24}
              className="text-white/50 group-hover:text-white/80 transition-colors"
            />
          </button>
        </div>

        {/* Closing Date */}
        <div className="space-y-2">
          <label className="text-[15px] font-semibold text-white">
            Closing Date & Time
          </label>
          <button className="flex h-14 w-full items-center justify-between rounded-xl bg-input px-4 text-white/40 transition-colors hover:bg-[#433c30] group">
            <span className="group-hover:text-white/60 transition-colors">
              Set a closing date
            </span>
            <Calendar
              size={22}
              className="text-white/50 group-hover:text-white/80 transition-colors"
            />
          </button>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="flex items-center gap-1 text-[15px] font-semibold text-white">
            Description{" "}
            <span className="text-white/30 font-normal">(Optional)</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add context or rules for this market."
            className="w-full min-h-[120px] resize-none rounded-xl border border-transparent bg-input p-4 text-white placeholder:text-white/30 transition-all focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Initial Stake (static display for now, slider can be wired later) */}
        <div className="space-y-4 pt-1 pb-4">
          <div className="flex items-end justify-between">
            <label className="text-white text-[15px] font-semibold">
              Initial Stake
            </label>
            <div className="text-xl font-bold text-white">
              {stake.toLocaleString()}{" "}
              <span className="ml-0.5 text-sm font-medium text-primary">
                PROPH
              </span>
            </div>
          </div>
          <div className="h-2 w-full rounded-full bg-input-dark/60">
            <div className="h-2 w-1/3 rounded-full bg-primary/80" />
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="border-t border-white/5 bg-background-dark/95 p-5 backdrop-blur-md">
        <button className="flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-bold text-[#121212] shadow-lg shadow-primary/40 transition-all hover:bg-[#e09e1f] active:scale-[0.98]">
          Create Market
        </button>
      </div>
    </div>
  );
}
