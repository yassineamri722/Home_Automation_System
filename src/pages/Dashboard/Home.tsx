import React, { useState, useEffect } from "react";
import axios from "axios";
import RLStatus from "../../components/smartHome/RLStatus";
import FaceDetected from "../../components/smartHome/FaceDetected";
import TemperatureWidget from "../../components/smartHome/TemperatureWidget";
import SummaryWidgets from "../../components/smartHome/SummaryWidgets";
import HumidityWidget from "../../components/smartHome/HumidityWidget";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  const [indoorTemp, setIndoorTemp] = useState<number | null>(null);
  const [outdoorTemp, setOutdoorTemp] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [acAction, setAcAction] = useState<number | null>(null);
  const [windowAction, setWindowAction] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const detectedFaces = [
    {
      imageUrl: "face1.jpg",
      name: "Alice",
      date: "2025-04-15 10:30 AM",
    },
    {
      imageUrl: "face2.jpg",
      name: "Bob",
      date: "2025-04-15 09:50 AM",
    },
    {
      imageUrl: "face3.jpg",
      name: "Unknown",
      date: "2025-04-15 08:45 AM",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/get-action", {
          state: [25.0, 0, 1],
        });

        const {
          indoor_temperature = 0,
          outdoor_temperature = 0,
          humidity: fetchedHumidity = 0,
          action = {},
        } = response.data || {};

        setIndoorTemp(indoor_temperature);
        setOutdoorTemp(outdoor_temperature);
        setHumidity(fetchedHumidity);
        setAcAction(action.ac ?? null);
        setWindowAction(action.window ?? null);
      } catch (error) {
        setError("Error fetching data from the API.");
        console.error("API Error:", error.response || error.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="error">{error}</div>;
  if (
    indoorTemp === null ||
    outdoorTemp === null ||
    humidity === null ||
    acAction === null ||
    windowAction === null
  ) {
    return <div className="loading">Loading data...</div>;
  }

  // Optional: Derive energy saving status (example logic)
  const energySave = acAction === 0 && windowAction === 1;

  return (
    <>
      <PageMeta
        title="Smart Home Dashboard"
        description="Monitor and control your smart home features like temperature, humidity, RL status, face detection, and more!"
      />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Left Section (Main Widgets) */}
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <RLStatus
            ac={acAction}
            window={windowAction}
            energySave={energySave}
          />
          <FaceDetected faces={detectedFaces} />
          <TemperatureWidget
            indoorTemp={indoorTemp}
            outdoorTemp={outdoorTemp}
          />
          <HumidityWidget humidity={humidity} />
        </div>

        {/* Right Section (Summary Widgets) */}
        <div className="col-span-12 xl:col-span-5">
          <SummaryWidgets />
        </div>
      </div>
    </>
  );
}
