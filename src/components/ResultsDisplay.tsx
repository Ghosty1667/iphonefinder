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
    <div className="mt-8 p-4 border border-blue-200 bg-blue-50 rounded-lg">
      <h3 className="text-xl font-bold text-blue-800">Identification Result</h3>
      <div className="mt-4">
        <p className="text-2xl font-bold text-blue-600">{phoneModel}</p>
        {phoneDetails && (
          <p className="text-gray-600 mt-1">
            Released: {phoneDetails.releaseYear}
          </p>
        )}

        <div className="mt-6">
          <p className="font-medium mb-2">Match Confidence</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${confidence}%` }}
            >
              <span className="text-xs text-white pl-2 flex items-center h-full">
                {confidence}%
              </span>
            </div>
          </div>
        </div>

        {phoneDetails && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-t pt-3">
              <p className="font-medium text-gray-700">Screen Size</p>
              <p className="text-blue-600">{phoneDetails.features.size}</p>
            </div>
            <div className="border-t pt-3">
              <p className="font-medium text-gray-700">Home Button</p>
              <p className="text-blue-600">
                {phoneDetails.features.homeButton}
              </p>
            </div>
            <div className="border-t pt-3">
              <p className="font-medium text-gray-700">Camera Setup</p>
              <p className="text-blue-600">{phoneDetails.features.cameras}</p>
            </div>
            <div className="border-t pt-3">
              <p className="font-medium text-gray-700">Notch Design</p>
              <p className="text-blue-600">{phoneDetails.features.notch}</p>
            </div>
            <div className="border-t pt-3">
              <p className="font-medium text-gray-700">Charging Port</p>
              <p className="text-blue-600">{phoneDetails.features.charging}</p>
            </div>
            <div className="border-t pt-3">
              <p className="font-medium text-gray-700">Back Material</p>
              <p className="text-blue-600">{phoneDetails.features.material}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultDisplay;
