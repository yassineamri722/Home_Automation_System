
import React, { useEffect, useState } from "react";

interface FaceLog {
  timestamp: string;
  imageUrl: string;
  personName: string;
  status: "AUTHORIZED" | "UNAUTHORIZED";
}

const generateFakeLog = (): FaceLog => {
  const now = new Date().toISOString();
  const authorized = Math.random() < 0.7;
  return {
    timestamp: now,
    imageUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70 + 1)}`, // fake avatar
    personName: authorized ? "John Doe" : "Unknown",
    status: authorized ? "AUTHORIZED" : "UNAUTHORIZED",
  };
};

const FaceRecognitionLogs: React.FC = () => {
  const [logs, setLogs] = useState<FaceLog[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = generateFakeLog();
      setLogs(prev => [newLog, ...prev].slice(0, 20));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white rounded-2xl shadow max-h-[600px] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Face Recognition Logs</h2>
      <div className="space-y-4">
        {logs.map((log, index) => (
          <div key={index} className="flex items-center gap-4 border-b pb-4">
            <img
              src={log.imageUrl}
              alt="Captured face"
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <p className="font-semibold">{log.personName}</p>
              <p className="text-sm text-gray-500">
                {new Date(log.timestamp).toLocaleString()}
              </p>
              <span
                className={`text-xs font-semibold ${
                  log.status === "AUTHORIZED"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {log.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognitionLogs;
