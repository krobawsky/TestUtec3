import * as React from 'react';

import { Link } from 'react-router';
import { ITest } from '../../types';

// import '../../../public/js/materialize.js';
// import '../../../public/js/materialize.min.js';

export default ({test}: { test: ITest }) => (
  <section>
    <h3 className='center-align cyan-text text-darken-2'>{test.name}</h3>
    <table className='highlight'>
      <tbody>
        <tr>
          <th className='cyan-text text-darken-3'>Tipo de test</th>
          <td><b className='cyan-text text-darken-4'>{test.tipo}</b></td>
        </tr>
        <tr>
          <th className='cyan-text text-darken-3'>Descripción</th>
          <td><p className='cyan-text text-darken-4'>{test.descripcion}</p></td>
        </tr>
      </tbody>
    </table>
  </section>
);
