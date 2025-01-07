import React from "react";
import { RiCloseLine } from "react-icons/ri";

interface LoginModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ setIsModalOpen }) => {
  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-20 z-0"
        onClick={() => setIsModalOpen(false)}
      />
      {/* Centering Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white rounded-lg shadow-lg relative p-6 max-w-sm w-auto">
          {/* Modal Header */}
          <div className="bg-white rounded-t-lg">
            <h5 className="text-lg font-semibold text-gray-800 text-center mb-4">Login</h5>
          </div>
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-800 p-1 rounded-full hover:bg-gray-200 transition"
            onClick={() => setIsModalOpen(false)}
          >
            <RiCloseLine className="text-2xl" />
          </button>
          {/* Modal Content */}
          <div className="text-sm text-gray-800 text-center space-y-4">
            <div>
              <h3>Email</h3>
              <input type="email" className="border border-black w-full p-2 rounded" />
            </div>
            <div>
              <h3>Password</h3>
              <input type="password" className="border border-black w-full p-2 rounded" />
            </div>
          </div>
          {/* Modal Actions */}
          <div className="mt-4 flex justify-around items-center">
            <button
              className="px-4 py-2 bg-teal-400 text-white rounded-lg text-sm hover:bg-teal-500 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Log in
            </button>
            <button
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm hover:bg-gray-200 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
