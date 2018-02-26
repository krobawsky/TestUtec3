import * as React from 'react';

import { Link } from 'react-router';
import { ITest } from '../../types';

// import '../../../public/js/materialize.js';
// import '../../../public/js/materialize.min.js';

export default ({test}: { test: ITest }) => (
  <section>
    <h3 className='center-align light-blue-text'>{test.name}</h3>
    <table className='highlight'>
      <tbody>
        <tr>
          <th className='light-blue-text'>Tipo de test</th>
          <td><b className='grey-text text-darken-3'>{test.tipo}</b></td>
        </tr>
        <tr>
          <th className='light-blue-text'>Descripción</th>
          <td><p className='grey-text text-darken-3'>{test.descripcion}</p></td>
        </tr>
      </tbody>
    </table>
  </section>
);
