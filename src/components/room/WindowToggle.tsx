import React, { useState } from "react";
import { SquareArrowOutUpRight, Square } from "lucide-react";

const WindowToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen(prev => !prev);
    // Ici tu peux aussi appeler ton backend si tu veux persister l'état
    // ex.: fetch("/api/toggle-window", { method: "POST", body: JSON.stringify({ open: !isOpen }) })
  };

  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow">
      <div className="flex items-center gap-4">
        {isOpen ? (
          <SquareArrowOutUpRight className="w-8 h-8 text-blue-500" />
        ) : (
          <Square className="w-8 h-8 text-gray-500" />
        )}
        <div>
          <p className="text-sm text-gray-500">Window Status</p>
          <p className="text-xl font-bold">
            {isOpen ? "Opened" : "Closed"}
          </p>
        </div>
      </div>
      <button
        onClick={toggleWindow}
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {isOpen ? "Close Window" : "Open Window"}
      </button>
    </div>
  );
};

export default WindowToggle;
