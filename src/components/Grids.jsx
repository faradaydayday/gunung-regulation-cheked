import Bulubaria from "../assets/svgs/Bulubaria.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import jaki from "../assets/images/jakiey.jpg";
export default function Grids() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <div data-aos="fade-up" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <img
                  style={{ width: "100%" }}
                  className="size-full object-top"
                  src={jaki}
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <img
                style={{ width: "100%" }}
                className="size-full object-cover object-top"
                src="https://journal.momotrip.co.id/wp-content/uploads/2017/01/lompobattang1.jpg"
                alt=""
              />
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <img
              style={{ width: "100%" }}
              className="size-full object-cover object-top"
              src="https://cdn1-production-images-kly.akamaized.net/ra05eJEKCvMULkjw1OiZUdtuTQ0=/0x363:1125x997/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4561916/original/037386400_1693757309-WhatsApp_Image_2023-09-03_at_23.06.52.jpeg"
              alt=""
            />

            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <img
                style={{ width: "100%" }}
                className="size-full object-top"
                src="https://sulselekspres.com/wp-content/uploads/2019/10/IMG-20191009-WA0014.jpg"
                alt=""
              />
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
