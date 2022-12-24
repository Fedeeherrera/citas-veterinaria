import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState(' ');
  const [propietario, setPropietario] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [alta, setAlta] = useState(' ');
  const [sintomas, setSintomas] = useState(' ');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando form...");
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
  
          >
            Nombre Mascota: 
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="text"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario:{" "}
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email:
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta:
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="date"
            value={alta}
            onChange={(e) => {
              setAlta(e.target.value);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder=" Describe los sintomas "
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          />
          <input
            type="submit"
            className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
