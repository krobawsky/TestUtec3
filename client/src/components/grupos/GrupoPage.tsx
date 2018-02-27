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
      return  <div className='center-align'>
                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <div className='preloader-wrapper big active'>
                  <div className='spinner-layer spinner-blue-only'>
                    <div className='circle-clipper left'>
                      <div className='circle'></div>
                    </div><div className='gap-patch'>
                      <div className='circle'></div>
                    </div><div className='circle-clipper right'>
                      <div className='circle'></div>
                    </div>
                  </div>
                </div>
              </div>;
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
