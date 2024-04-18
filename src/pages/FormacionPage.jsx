import React from 'react';

export const FormacionPage = () => {
  const formacion ={
    primaria: 'Primaria: Escuela Normal Superior Pamplona',
    secuandaria: 'Secundaria: Escuela Normal Superior Pamplona',
    universidad: 'Universidad: Instituto Superior de Educacion Rural'
  };

  return (
    <>
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title"><strong>Primaria:</strong> Escuela Normal Superior Pamplona</h3>
                <h3 className="card-title"><strong>Secundaria:</strong> Escuela Normal Superior Pamplona</h3>
                <h3 className="card-title"><strong>Universidad:</strong> Instituto Superior de Educacion Rural</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
