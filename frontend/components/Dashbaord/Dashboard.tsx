import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  LineChart,
  Users,
  LineChartIcon,
  Flame,
  Shield,
} from "lucide-react";
import TopBar from "../Home/TopBar";
import ProfileHeader from "../Home/ProfileHeader";
import StatRow from "../Home/StatRow";
import Tabs from "../Home/Tabs";
import PredictionCard from "./PredictionCard";
import BottomNav from "./BottomNav";
import type { Prediction, UserStats } from "../../types";

const mockUser: UserStats = {
  name: "SemaTell Oracle",
  avatar:
    "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800",
  accuracy: 72,
  league: "Global",
  tier: "Gold",
  balance: 24500,
  streak: 5,
  pendingDuels: 3,
};

const sidebarNav = [
  {
    href: "/dashboard",
    icon: <Home className="h-4 w-4" />,
    label: "Home",
  },
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

const mockPredictions: Prediction[] = [
  {
    id: "1",
    question: "Will the next Afrobeats album from Ayra Starr debut at #1?",
    image:
      "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
    userPrediction: "YES",
    stake: 1200,
    currentPrice: 0.64,
    livePL: 320,
    potentialPayout: 3600,
  },
  {
    id: "2",
    question: "Will a Nigerian film win a major international award this year?",
    image:
      "https://images.pexels.com/photos/799133/pexels-photo-799133.jpeg?auto=compress&cs=tinysrgb&w=1200",
    userPrediction: "YES",
    stake: 800,
    currentPrice: 0.48,
    livePL: -120,
    potentialPayout: 2200,
  },
];

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"active" | "wins">("active");

  const displayedPredictions =
    activeTab === "active" ? mockPredictions : mockPredictions.slice(0, 1);

  return (
    <div className="relative min-h-screen bg-background-dark text-white">
      <div className="mx-auto flex w-full max-w-6xl gap-4 px-4 pb-24 pt-4 md:pb-10">
        {/* Desktop sidebar */}
        <aside className="sticky top-4 hidden h-[calc(100vh-2rem)] w-56 flex-col gap-4 md:flex">
          <div className="glassmorphism flex flex-col gap-3 rounded-2xl border border-primary/10 p-4">
            <nav className="flex flex-col gap-1">
              {sidebarNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    item.href === "/dashboard"
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
        <div className="flex min-h-screen flex-1 flex-col gap-4">
          <TopBar />

          <div className="grid gap-4 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] md:items-start">
            {/* Left: predictions / markets */}
            <section className="order-2 flex flex-col gap-4 md:order-1">
              <Tabs activeTab={activeTab} onChange={setActiveTab} />

              <div className="flex flex-col gap-4">
                {displayedPredictions.map((prediction) => (
                  <PredictionCard key={prediction.id} prediction={prediction} />
                ))}
              </div>
            </section>

            {/* Right: profile / stats */}
            <aside className="order-1 flex flex-col gap-4 md:order-2">
              <ProfileHeader user={mockUser} />

              <div className="flex flex-col gap-3">
                <StatRow
                  icon={<LineChartIcon className="h-5 w-5" />}
                  label="Win Rate"
                  value={`${mockUser.accuracy}%`}
                />
                <StatRow
                  icon={<Flame className="h-5 w-5" />}
                  label="Winning Streak"
                  value={`${mockUser.streak} markets`}
                />
                <StatRow
                  icon={<Shield className="h-5 w-5" />}
                  label="Pending Duels"
                  value={`${mockUser.pendingDuels}`}
                />
              </div>
            </aside>
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
