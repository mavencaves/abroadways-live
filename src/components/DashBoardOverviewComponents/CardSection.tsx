import React from "react";
import type { DashboardCards } from "@/types/DashBoardTypes.ts";

interface Props {
  cards: DashboardCards;
}

const CardsSection: React.FC<Props> = ({ cards }) => {
  if (!cards) {
    return <div className="text-center text-gray-500">Loading cards...</div>;
  }

  const cardItems = [
    { title: "Total users", value: cards.totalUsers || 0 },
    { title: "New users", value: cards.newUsers || 0 },
    { title: "Active users", value: cards.activeUsers || 0 },
    { title: "Rewarded users", value: cards.rewardedUsers || 0 },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {cardItems.map((card, index) => (
        <div key={index} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md">
          <p className="text-sm text-gray-600">{card.title}</p>
          <h2 className="mt-2 text-2xl font-bold text-indigo-600">{card.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;
