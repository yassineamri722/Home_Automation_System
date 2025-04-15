// src/components/TemperatureDisplay.jsx
import React from "react";
import { ThermometerSun } from "lucide-react";

const TemperatureDisplay = ({ temperature }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow">
      <ThermometerSun className="w-8 h-8 text-red-500" />
      <div>
        <p className="text-sm text-gray-500">Current Temperature</p>
        <p className="text-xl font-bold">{temperature}°C</p>
      </div>
    </div>
  );
};

export default TemperatureDisplay;
