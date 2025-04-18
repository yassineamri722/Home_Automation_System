// src/components/DoorStatus.tsx
import React from "react";
import { DoorOpen, DoorClosed } from "lucide-react";

interface DoorStatusProps {
  isOpen: boolean;
}

const DoorStatus: React.FC<DoorStatusProps> = ({ isOpen }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
      {isOpen ? (
        <DoorOpen className="w-8 h-8 text-green-500" />
      ) : (
        <DoorClosed className="w-8 h-8 text-red-500" />
      )}
      <div>
        <p className="text-sm text-gray-500">Door Status</p>
        <p className="text-xl font-bold">
          {isOpen ? "Opened" : "Closed"}
        </p>
      </div>
    </div>
  );
};

export default DoorStatus;
