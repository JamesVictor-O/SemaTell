import React from "react";
import { Menu, User as UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { User } from "../../types";

interface HeaderProps {
  isLoggedIn: boolean;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  user,
  onLogin,
  onLogout,
  onNavigateHome,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 md:px-6">
        <button
          type="button"
          className="flex items-center gap-3 cursor-pointer focus-visible:outline-none"
          onClick={onNavigateHome}
        >
          <Image
            src="/logo.png"
            alt="Prophet logo"
            width={40}
            height={40}
            className="h-10 w-auto rounded-md bg-white/5 p-1 shadow-sm"
          />
          <span className="text-lg font-semibold tracking-tight text-white">
            SemaTell
          </span>
        </button>

        <div className="flex-1" />

        <div className="flex items-center gap-4">
          {isLoggedIn && user ? (
            <div className="hidden md:flex items-center gap-4 mr-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-gray-400">Balance</p>
                <p className="text-sm font-bold text-white">
                  ${user.balance.toLocaleString()}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-linear-to-tr from-primary to-purple-500 flex items-center justify-center border border-white/20">
                <UserIcon className="h-4 w-4 text-white" />
              </div>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button variant="ghost" onClick={onLogin}>
              Login
            </Button>
          )}
          <button className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
