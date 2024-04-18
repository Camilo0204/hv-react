import React from 'react'
import portafolio1 from '../assets/portafolio1.jpg'

export const PortafolioPage = () => {
  const info ={
    nombre: 'App Mundo Pirata',
    galeria: 'Galería de Juegos: Muestra una lista de videojuegos disponibles para descargar.',
    consola: 'Consolas : PS1, PS2, Xbox clásico, Xbox 360, PC.',
    filtro : 'Filtros y Búsqueda: Permite a los usuarios filtrar los juegos por consola y buscar por título.',
    informacion: 'INFORMACION: Con esta información, los usuarios pueden explorar y encontrar fácilmente los juegos que les interesan, así como obtener detalles y opiniones para tomar decisiones informadas sobre sus descargas.'

  }
  return (
    <>
    <div>
      <center>
        <br/>
      <h5><strong>{info.nombre}</strong><br /></h5>
      <img src={portafolio1} alt="" width='300px' height='500px' />
      </center>
    </div>
    <br/>
    <center>  
    <strong>
     <div style={{ margin: '10px', padding: '5px', border: '1px solid blue' }}>
      <h4>
      
      {info.nombre}<br /><br />
      {info.galeria}<br /><br />
      {info.consola}<br /><br />
      {info.filtro}<br /><br />
      {info.informacion}
      </h4>
    </div>
    </strong>
    </center>
    </>    
  )
}
