import React from "react";
import { Button } from "../ui/button";

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full">
        <div
          className="flex h-screen md:min-h-[80vh] flex-col gap-8 bg-cover bg-center bg-no-repeat items-center justify-center p-6 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 17, 34, 0.6) 0%, rgba(16, 17, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRPukqcLtyiukcBjhV6suggR72UOV0-M2nMMCEtpLC1CSTeiNVJzUSje13DmlPn7F9InOvnq0CYUEVkmg3gHBA8Jqutz-C_ygVfBIJ7pdhZtBZmrNxor-mJJSf3OwlINjKSD8LD0WnKbPJya8P0dX5m0GkscPxWhLXzTdCrkqRlvcL_tCxmfCk02ztJmXeMWuQXM5J1nZWrrsFUlS1Ph7i8QfjnehxmQgX9VJ5q3VZESzpcTieOQ9TBotqBixicmZsc1gpwG8o_vM")`,
          }}
        >
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl md:text-7xl">
              YOUR CULTURAL KNOWLEDGE. AGGREGATED. REWARDED.
            </h1>
            <h2 className="text-gray-300 text-base md:text-xl font-normal leading-normal max-w-2xl mx-auto">
              Predict outcomes in African entertainment, compete in global
              leagues, and earn status by mastering the market for truth.
            </h2>
          </div>

          <div className="w-full max-w-sm mt-4">
            <Button size="lg" className="w-full h-14 text-lg" onClick={onStart}>
              START PREDICTING & EARN
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Bar Section */}
      <div className="py-12 px-4 bg-background-dark border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            <div className="flex flex-col gap-2 rounded-xl p-8 border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
              <p className="text-gray-400 text-lg font-medium">
                Total Predictions
              </p>
              <p className="text-white text-4xl md:text-5xl font-bold">1.2M+</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-8 border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
              <p className="text-gray-400 text-lg font-medium">
                Active Players
              </p>
              <p className="text-white text-4xl md:text-5xl font-bold">50K+</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
