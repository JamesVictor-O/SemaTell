import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 z-40 p-4 bg-background-dark/80 backdrop-blur-xl border-t border-white/5">
      <div className="grid grid-cols-2 gap-4 rounded-2xl p-4 glass-effect shadow-2xl">
        <div className="text-center border-r border-white/10 pr-4">
          <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1">
            League Prize Pool
          </p>
          <p className="text-gold text-xl sm:text-2xl font-black tracking-tight drop-shadow-sm">
            1,500,000 KP
          </p>
        </div>
        <div className="text-center">
          <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-1">
            Weekly Reset In
          </p>
          <p className="text-coral text-xl sm:text-2xl font-black tracking-tight tabular-nums drop-shadow-sm">
            03 : 18 : 45
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
