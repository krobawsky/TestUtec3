import * as React from 'react';

import { IAlumno, IResultado, IEditableResultado } from '../../types';

import { url } from '../../util';

import ResultadoEditor from './ResultadoEditor';
import createResultadoEditorModel from './createResultadoEditorModel';

interface IEditResultadoPageProps {
  params: {
    alumnoId: string,
    resultadoId: string
  };
}

interface IEditResultadoPageState {
  // resultado?: IEditableResultado;
  alumno?: IAlumno;
  resultado?: IResultado;
};

export default class EditResultadoPage extends React.Component<IEditResultadoPageProps, IEditResultadoPageState> {

  componentDidMount() {
    const { params } = this.props;

    const fetchUrl = url(`/api/alumnos/${params.alumnoId}/resultados/${params.resultadoId}`);
   {/**  fetch(fetchUrl)
        .then(response => response.json())
        .then(resultado => { console.log('resultado', resultado); this.setState({ resultado }); });
*/}
    const loadResultadoPromise = fetch(fetchUrl).then(response => response.json());

    createResultadoEditorModel(this.props.params.alumnoId, loadResultadoPromise)
      .then(model => this.setState(model));
  }

  render() {

    if (!this.state) {
      return <h1> Error </h1>;
    }

    return (
     <span>
    <ResultadoEditor {...this.state} />
      <br></br>
        <div className='row'>
          <div className='col s12 m4 l3'>
        {/** <ResultadoInformation resultado={resultado}/> */}
          </div>
          <div className='col s12 m8 l9'>
        {/** <ResultadoGraficos resultado={resultado}/> */}
          </div>
        </div>
    </span>
    );
  }
}
