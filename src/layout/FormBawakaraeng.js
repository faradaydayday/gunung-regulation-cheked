import React from "react";
import { useNavigate } from "react-router-dom";
import Confirm from "../views/Confirm";

export default function FormBawakaraeng() {
  const navigasi = useNavigate();

  // Ubah rute ke "/Confirm"
  const handleConfirm = () => {
    navigasi("/Confirm");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center">
          <div className="p-3 bg-gray-300 text-white rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zM6 21v-2c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v2H6z"
              />
            </svg>
          </div>
          <span className="mt-2 text-sm font-semibold text-gray-500">
            Rules
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 bg-black text-white rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zM6 21v-2c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v2H6z"
              />
            </svg>
          </div>
          <span className="mt-2 text-sm font-semibold text-black">Profil</span>
        </div>

        <div className="flex items-center">
          <div className="w-16 h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="p-3 bg-gray-300 text-white rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zM6 21v-2c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v2H6z"
              />
            </svg>
          </div>
          <span className="mt-2 text-sm font-semibold text-gray-500">
            Konfirmasi
          </span>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full sm:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Halo Sobat Gunung Daftar dulu yuk
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Nama Kamu
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nama Kamu"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Masukkan email kamu"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-2 text-sm">
            <label htmlFor="terms" className="font-medium text-gray-700">
              saya setuju dengan{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                aturan dan ketentuan yang ada
              </a>
            </label>
          </div>
        </div>

        <div className="text-center">
          <button
            type="button"
            className="w-full bg-black text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            onClick={handleConfirm}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
