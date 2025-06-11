import React from 'react';
import ProductCatalog from './ProductCatalog';
import About from '../../components/About';
import LogoSlider from '../../components/LogoSlider';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <div className="relative h-[75vh] mb-16">
        <div className="absolute inset-0">
          <img
            src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/a10a3858-cd30-dc2d-e2b5-1454b2fa39ba.jpg"
            alt="Products Hero"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-sky-400 mb-4 animate-fade-up animation-delay-200 ">
            NUESTROS VALIDADORES
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-up animation-delay-200">
            "Optimización de rutas y monitoreo constante para maximizar la eficiencia del transporte."
            </p>
            
          </div>
          
        </div>
        <LogoSlider/>
      </div>


      {/* Catalog Section */}
      <div className="container mx-auto px-6 pt-20   ">
        <div className="mb-12 h-[100px]">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center ">MODELOS</h2>
          <p className="text-gray-600 text-center text-xl">Optimiza tus rutas y monitoreo constante para maximizar la eficiencia</p>
        </div>
        <div className=''>
        <ProductCatalog />
        </div>
      </div>
      <div className='pt-60'>
      <About />
      </div>
    </div>
  );
};

export default ProductsPage;