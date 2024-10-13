import React, { useEffect } from "react";

import Bulubaria from "../assets/svgs/Bulubaria.svg";
import Grids from "../components/Grids";
import { useNavigate } from "react-router-dom";
import gunungBawa from "../assets/images/gunungcardbawa.jpg";
import Latimojong from "../assets/svgs/Latimojong.svg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Card() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const navigate = useNavigate();

  const handleRulesClick = () => {
    navigate("/Bawakaraeng");
  };
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 lg:gap-11"
      >
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-80 lg:w-96">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src={gunungBawa} className="w-full h-full object-cover" />
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
              Gunung Bawakaraeng di Sulawesi Selatan, setinggi 2.830 MDPL,
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
              src={Bulubaria}
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
              ketinggian sekitar 2.730 MDPL. Gunung ini menawarkan pemandangan
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
              src={Latimojong}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <h6 className="text-slate-800 text-xl font-semibold">
                Gunung Latimojong
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
              Gunung Latimojong adalah gunung yang terletak di Sulawesi Selatan,
              Indonesia, dengan ketinggian sekitar 3.478 MDPL. Gunung ini
              merupakan bagian dari deretan pegunungan di wilayah tersebut dan
              terkenal dengan keindahan alamnya, termasuk hutan tropis dan
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
