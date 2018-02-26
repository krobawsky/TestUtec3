import * as React from 'react';

import { IGrupo } from '../../types';

const renderRow = (grupo: IGrupo) => (
  <tr key={grupo.id}>
    <td>
      <a href={`/grupos/detalle/${grupo.id}`}>
        {grupo.name}
      </a>
    </td>
  </tr>
);

const renderGrupos = (grupos: IGrupo[]) => (
  <section>
    <table className='highlight'>
      <thead>
        <tr>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {grupos.map(renderRow)}
      </tbody>
    </table>
     <p className='center'>{grupos.length} grupos encontrados</p>
  </section>
);

export default ({grupos}: { grupos: IGrupo[] }) => grupos ? renderGrupos(grupos) : null;
