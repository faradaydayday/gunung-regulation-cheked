import React from "react";
import Grids from "../components/Grids";
import { useNavigate } from "react-router-dom";
export default function Card() {
  const navigate = useNavigate();

  const handleRulesClick = () => {
    navigate("/Bawakaraeng");
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 lg:gap-11">
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-80 lg:w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img
              src="https://img.freepik.com/free-photo/volcano-with-mist-sunset_1150-18322.jpg?t=st=1728735140~exp=1728738740~hmac=fa68e2fdcbee9d4f3606763bb297d848d88bf64bf6c8b217ce33438dce8b4c4e&w=996"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <h6 className="font-poppins text-slate-800 text-xl font-semibold">
                Gunung Bawakaraeng
              </h6>
              <div className="flex items-center gap-1 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-slate-600 ml-1.5">4.4</span>
              </div>
            </div>
            <p className="text-slate-600 leading-normal font-light">
              Gunung Bawakaraeng di Sulawesi Selatan, setinggi 2.830 meter,
              dikenal sebagai tujuan pendakian populer dengan pemandangan indah
              dan nilai spiritual bagi suku Bugis-Makassar. Gunung ini
              menawarkan medan menantang dan hutan tropis lebat, menarik para
              petualang alam.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button
              className="font-poppins w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleRulesClick}
            >
              Rules
            </button>
          </div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-80 lg:w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img
              src="https://img.freepik.com/free-photo/mountain-forest-blue-sky_1150-10834.jpg?t=st=1728736869~exp=1728740469~hmac=0eca0c047ac5e5bc794a9e378193172a3c1d4c973a6a9480175230bfc5f164e4&w=996"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <h6 className="text-slate-800 text-xl font-semibold">
                Gunung BuluBaria
              </h6>
              <div className="flex items-center gap-1 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-slate-600 ml-1.5">4.8</span>
              </div>
            </div>
            <p className="text-slate-600 leading-normal font-light">
              Gunung Bulubaria adalah gunung di Sulawesi Selatan dengan
              ketinggian sekitar 2.872 meter. Gunung ini menawarkan pemandangan
              alam yang menawan serta menjadi tujuan populer bagi para pendaki
              yang mencari petualangan di tengah keindahan hutan tropis. Seperti
              banyak gunung di Sulawesi.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button
              className="font-poppins w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleRulesClick}
            >
              Rules
            </button>
          </div>
        </div>

        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-80 lg:w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img
              src="https://img.freepik.com/free-photo/mountainous-landscape-dusk_1150-18309.jpg?t=st=1728737302~exp=1728740902~hmac=497e513c327816639aa435c6f59c5faaf02613b2bc2b608e792c7175914a6a4e&w=996"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <h6 className="text-slate-800 text-xl font-semibold">
                Gunung Bulusarraung
              </h6>
              <div className="flex items-center gap-1 ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-slate-600 ml-1.5">4.4</span>
              </div>
            </div>
            <p className="text-slate-600 leading-normal font-light">
              Gunung Bulusarraung adalah gunung yang terletak di Sulawesi
              Selatan, Indonesia, dengan ketinggian sekitar 2.830 meter. Gunung
              ini merupakan bagian dari deretan pegunungan di wilayah tersebut
              dan terkenal dengan keindahan alamnya, termasuk hutan tropis dan
              pemandangan yang menakjubkan.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button
              className="font-poppins w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleRulesClick}
            >
              Rules
            </button>
          </div>
        </div>
      </div>

      <Grids />
    </>
  );
}
