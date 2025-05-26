import { useState } from "react";
import PhoneIdentifier from "./components/PhoneIdentifier";
import ResultDisplay from "./components/ResultsDisplay";

import Footer from "./components/Footer";


function App() {
  const [identifiedPhone, setIdentifiedPhone] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number>(0);

  return (
 <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <main className="relative container mx-auto px-4 pt-6">
        <div className="backdrop-blur-sm bg-white/80 rounded-3xl shadow-2xl border border-white/50 p-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              iPhone Identifier
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Use the interactive sliders below to identify your iPhone model. 
              This tool analyzes physical features to determine iPhone models newer than iPhone 6.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature Selection Panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Physical Features
                </h2>
              </div>
              <PhoneIdentifier
                setIdentifiedPhone={setIdentifiedPhone}
                setConfidence={setConfidence}
              />
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-1">
              {identifiedPhone ? (
                <ResultDisplay
                  phoneModel={identifiedPhone}
                  confidence={confidence}
                />
              ) : (
                <div className="h-full flex items-center justify-center p-8 backdrop-blur-sm bg-gradient-to-br from-gray-50/80 to-gray-100/80 rounded-2xl border border-gray-200/50 shadow-lg">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mx-auto flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg"></div>
                    </div>
                    <p className="text-gray-500 font-medium">
                      Adjust the sliders to identify your iPhone model
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
