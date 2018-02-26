
import { url, submitForm } from '../../util';

export default (alumnoId: string, petLoaderPromise: Promise<any>): Promise<any> => {
  return Promise.all(
    [
    fetch(url('/api/alumno/' + alumnoId))
      .then(response => response.json()),
      petLoaderPromise,
    ]
  ).then(results => ({
    alumno: results[0],
    resultado: results[1]
  }));
};
