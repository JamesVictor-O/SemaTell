"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header as MarketsHeader } from "../../components/Market/Header";
import { FilterBar } from "../../components/Market/FilterBar";
import { MarketCard } from "../../components/Market/MarketCard";
import { DetailView } from "../../components/Market/DetailView";
import BottomNav from "../../components/Dashbaord/BottomNav";
import { Home, LineChart, Users } from "lucide-react";
import type { Category, Market } from "../../Services/types";
import { MARKETS } from "../../Services/constants";

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

const MarketsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);

  const filteredMarkets = useMemo(() => {
    if (activeCategory === "All") return MARKETS;
    return MARKETS.filter((m) => m.category === activeCategory);
  }, [activeCategory]);

  const handleMarketClick = (market: Market) => {
    setSelectedMarket(market);
  };

  const handleBack = () => {
    setSelectedMarket(null);
  };

  if (selectedMarket) {
    return <DetailView market={selectedMarket} onBack={handleBack} />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background-dark text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-0 pt-0 md:flex-row md:px-4 md:pt-4 md:pb-10">
        {/* Desktop sidebar */}
        <aside className="sticky top-4 hidden h-[calc(100vh-2rem)] w-56 flex-col gap-4 md:flex">
          <div className="glassmorphism flex flex-col gap-3 rounded-2xl border border-primary/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Navigation
            </p>
            <nav className="flex flex-col gap-1">
              {sidebarNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    item.href === "/markets"
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
        <div className="flex min-h-screen flex-1 flex-col">
          <div className="mx-auto w-full max-w-md md:max-w-none">
            <MarketsHeader />

            <div className="flex flex-1 flex-col">
              <FilterBar
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
              />

              <main className="mt-2 flex flex-col gap-4 px-4 pb-8 md:px-4">
                {filteredMarkets.length > 0 ? (
                  filteredMarkets.map((market) => (
                    <MarketCard
                      key={market.id}
                      market={market}
                      onPredict={handleMarketClick}
                      onViewDetails={handleMarketClick}
                    />
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/40">
                      No markets
                    </p>
                    <p className="text-base">
                      No markets found in{" "}
                      <span className="font-semibold">{activeCategory}</span>
                    </p>
                  </div>
                )}
              </main>
            </div>
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

export default MarketsPage;
