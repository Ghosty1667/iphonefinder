import { useState, useEffect } from "react";
import { phoneDatabase } from "../data/phoneDatabase";

interface FeatureOption {
  value: string;
  label: string;
}

interface PhoneFeature {
  id: string;
  label: string;
  options: FeatureOption[];
}

interface PhoneIdentifierProps {
  setIdentifiedPhone: (phone: string) => void;
  setConfidence: (confidence: number) => void;
}

function PhoneIdentifier({
  setIdentifiedPhone,
  setConfidence,
}: PhoneIdentifierProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<
    Record<string, string>
  >({});

  const features: PhoneFeature[] = [
    {
      id: "size",
      label: "Screen Size",
      options: [
        { value: "not-sure", label: "Not sure" },
        { value: "4.7 inches", label: "4.7 inches" },
        { value: "5.4 inches", label: "5.4 inches" },
        { value: "5.5 inches", label: "5.5 inches" },
        { value: "5.8 inches", label: "5.8 inches" },
        { value: "6.1 inches", label: "6.1 inches" },
        { value: "6.3 inches", label: "6.3 inches" },
        { value: "6.5 inches", label: "6.5 inches" },
        { value: "6.7 inches", label: "6.7 inches" },
      ],
    },
    {
      id: "homeButton",
      label: "Home Button",
      options: [
        { value: "not-sure", label: "Not sure" },
        { value: "Physical button", label: "Physical button" },
        { value: "No home button", label: "No home button" },
      ],
    },
    {
      id: "cameras",
      label: "Rear Camera Count",
      options: [
        { value: "not-sure", label: "Not sure" },
        { value: "Single camera", label: "Single camera" },
        { value: "Dual cameras", label: "Dual cameras" },
        { value: "Triple cameras", label: "Triple cameras" },
        { value: "Quad cameras", label: "Quad cameras" },
      ],
    },
    {
      id: "notch",
      label: "Top Notch/Island",
      options: [
        { value: "not-sure", label: "Not sure" },
        { value: "No notch", label: "No notch" },
        { value: "Wide notch", label: "Wide notch" },
        { value: "Dynamic Island", label: "Dynamic Island" },
      ],
    },
    {
      id: "charging",
      label: "Charging Port",
      options: [
        { value: "not-sure", label: "Not sure" },
        { value: "Lightning port", label: "Lightning" },
        { value: "USB-C port", label: "Usb-C" },
      ],
    },
    {
      id: "material",
      label: "Back Material",
      options: [
        { value: "not-sure", label: "Not sure" },
        { value: "Aluminum", label: "Aluminum" },
        { value: "Glass", label: "Glass" },
      ],
    },
  ];

  useEffect(() => {
    if (Object.keys(selectedFeatures).length > 0) {
      identifyPhone();
    }
  }, [selectedFeatures]);

  const handleSliderChange = (
    featureId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = parseInt(event.target.value);
    const feature = features.find((f) => f.id === featureId);
    if (feature) {
      const selectedOption = feature.options[index].value;
      setSelectedFeatures((prev) => ({
        ...prev,
        [featureId]: selectedOption,
      }));
    }
  };

  const getSelectedIndex = (featureId: string): number => {
    const feature = features.find((f) => f.id === featureId);
    if (!feature) return 0;

    const selectedValue = selectedFeatures[featureId];
    if (!selectedValue) return 0;

    const index = feature.options.findIndex(
      (opt) => opt.value === selectedValue
    );
    return index >= 0 ? index : 0;
  };

  const identifyPhone = () => {
    let bestMatch = "";
    let highestScore = 0;
    let maxPossibleScore = 0;

    // Count features that are not "Not sure"
    const activeFeatureCount = Object.values(selectedFeatures).filter(
      (value) => !value.includes("not-sure")
    ).length;

    if (activeFeatureCount === 0) {
      setIdentifiedPhone("");
      setConfidence(0);
      return;
    }

    // Maximum possible score is the number of features that are not "Not sure"
    maxPossibleScore = activeFeatureCount;

    for (const phone of phoneDatabase) {
      let score = 0;

      for (const [featureId, selectedValue] of Object.entries(
        selectedFeatures
      )) {
        // Skip "Not sure" responses
        if (selectedValue.includes("not-sure")) {
          continue;
        }

        // Check if the phone has this feature and if it matches the selected value
        if (phone.features[featureId] === selectedValue) {
          score++;
        }
      }

      const normalizedScore = (score / maxPossibleScore) * 100;

      if (normalizedScore > highestScore) {
        highestScore = normalizedScore;
        bestMatch = phone.name;
      }
    }

    if (bestMatch) {
      setIdentifiedPhone(bestMatch);
      setConfidence(Math.round(highestScore));
    } else {
      setIdentifiedPhone("Unknown iPhone model");
      setConfidence(0);
    }
  };

  const resetSelections = () => {
    setSelectedFeatures({});
    setIdentifiedPhone("");
    setConfidence(0);
  };

  return (
<div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-10">
        {features.map((feature) => {
          const optionCount = feature.options.length;
          const selectedIndex = getSelectedIndex(feature.id);

          return (
            <div key={feature.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700 font-medium">
                  {feature.label}
                </label>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-full">
                  {feature.options[selectedIndex].label}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max={optionCount - 1}
                    value={selectedIndex}
                    onChange={(e) => handleSliderChange(feature.id, e)}
                    className="w-full h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full appearance-none cursor-pointer slider-modern"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #6366f1 ${(selectedIndex / (optionCount - 1)) * 100}%, #e5e7eb ${(selectedIndex / (optionCount - 1)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>

                {/* Tick marks */}
                <div className="relative w-full h-2">
                  {feature.options.map((option, index) => {
                    const position = (index / (optionCount - 1)) * 100;
                    return (
                      <div
                        key={index}
                        className={`absolute top-0 w-1 h-2 -ml-0.5 rounded-full transition-all duration-200 ${
                          index === selectedIndex
                            ? "bg-gradient-to-b from-blue-500 to-indigo-600 scale-125"
                            : "bg-gray-400"
                        }`}
                        style={{ left: `${position}%` }}
                      ></div>
                    );
                  })}
                </div>

                {/* Labels */}
                <div className="relative w-full text-xs text-gray-600">
                  {feature.options.map((option, index) => {
                    const shouldShow = optionCount <= 5 || index === 0 || index === optionCount - 1 || index === selectedIndex;
                    if (!shouldShow) return null;

                    const position = (index / (optionCount - 1)) * 100;
                    return (
                      <div
                        key={index}
                        className={`absolute transform -translate-x-1/2 transition-all duration-200 ${
                          index === selectedIndex
                            ? "text-blue-600 font-semibold scale-105"
                            : "text-gray-500"
                        }`}
                        style={{ left: `${position}%` }}
                      >
                        {option.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-6 border-t border-gray-200">
        <button
          onClick={resetSelections}
          className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-medium rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}

export default PhoneIdentifier;
