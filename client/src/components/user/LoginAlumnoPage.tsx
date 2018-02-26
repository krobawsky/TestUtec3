import * as React from 'react';
import ValidatorFormAlumno from './ValidatorFormAlumno';

import { IAlumno } from '../../types';

const newAlumno = (): IAlumno => ({

  id: null,
  isNew: true,
  firstName: null,
  lastName: null,
  codigo: '',
  password: '',
  ingreso: '',
  correo: '',
  edad: '',
  genero: '',
  carrera: '',
  promedio: '',
  telefono: '',
  resultados: []
});

export default () => <ValidatorFormAlumno initialAlumno={newAlumno()} />;