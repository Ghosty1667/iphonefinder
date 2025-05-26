import { useState } from "react";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            iPhone Identifier Tool - Built with modern web technologies
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
