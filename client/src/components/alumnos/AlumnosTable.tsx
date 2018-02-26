import * as React from 'react';

import { IAlumno } from '../../types';

const renderRow = (alumno: IAlumno) => (
  <tr key={alumno.id}>
    <td>
      <a href={`/alumnos/${alumno.id}`}>
        {alumno.lastName} {alumno.firstName}
      </a>
    </td>
    <td className='hidden-sm hidden-xs'>{alumno.codigo}</td>
    <td>{alumno.correo}</td>
    <td>{alumno.carrera}</td>
  </tr>
);

const renderAlumnos = (alumnos: IAlumno[]) => (
  <section>
    <table className='highlight'>
      <thead>
        <tr>
          <th>Nombres</th>
          <th className='hidden-sm hidden-xs'>Codigo</th>
          <th>Correo</th>
          <th>Carrera</th>
        </tr>
      </thead>
      <tbody>
        {alumnos.map(renderRow)}
      </tbody>
    </table>
     <p className='center'>{alumnos.length} alumnos encontrados</p>
  </section>
);

export default ({alumnos}: { alumnos: IAlumno[] }) => alumnos ? renderAlumnos(alumnos) : null;
