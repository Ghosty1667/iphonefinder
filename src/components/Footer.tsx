import { useState } from "react";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            iPhone Identifier Tool &copy; {new Date().getFullYear()}
          </p>
          <div className="flex justify-center items-center mt-1 space-x-4">
            <p className="text-xs">
              This tool is for educational purposes only and not affiliated with
              Apple Inc.
            </p>
            <button
              onClick={openModal}
              className="text-xs text-blue-300 hover:text-blue-200 underline"
            >
              How to Use
            </button>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full animate-fade-in">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-xl font-bold text-gray-800">
                How to Use This Tool
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>
                  Move each slider to select the physical feature that matches
                  the iPhone you're examining
                </li>
                <li>
                  The tool analyzes your selections in real-time and provides
                  the most likely iPhone model
                </li>
                <li>
                  A confidence percentage tells you how certain the
                  identification is
                </li>
                <li>Select "Not sure" for any features you can't identify</li>
              </ol>
              <p className="mt-4 text-sm text-gray-500">
                This tool is designed to help identify iPhones from iPhone 6s
                through iPhone 16 series based on their physical
                characteristics.
              </p>
            </div>

            <div className="border-t p-4 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
