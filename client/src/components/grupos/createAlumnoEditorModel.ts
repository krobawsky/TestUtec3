import { IAlumno, ISelectOption } from '../../types';
import { url, submitForm } from '../../util';

const toSelectOptions = (alumnos: IAlumno[]): ISelectOption[] => alumnos.map(alumno => ({ value: alumno.id, name: alumno.lastName }));

export default (grupoId: string): Promise<any> => {
  return Promise.all(
   [fetch(url('/api/alumnos'))
      .then(response => response.json())
      .then(toSelectOptions),
    fetch(url('/api/grupo/' + grupoId))
      .then(response => response.json())
    ]

  ).then(results => ({
    alumnos: results[0],
    grupo: results[1]
  }));
};
