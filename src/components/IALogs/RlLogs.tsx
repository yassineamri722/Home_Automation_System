
import React, { useEffect, useState } from "react";

interface RLActionLog {
  timestamp: string;
  acStatus: "ON" | "OFF";
  acTemp: number;
  windowStatus: "OPEN" | "CLOSED";
}

const generateRandomAction = (): RLActionLog => {
  const now = new Date().toISOString();
  const acOn = Math.random() < 0.5;
  return {
    timestamp: now,
    acStatus: acOn ? "ON" : "OFF",
    acTemp: acOn ? Math.floor(Math.random() * 6 + 20) : 0,
    windowStatus: acOn ? "CLOSED" : "OPEN",
  };
};

const RLLogs: React.FC = () => {
  const [logs, setLogs] = useState<RLActionLog[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = generateRandomAction();
      setLogs(prev => [newLog, ...prev].slice(0, 20));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white rounded-2xl shadow max-h-[500px] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Reinforcement Learning Logs</h2>
      {logs.length === 0 ? (
        <p className="text-gray-500 text-sm">Waiting for RL actions...</p>
      ) : (
        logs.map((log, idx) => (
          <div key={idx} className="mb-3 border-b pb-2">
            <p className="text-sm text-gray-600">
              <strong>{new Date(log.timestamp).toLocaleTimeString()}</strong>
            </p>
            <p className="text-sm">
              AC: <span className={log.acStatus === "ON" ? "text-blue-600" : "text-gray-500"}>
                {log.acStatus}
              </span>{" "}
              {log.acStatus === "ON" && `(Temp: ${log.acTemp}°C)`}
            </p>
            <p className="text-sm">
              Window:{" "}
              <span className={log.windowStatus === "OPEN" ? "text-green-600" : "text-gray-600"}>
                {log.windowStatus}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default RLLogs;
