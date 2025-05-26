import { useState, useEffect } from "react";
import { phoneDatabase } from "../data/phoneDatabase";

interface ResultDisplayProps {
  phoneModel: string;
  confidence: number;
}

function ResultDisplay({ phoneModel, confidence }: ResultDisplayProps) {
  const [phoneDetails, setPhoneDetails] = useState<any>(null);

  useEffect(() => {
    if (phoneModel) {
      const details = phoneDatabase.find((phone) => phone.name === phoneModel);
      if (details) {
        setPhoneDetails(details);
      }
    }
  }, [phoneModel]);

  if (!phoneModel) return null;

  return (
<div className="backdrop-blur-sm bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200/50 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
          Identification Result
        </h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <p className="text-2xl font-bold text-gray-800 mb-1">{phoneModel}</p>
          {phoneDetails && (
            <p className="text-gray-600 text-sm">
              Released in {phoneDetails.releaseYear}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-700">Match Confidence</p>
            <span className="text-sm font-semibold text-blue-600">{confidence}%</span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-700 ease-out shadow-sm"
              style={{ width: `${confidence}%` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40"></div>
          </div>
        </div>

        {phoneDetails && (
          <div className="grid grid-cols-1 gap-4 mt-6">
            {[
              { label: "Screen Size", value: phoneDetails.features.size },
              { label: "Home Button", value: phoneDetails.features.homeButton },
              { label: "Camera Setup", value: phoneDetails.features.cameras },
              { label: "Notch Design", value: phoneDetails.features.notch },
              { label: "Charging Port", value: phoneDetails.features.charging },
              { label: "Back Material", value: phoneDetails.features.material }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center py-3 px-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50"
              >
                <p className="font-medium text-gray-600 text-sm">{item.label}</p>
                <p className="font-semibold text-gray-800 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default ResultDisplay;
