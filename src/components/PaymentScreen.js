const PaymentScreen = ({ setView }) => {
      const applicantName = "Elena Vázquez"; // This would be passed as a prop in a real app
      const jobTitle = "Desarrollador Frontend"; // This would be passed as a prop
      const commission = 1.00;

      const handlePayment = () => {
        alert(`¡Pago exitoso! Has contratado a ${applicantName} para ${jobTitle}.`);
        setView("employer-dashboard");
      };

      return (
        <div className="max-w-lg mx-auto mt-20 text-center bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Confirmar Contratación</h2>
          <p className="text-gray-700 mb-6">
            Estás a un paso de contratar a <span className="font-bold">{applicantName}</span> para el puesto de <span className="font-bold">{jobTitle}</span>.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Comisión por conexión:</span>
              <span className="font-bold text-2xl text-green-600">S/ {commission.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Este es un cobro único por conectar exitosamente con un trabajador.
            </p>
          </div>
          <button
            onClick={handlePayment}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            Pagar y Contratar
          </button>
        </div>
      );
    };
