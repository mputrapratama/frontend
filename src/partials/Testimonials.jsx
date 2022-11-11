import React from "react";

import TestimonialImage from "../images/testi-profile1.jpeg";
import FormCustomers from "../components/FormCustomers";

const Testimonials = () => {
  return (
    <section className="relative" id="testi">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Form Section */}
          <FormCustomers/>

        <section className="relative">
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10 sm:pb:13">
            <h2 className="h2 mb-3">Testimonial</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Our team is experienced in the field of website development. Reliable and professional</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-12 mb-5" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={TestimonialImage} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-l font-medium mb-6 mt-2">
                  “Kemendikbud sekarang sudah mendukung full untuk era digitalisasi yang bergerak dalam bidang IT. Saya rasa memperdalam ilmu tentang teknologi sangat bermanfaat untuk menjadi bekal nantinya. Mekanisme pembuatan website ini sudah lumayan bagus seiring mengikuti perkembangan teknologi, contohnya kita dapat melihat enviroment yang update dan bersih. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Muhammad Putra Pratama</cite>
                <div className="text-gray-600">
                  <span>Student of Universitas Negeri Makassar </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;