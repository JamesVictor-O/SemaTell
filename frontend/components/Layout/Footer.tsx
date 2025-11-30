import React from "react";
import { Activity } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-2">
          <Activity className="text-primary w-6 h-6" />
          <h2 className="text-white text-lg font-bold">SemaTell</h2>
        </div>

        <div className="flex gap-8 text-gray-400">
          <a href="#" className="text-sm hover:text-primary transition-colors">
            Markets
          </a>
          <a href="#" className="text-sm hover:text-primary transition-colors">
            Leaderboard
          </a>
          <a href="#" className="text-sm hover:text-primary transition-colors">
            About
          </a>
        </div>

        <div className="flex gap-6 text-gray-400 mt-2">
          <a href="#" className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.552 0-3.922.016-5.292.076-2.439.111-3.693 1.354-3.804 3.803-.06 1.37-.076 1.74-.076 5.292s.016 3.922.076 5.292c.111 2.44 1.365 3.693 3.803 3.804 1.37.06 1.74.076 5.292.076s3.922-.016 5.292-.076c2.44-.111 3.693-1.365 3.804-3.803.06-1.37.076-1.74.076-5.292s-.016-3.922-.076-5.292c-.111-2.44-1.365-3.693-3.804-3.804-1.37-.06-1.74-.076-5.292-.076zm0 4.636a5.397 5.397 0 100 10.794 5.397 5.397 0 000-10.794zm0 8.991a3.597 3.597 0 110-7.194 3.597 3.597 0 010 7.194zm6.406-9.155a1.242 1.242 0 100 2.484 1.242 1.242 0 000-2.484z"></path>
            </svg>
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          © 2024 SemaTell Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
