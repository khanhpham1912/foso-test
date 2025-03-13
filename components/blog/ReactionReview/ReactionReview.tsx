"use client";

import { useState } from "react";

const reactions = [
  { id: 1, emoji: "👍", label: "Hữu ích" },
  { id: 2, emoji: "💚", label: "Yêu thích" },
  { id: 3, emoji: "🤩", label: "Thú vị" },
  { id: 4, emoji: "😲", label: "Bất ngờ" },
  { id: 5, emoji: "🥱", label: "Nhàm chán" },
  { id: 6, emoji: "😡", label: "Tức giận" },
];

export const ReactionReview = () => {
  const [selectedReaction, setSelectedReaction] = useState<number>();
  const [counts, setCounts] = useState<Record<number, number>>({
    1: 1,
    2: 2,
    3: 0,
    4: 1,
    5: 0,
    6: 0,
  });

  const handleReaction = (id: number) => {
    setSelectedReaction(id);
    setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold">Bạn thấy bài viết như thế nào?</h3>
      <p className="text-gray-500">
        {Object.values(counts).reduce((a, b) => a + b, 0)} phản hồi
      </p>
      <div className="mt-4 flex justify-center gap-4">
        {reactions.map((reaction) => (
          <button
            key={reaction.id}
            onClick={() => handleReaction(reaction.id)}
            className={`flex flex-col items-center px-4 py-2 border rounded-lg transition-all cursor-pointer ${
              selectedReaction === reaction.id
                ? "border-primary"
                : "border-transparent"
            }`}
          >
            <span className="text-2xl">{reaction.emoji}</span>
            <span className="font-semibold text-sm">{counts[reaction.id]}</span>
            <span className="text-xs text-gray-500">{reaction.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
