import React from "react";

export default function LoginCard() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Mountain Checked Login
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Hai !!! pendaki selamat datang kembali
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Akun Kamu
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nama Email mu"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
