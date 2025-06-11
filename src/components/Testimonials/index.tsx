import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  return (
    <section className="relative py-24" id="testimonials">
      <div className="absolute inset-0 bg-fixed">
        <img
          src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/91bf3f21-099e-73d0-b8e6-20f1dabf9ed4.png"
          alt="Background"
          className="w-full h-full object-cover md:object-cover"
        />
        <div className="absolute inset-0  md:bg-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 md:px-6 pb-20 md:pb-40">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Servicios Cloud para Buses</h2>
          <p className="text-xl md:text-2xl text-white">Los Softwares mas potentes para gestion de flotas y transporte publico.</p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;