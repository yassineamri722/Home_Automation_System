// src/pages/OtherPages/NotFound.tsx
import React from "react";
import LiveStream from "../../components/room/LiveStream.tsx";
import TemperatureDisplay from "../../components/room/TemperatureDisplay.tsx";
import PresenceIndicator from "../../components/room/PresenceIndicator.tsx";

const Room2 = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Room 2 Monitoring</h1>

      <LiveStream />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TemperatureDisplay temperature={23.5} />
        <PresenceIndicator isPresent={false} />
      </div>
    </div>
  );
};

export default Room2;
