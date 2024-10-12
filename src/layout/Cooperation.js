import React from "react";
import "../assets/css/button.css";
import Outfit from "../components/Outfit";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Cooperation() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Dipercaya oleh tim-tim Terkenal Indonesia:
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              style={{ filter: "grayscale(100% )" }}
              alt="Kemenkes"
              src="https://kemkes.go.id/app_asset/file_content_download/170619174165b26b7d195019.13538774.png"
              width={158}
              height={48}
              className="col-span-2 w-full object-contain lg:col-span-1 "
            />
            <img
              alt="Hotto"
              style={{ filter: "grayscale(100% )" }}
              src="https://hotto.co.id/wp-content/uploads/2024/09/Logo-3.png"
              width={158}
              height={48}
              className="col-span-2 ml-4 object-contain lg:col-span-1"
            />
            <img
              alt="Shopee"
              style={{ filter: "grayscale(100% )" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/640px-Shopee.svg.png"
              width={158}
              height={48}
              className="col-span-2 ml-4 object-contain lg:col-span-1"
            />
            <img
              alt="Antarestar "
              style={{ filter: "grayscale(100% )" }}
              src="https://link.antarestar.com/wp-content/uploads/2021/04/cropped-antarestar-new.png"
              width={158}
              height={48}
              className="col-span-2 object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              style={{ filter: "grayscale(100% )" }}
              src="https://areioutdoorgear.co.id/wp-content/uploads/2024/07/logo-arei_vectorized1-1024x369.png"
              width={158}
              height={48}
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>

      <Outfit />
      <Footer />
    </>
  );
}

export default Cooperation;
