import React from 'react';
import { dummyTestimonial, assets } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="py-10 px-4 md:px-10 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Testimonials</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-6xl mx-auto">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="w-full max-w-[280px] min-h-[300px] border border-gray-200 rounded-2xl bg-white shadow-md p-5 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h3 className="text-base font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="h-4 w-4"
                      src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                      alt="star"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mt-3 text-sm leading-snug">
                  {testimonial.feedback}
                </p>
              </div>
              <a href="#" className="text-blue-500 underline text-sm mt-2 text-left">Read more...</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
