import * as React from 'react';

import { Link } from 'react-router';
import { IAlumno, IResultado } from '../../types';

const VisitsTable1 = ({alumnoId, resultado}: { alumnoId: number, resultado: IResultado }) => (
  <table className='table-condensed'>
    <thead>
      <tr>
        <th>Test</th>
      </tr>
    </thead>
  </table>
);

export default ({alumno}: { alumno: IAlumno }) => (

  <section>
    <h2>Tests Asignados</h2>
    <table className='table table-striped'>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Descripción</td>
            </tr>
          </thead>
          <tbody>
            {alumno.resultados.map(resultado => (
              resultado.date === null ? (
              <tr key={resultado.id}>
               <td> <h5>{resultado.test} </h5></td><td> { resultado.descripcion } </td>
               <td>
                {
                  resultado.test === 'Test del Estres' ? (
                    <Link to={{ pathname : `/student/tests/estres`, state: { resultadoId: resultado.id }}} className='btn-floating btn-small waves-effect waves-light yellow'><i className='material-icons'>edit</i></Link>
                  ) : ( resultado.test === 'Test de Millon' ? (
                    <Link to={{ pathname : `/student/tests/millon`, state: { resultadoId: resultado.id }}} className='btn-floating btn-small waves-effect waves-light yellow'><i className='material-icons'>edit</i></Link>
                  ) : (
                    <Link to={{ pathname : `/student/tests/baron`, state: { resultadoId: resultado.id }}} className='btn-floating btn-small waves-effect waves-light yellow'><i className='material-icons'>edit</i></Link>
                    ))}
                </td>
              </tr>
              ) : (
              null
              )
            ))}
          </tbody>
        </table>
  </section>
);
