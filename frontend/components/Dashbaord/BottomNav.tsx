import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LineChart, Users, Plus, User } from "lucide-react";
import CreateMarketModal from "../Modals/CreateMarketModal";

const BottomNav: React.FC = () => {
  const pathname = usePathname();
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const navItems = [
    {
      href: "/dashboard",
      icon: <Home className="h-5 w-5" />,
      label: "Home",
    },
    {
      href: "/markets",
      icon: <LineChart className="h-5 w-5" />,
      label: "Markets",
    },
    {
      href: "/leagues",
      icon: <Users className="h-5 w-5" />,
      label: "Leagues",
    },
    {
      href: "/Profile",
      icon: <User className="h-5 w-5" />,
      label: "Profile",
    },
  ];

  return (
    <>
      {/* Bottom navigation */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/10 bg-background-dark/95 backdrop-blur-xl">
        <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-6 pb-2">
          {/* Left nav items */}
          <div className="flex flex-1 items-center justify-start gap-6 max-w-[40%]">
            {navItems.slice(0, 1).map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center gap-1 text-xs font-medium uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-white/40 hover:text-primary/80"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Center create button */}
          <button
            type="button"
            onClick={() => setIsCreateOpen(true)}
            className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-4 items-center justify-center rounded-full bg-primary p-3 text-background-dark shadow-lg shadow-primary/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background-dark text-primary">
              <Plus className="h-6 w-6" />
            </div>
          </button>

          {/* Right nav items */}
          <div className="flex flex-1 items-center justify-end gap-6 max-w-[40%]">
            {navItems.slice(1).map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center gap-1 text-xs font-medium uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-white/40 hover:text-primary/80"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </footer>

      {/* Create Market Modal */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center">
          <div
            className="absolute inset-0"
            onClick={() => setIsCreateOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md px-2 pb-4 sm:px-0">
            <CreateMarketModal onClose={() => setIsCreateOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default BottomNav;
