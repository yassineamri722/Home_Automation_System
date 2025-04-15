import React, { useState, useEffect } from "react";
import axios from "axios";

const RLStatus = () => {
  const [ac, setAc] = useState(null);
  const [window, setWindow] = useState(null);
  const [acTemp, setAcTemp] = useState(null);  // State to hold AC temperature
  const [energySave, setEnergySave] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRLStatus = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/get-action", {
          state: [25.0, 0, 1], // Same as in Home.jsx
        });

        // Extract the data from the response
        const action = response.data.action || {};
        const acValue = action.ac ?? 0;
        const windowValue = action.window ?? 0;
        const acTempValue = action.ac_temp ?? 23;  // AC temperature comes from the action object

        setAc(acValue);
        setWindow(windowValue);
        setAcTemp(acTempValue);  // Set the AC temperature
        setEnergySave(acValue === 0 && windowValue === 1);
      } catch (error) {
        setError("Error fetching RL status.");
        console.error("API Error:", error.response?.data || error.message);
      }
    };

    fetchRLStatus();
  }, []); // Empty dependency array to run only once on mount

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (ac === null || window === null || acTemp === null) {
    return <div className="loading">Loading RL status...</div>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">Reinforcement Learning Actions</h2>
      <ul className="space-y-1 text-gray-700">
        <li>
          AC:{" "}
          <span className={ac === 1 ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
            {ac === 1 ? "ON" : "OFF"}
          </span>
        </li>
        <li>
          Window:{" "}
          <span className={window === 1 ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
            {window === 1 ? "OPEN" : "CLOSED"}
          </span>
        </li>
        <li>
          AC Temperature:{" "}
          <span className="text-gray-700 font-semibold">
            {acTemp}°C
          </span>
        </li>
        <li>
          Energy Save Mode:{" "}
          <span className={energySave ? "text-green-600 font-semibold" : "text-gray-600"}>
            {energySave ? "YES" : "NO"}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RLStatus;
