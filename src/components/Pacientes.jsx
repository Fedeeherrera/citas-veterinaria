const Pacientes = () => {
  return (
    <>
      <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Nombre: <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Propietario:{" "}
          <span className="font-normal normal-case">Federico Herrera</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Email:{" "}
          <span className="font-normal normal-case">
            Fedeeherrera7@gmail.com
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Fecha Alta:{" "}
          <span className="font-normal normal-case">18/12/2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Sintomas: <span className="font-normal normal-case">Fiebre</span>
        </p>
      </div>
    </>
  );
};

export default Pacientes;
