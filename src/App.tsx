import { useState } from "react";
import PhoneIdentifier from "./components/PhoneIdentifier";
import ResultDisplay from "./components/ResultsDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [identifiedPhone, setIdentifiedPhone] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number>(0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            iPhone Identifier Tool
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Slide to select the physical features of the iPhone you're looking
            at. This tool helps identify iPhone models newer than iPhone 6.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Select Physical Features
              </h3>
              <PhoneIdentifier
                setIdentifiedPhone={setIdentifiedPhone}
                setConfidence={setConfidence}
              />
            </div>

            <div className="lg:col-span-1">
              {identifiedPhone ? (
                <ResultDisplay
                  phoneModel={identifiedPhone}
                  confidence={confidence}
                />
              ) : (
                <div className="h-full flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-500 text-center">
                    Adjust the sliders to identify your iPhone model
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
