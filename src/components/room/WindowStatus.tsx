// src/components/WindowStatus.tsx
import React from "react";
import { SquareArrowOutUpRight, Square } from "lucide-react";

interface WindowStatusProps {
    isOpen: boolean;
}

const WindowStatus: React.FC<WindowStatusProps> = ({ isOpen }) => {
    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
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
    );
};

export default WindowStatus;
