// src/pages/OtherPages/NotFound.tsx
import React from "react";
import LiveStream from "../../components/room/LiveStream";
import TemperatureDisplay from "../../components/room/TemperatureDisplay";
import PresenceIndicator from "../../components/room/PresenceIndicator";

const NotFound = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Room 1 Monitoring</h1>

      <LiveStream />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TemperatureDisplay temperature={22.5} />
        <PresenceIndicator isPresent={true} />
      </div>
    </div>
  );
};

export default NotFound;
