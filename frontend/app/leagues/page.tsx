"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopBar from "../../components/LeaderBoard/TopBar";
import TabGroup from "../../components/LeaderBoard/TabGroup";
import Podium from "../../components/LeaderBoard/Podium";
import LeaderboardItem from "../../components/LeaderBoard/Leaderboard";
import StickyHeader from "../../components/LeaderBoard/StickyHeader";
import Footer from "../../components/LeaderBoard/Footer";
import BottomNav from "../../components/Dashbaord/BottomNav";
import { Home, LineChart, Users } from "lucide-react";
import { LEADERBOARD_DATA } from "../../Services/constants";
import type { TabOption } from "../../types";

const sidebarNav = [
  { href: "/dashboard", icon: <Home className="h-4 w-4" />, label: "Home" },
  {
    href: "/markets",
    icon: <LineChart className="h-4 w-4" />,
    label: "Markets",
  },
  {
    href: "/leagues",
    icon: <Users className="h-4 w-4" />,
    label: "Leagues",
  },
];

const LeaguesPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabOption>("My League");

  const podiumData = LEADERBOARD_DATA.slice(0, 3);
  const listData = LEADERBOARD_DATA.slice(3);

  return (
    <div className="relative h-screen overflow-hidden bg-background-dark text-white">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col gap-4 px-0 pt-0 md:flex-row md:px-4 md:pt-4 md:pb-10">
        {/* Desktop sidebar */}
        <aside className="hidden h-full w-56 flex-col gap-4 md:flex">
          <div className="glassmorphism flex flex-col gap-3 rounded-2xl border border-primary/10 p-4">
            <nav className="flex flex-col gap-1">
              {sidebarNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    item.href === "/leagues"
                      ? "bg-primary text-background-dark shadow-lg shadow-primary/20"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex h-full flex-1 flex-col overflow-y-auto">
          <div className="mx-auto w-full max-w-md md:max-w-none">
            <TopBar />
            <TabGroup selectedTab={selectedTab} onSelectTab={setSelectedTab} />

            <main className="w-full max-w-md mx-auto pb-4">
              <Podium
                first={podiumData[0]}
                second={podiumData[1]}
                third={podiumData[2]}
              />

              <StickyHeader />

              <section className="flex flex-col gap-2 px-4 pb-4 animate-in slide-in-from-bottom-10 duration-700 fade-in delay-200">
                {listData.map((user) => (
                  <LeaderboardItem key={user.rank} user={user} />
                ))}
              </section>

              <Footer />
            </main>
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
};

export default LeaguesPage;
