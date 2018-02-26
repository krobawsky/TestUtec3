import * as React from 'react';
import GrupoEditor from './GrupoEditor';

import { IGrupo } from '../../types';

const nuevoGrupo = (): IGrupo => ({
  id: null,
  isNew: true,
  name: '',
  alumnos: []
});

export default () => <GrupoEditor initialGrupo={nuevoGrupo()} />;
