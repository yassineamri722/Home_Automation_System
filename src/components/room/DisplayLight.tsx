import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";

type Props = {
  initialState?: boolean;
};

const DisplayLight = ({ initialState = true }: Props) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggleLight = () => {
    setIsOn((prev) => !prev);
    // Tu peux aussi envoyer une requête au backend ici si tu veux
  };

  return (
    <div className="p-4 border rounded-xl flex flex-col items-center shadow-md">
      <FaLightbulb
        className={`text-6xl mb-2 ${isOn ? "text-yellow-400" : "text-gray-400"}`}
      />
      <p className="text-lg font-semibold">
        Light is {isOn ? "ON" : "OFF"}
      </p>
      <button
        onClick={toggleLight}
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Turn {isOn ? "Off" : "On"}
      </button>
    </div>
  );
};

export default DisplayLight;
