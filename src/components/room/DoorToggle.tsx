import React, { useState } from "react";
import { DoorOpen, DoorClosed } from "lucide-react";

const DoorToggle: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDoor = () => {
        setIsOpen((prev) => !prev);
        // Tu peux envoyer une requête au backend ici si besoin
    };

    return (
        <div className="flex flex-col gap-2 items-start p-4 bg-white rounded-2xl shadow">
            <div className="flex items-center gap-4">
                {isOpen ? (
                    <DoorOpen className="w-8 h-8 text-green-500" />
                ) : (
                    <DoorClosed className="w-8 h-8 text-red-500" />
                )}
                <div>
                    <p className="text-sm text-gray-500">Door Status</p>
                    <p className="text-xl font-bold">
                        {isOpen ? "Opened" : "Closed"}
                    </p>
                </div>
            </div>
            <button
                onClick={toggleDoor}
                className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                {isOpen ? "Close Door" : "Open Door"}
            </button>
        </div>
    );
};

export default DoorToggle;
