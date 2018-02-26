import * as React from 'react';

import { Link } from 'react-router';
import { IGrupo } from '../../types';
import { url } from '../../util';

import GrupoInformation from './GrupoInformation';
import GrupoResultado from './GrupoResultado';

interface IGruposPageProps {
  params?: { grupoId?: string };
}

interface IGrupoPageState {
  grupo?: IGrupo;
}

export default class GruposPage extends React.Component<IGruposPageProps, IGrupoPageState> {

  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { params } = this.props;

    if (params && params.grupoId) {
      const fetchUrl = url(`/api/grupo/${params.grupoId}`);
      fetch(fetchUrl)
        .then(response => response.json())
        .then(grupo => this.setState({ grupo }));
    }
  }

  render() {
    const { grupo } = this.state;

    if (!grupo) {
      return <h2>No Grupo loaded</h2>;
    }

    return (
      <span>
        <div className='row'>
          <div className='col s12 m4 l3'>
        <GrupoInformation grupo={grupo} />
          </div>
          <div className='col s12 m8 l9'>
         <GrupoResultado grupo={grupo} />
          </div>
        </div>
      </span>
    );
  }
}
