import React from "react";
import { Icon } from "@iconify/react";

const FeaturesBlocks = () => {
  return (
    <section className="relative" id="features-block">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-gray-300">We create fast and responsive web</h2>
            <p className="text-xl text-gray-400">using vite.js as a framework and a little touch of react, everything feels like a breeze. This website is built using the following technologies
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-3 items-start md:max-w-1xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded shadow-xl hover:bg-blue-800">
              <Icon icon="logos:vitejs" width="80" />
                
              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1 mt-3">Vite.JS</h4>
              <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded shadow-xl hover:bg-blue-800">
            <Icon icon="vscode-icons:file-type-reactjs" width="80" />
              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1 mt-3">React</h4>
              <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            
            <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded shadow-xl hover:bg-blue-800">
            <Icon icon="vscode-icons:file-type-tailwind" width="80" />
              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1 mt-3">Tailwindcss</h4>
              <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesBlocks;
