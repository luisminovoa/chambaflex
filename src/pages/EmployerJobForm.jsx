import React, { useState } from 'react';
import toast from 'react-hot-toast';

const EmployerJobForm = ({ onJobPosted }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [payment, setPayment] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    if (!title || !description || !date || !time || !payment || !location) {
      toast.error('Por favor, completa todos los campos.');
      return;
    }
    const newJob = { title, description, date, time, payment, location, id: Date.now() };
    // onJobPosted(newJob); // Esta función se pasará como prop desde App.jsx
    toast.success('¡Chamba publicada con éxito!');
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setPayment('');
    setLocation('');
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Publicar Nueva Chamba</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Título del Trabajo
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="Ej: Ayudante de mudanza"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Descripción
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
            placeholder="Detalla las tareas a realizar..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Fecha
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
              Hora
            </label>
            <input
              type="time"
              id="time"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="payment" className="block text-sm font-medium text-gray-700 mb-2">
            Pago Ofrecido
          </label>
          <input
            type="text"
            id="payment"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="Ej: $500 MXN por día"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Ubicación
          </label>
          <input
            type="text"
            id="location"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="Ej: Colonia Roma, CDMX"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors text-lg font-semibold shadow-md"
        >
          Publicar Chamba
        </button>
      </div>
    </div>
  );
};

export default EmployerJobForm;
