import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, buttonText, theme }) => (
  <div
    className={`p-6 rounded-lg ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
    }`}
  >
    <h3 className="text-sm font-semibold mb-2">{title}</h3>
    <h2 className="text-2xl font-bold mb-4">{description}</h2>
    <p className="mb-6 text-sm">{buttonText}</p>
    <button
      className={`px-4 py-2 rounded ${
        theme === "dark" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      BACA SELENGKAPNYA
    </button>
  </div>
);

const FeatureItem = ({ number, title, description }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">
      {number}. {title}
    </h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const RulesPegunungan = () => {
  const navigate = useNavigate();

  const handleDaftar = () => {
    navigate("/Daftar");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Rules Pendaki</h1>
        <p className="text-gray-600">
          Informasi lengkap mengenai aturan dan hal hal yang perlu di tahu
          mengenai gunung ini
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
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
          <span className="mt-2 text-sm font-semibold text-black">
            Rules
          </span>
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
          <span className="mt-2 text-sm font-semibold text-gray-500">Profil</span>
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

      <div className="grid md:grid-cols-2 gap-8">
        <Card
          title="ATURAN UMUM"
          description="PENDAKIAN BERSIH"
          buttonText="Untuk menjaga kebersihan alam gunung bawakaraeng dibuat kan aturan yang harus patuhi oleh para pendaki"
          theme="dark"
        />

        <div className="space-y-6">
          <FeatureItem
            number="1"
            title="Wajib membawa foto kopi KTP"
            description="identitas pengguna agar dapat di tau id dan sebagainya"
          />
          <FeatureItem
            number="2"
            title="Dilarang membuang sampah sembarangan"
            description="Dilarang keras mengotori seluruh area persekitaran gunung bawakaraeng"
          />
          <FeatureItem
            number="3"
            title="Dilarang mengganggu habitat satwa dan flora"
            description="Dilarang Menganggu kelestarian alam gunung"
          />
        </div>

        <div className="space-y-6">
          <FeatureItem
            number="-"
            title="DI BLACKLIST DI JALUR PENDAKIAN GUNUNG"
            description="tidak di izin kan untuk menaiki gunung lagi"
          />
          <FeatureItem
            number="-"
            title="di berikan denda penagguhan"
            description="untuk yang melanggar akan di berikan denda sekitar 1000.000 juta hingga 5.000.000 juta"
          />
          <FeatureItem
            number="-"
            title="Hukuman Sosial"
            description="akan diberikan hukuman sosial berupa bakti sosial ke pihak gunung"
          />
        </div>

        <Card
          title="KONSUKUENSI DAN DENDA"
          description="HUKUMAN YANG DI DAPAT JIKA MELANNGAR"
          buttonText="hukuman yang di dapat bagi para pendaki yang melanggar aturan/rules"
          theme="dark"
        />
      </div>
      <button
        onClick={handleDaftar}
        className="mt-[3em] py-2 px-4 border border-blue-950 rounded-3xl"
      >
        Daftar Pendakian
      </button>
    </div>
  );
};

export default RulesPegunungan;
