import React from 'react';
import foto from '../assets/foto.jpg';

export const PerfilPage = () => {
  const perfil ={
    nombre: 'Nombre: Juan Camilo Jaimes Vera',
    telefono: 'Teléfono: 3208840226',
    direccion:'Dirección: Av. Santander, Barrio el Zulia',
    correo:'Correo Electrónico: juanjaimes.estudiante@iser.edu.co',
    codigo: 'Código: 1094274367'
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <center>
                <h5 className="card-title"><strong>{perfil.nombre}</strong></h5>
                </center>
                <center>
                  <img src={foto} alt="" width='300px' height='500px' />
                </center>
                <div style={{ margin: '10px', padding: '5px', border: '1px solid blue' }}>
                  <h5 className="card-text"><strong>{perfil.telefono}</strong></h5>
                  <h5 className="card-text"><strong>{perfil.direccion}</strong></h5>
                  <h5 className="card-text"><strong>{perfil.correo}</strong></h5>
                  <h5 className="card-text"><strong>{perfil.codigo}</strong></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

  

