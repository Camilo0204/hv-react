import React from 'react';

export const ContactoPage = () => {
  const contacto = {
    nombre: 'Nombre: Ana Vera',
    telefono: 'Teléfono: 8623453254',
    direccion: 'Dirección: Av. Santander, Barrio el Zulia',
    correo: 'Correo Electrónico: anavera@gmail.com',
  };

  return (
    <>
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{contacto.nombre}</h2>
                <p className="card-text">{contacto.telefono}</p>
                <p className="card-text">{contacto.direccion}</p>
                <p className="card-text">{contacto.correo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
