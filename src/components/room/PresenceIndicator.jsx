// src/components/PresenceIndicator.jsx
import React from "react";
import { UserCheck, UserX } from "lucide-react";

const PresenceIndicator = ({ isPresent }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
      {isPresent ? (
        <UserCheck className="w-8 h-8 text-green-500" />
      ) : (
        <UserX className="w-8 h-8 text-gray-400" />
      )}
      <div>
        <p className="text-sm text-gray-500">Presence</p>
        <p className="text-xl font-bold">{isPresent ? "Person Detected" : "No one detected"}</p>
      </div>
    </div>
  );
};

export default PresenceIndicator;
