import React from 'react';

const ContactSlide = () => {
      return (
        <div className="max-w-2xl mx-auto mt-20 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Nuestra Misión</h2>
          <p className="text-xl text-gray-800 mb-8">
            Transformar el trabajo informal en oportunidad digital, conectando a personas talentosas con empleadores de manera justa, rápida y transparente.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Contacto</h3>
            <p className="text-lg text-gray-800">
              <span className="font-bold">CEO:</span> Luis Novoa
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-bold">Correo:</span> elemen01@hotmail.com
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-bold">Celular:</span> +51 953 242 589
            </p>
          </div>
        </div>
      );
    };

export default ContactSlide;
