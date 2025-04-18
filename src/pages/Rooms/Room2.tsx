import LiveStream from "../../components/room/LiveStream.tsx";
import TemperatureDisplay from "../../components/room/TemperatureDisplay.tsx";
import PresenceIndicator from "../../components/room/PresenceIndicator.tsx";
import DoorStatus from "../../components/room/DoorStatus.tsx";
import WindowStatus from "../../components/room/WindowStatus.tsx";

const Room2 = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Room 1 Monitoring</h1>

      <LiveStream />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TemperatureDisplay temperature={22.5} />
        <PresenceIndicator isPresent={true} />
        <DoorStatus isOpen={false} />
        <WindowStatus isOpen={true} />
      </div>
    </div>
  );
};

export default Room2;
