import * as React from 'react';

import { Link , browserHistory } from 'react-router';
import { IAlumno } from '../../types';

export default ({alumno}: { alumno: IAlumno }) => (
  <section>
     <div className='center-align'>
     <div><a onClick={browserHistory.goBack} className='btn-floating btn-small waves-effect waves-light blue'><i className='material-icons'>arrow_back</i></a></div><br/>
      {alumno.genero === 'M' ? (
    <img className='circle responsive-img'  src = '/images/user_male.png'/>
            ) : (
     <img className='circle responsive-img'  src = '/images/user_female.png'/>
      )}
      <div className='divider'></div>
      <h4 className='center-align cyan-text text-darken-2'>{alumno.firstName} {alumno.lastName}</h4>
      <div className='divider'></div>
      <br/>
       </div>
      <h5 className='cyan-text'>Edad: <span className='cyan-text text-darken-2'>{alumno.edad}</span></h5>
      <h5 className='cyan-text'>Carrera: <span className='cyan-text text-darken-2'>{alumno.carrera}</span></h5>
      <h5 className='cyan-text'>Fec. Ingreso: <span className='cyan-text text-darken-2'>{alumno.ingreso}</span></h5>
      <h5 className='cyan-text'>Correo: <span className='cyan-text text-darken-2'>{alumno.correo}</span></h5>
      <h5 className='cyan-text'>Teléfono: <span className='cyan-text text-darken-2'>{alumno.telefono}</span></h5>
      <h5 className='cyan-text'>Promedio Ponderado: <span className='cyan-text text-darken-2'>{alumno.promedio}</span></h5>

  </section>
);
