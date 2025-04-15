// src/components/smartHome/HumidityWidget.jsx
import React, { useState, useEffect } from "react";
import { FaTint } from "react-icons/fa"; // Import a raindrop icon for humidity
import axios from "axios"; // Import axios for making API calls

const HumidityWidget = () => {
  const [humidity, setHumidity] = useState(null); // State to store humidity value
  const [error, setError] = useState(null); // State for error handling

  // Function to determine humidity level and color
  const getHumidityLevel = (humidity) => {
    if (humidity > 70) return "High Humidity";
    if (humidity > 40) return "Moderate Humidity";
    return "Low Humidity";
  };

  // Fetch data from FastAPI when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a POST request to the FastAPI backend to get the current state
        const response = await axios.post("http://127.0.0.1:8000/get-action", {
          state: [25.0, 0, 1], // Provide your appropriate state here
        });

        // Extract the humidity data from the response
        const { humidity } = response.data;
        setHumidity(humidity); // Update the humidity state
      } catch (error) {
        setError("Error fetching data from the API.");
        console.error("API Error:", error.response?.data || error.message); // More detailed error logging
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h3 className="text-lg font-semibold">Humidity</h3>
      <div className="flex items-center justify-between space-x-6">
        <div>
          {humidity != null ? (
            <>
              <p className="text-sm">{getHumidityLevel(humidity)}</p>
              <p className="text-sm">Humidity: {humidity}%</p>
            </>
          ) : (
            <p className="text-sm">Loading...</p>
          )}
        </div>
        <div className="text-4xl">
          <FaTint className="text-blue-500" /> {/* Display humidity icon */}
        </div>
      </div>
    </div>
  );
};

export default HumidityWidget;
