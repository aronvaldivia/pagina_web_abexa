import React from 'react';

const Nosotros = () => {
  return (
    <section className="py-24 pb-32 bg-white" id="nosotros">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
            NOSOTROS
          </h2>
          <p className="text-xl text-gray-600">Conoce más sobre ABEXA Cloud</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-100">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Líderes en Tecnología para el Transporte
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Somos ABEXA Cloud, empresa peruana líder en soluciones tecnológicas 
              para el transporte público. Con más de 10 años de experiencia, nos 
              especializamos en desarrollar sistemas innovadores que optimizan la 
              gestión de flotas vehiculares.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nuestro compromiso es facilitar la movilidad urbana a través de 
              tecnología de vanguardia, mejorando la eficiencia del transporte 
              público y la calidad de vida de las comunidades peruanas.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-blue-600">100+</h4>
                <p className="text-gray-600">Empresas Atendidas</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600">15+</h4>
                <p className="text-gray-600">Ciudades del Perú</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://mcusercontent.com/c379e3356454ef2a14873d293/images/84f87aca-58cc-c1c4-eded-60d7110cf1b8.png"
                alt="Equipo ABEXA Cloud"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <h5 className="text-xl font-bold">10+ Años</h5>
              <p className="text-blue-100">de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;