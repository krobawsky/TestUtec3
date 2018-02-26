import * as React from 'react';

import { IRouter, Link } from 'react-router';
import { url, submitForm } from '../../util';

import Input from '../form/Input';

import { IError, IAlumno, IResultadoRequest, IEditableResultado, IResultado, IRouterContext } from '../../types';

interface IResultadoEditorProps {
  resultado: IEditableResultado;
  alumno: IAlumno;
}

interface IResultadoEditorState {
  editableResultado?: IEditableResultado;
  error?: IError;
};

export default class ResultadoEditor extends React.Component<IResultadoEditorProps, IResultadoEditorState> {
/**
  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { editableResultado: Object.assign({}, props.resultado ) };
  }

  onSubmit(event) {
    event.preventDefault();

    const { alumno } = this.props;
    const { editableResultado } = this.state;

    const request: IResultadoRequest = {
      name: editableResultado.name,
      test: editableResultado.test,
      descripcion: editableResultado.descripcion
    };

    const url = editableResultado.isNew ? '/api/alumnos/' + alumno.id + '/resultados' :  '/api/alumnos/' + alumno.id + '/resultados/' + editableResultado.id;
    submitForm(editableResultado.isNew ? 'POST' : 'PUT', url, request, (status, response) => {
      if (status === 204) {
        this.context.router.push({
          pathname: '/alumnos/' + alumno.id
        });
      } else {
        console.log('ERROR?!...', response);
        this.setState({ error: response });
      }
    });
  }

  onInputChange(name: string, value: string) {
    const { editableResultado } = this.state;
    const modifiedResultado = Object.assign({}, editableResultado, { [name]: value });

    this.setState({ editableResultado: modifiedResultado });
  }

  render() {
    const { alumno } = this.props;
    const { editableResultado, error } = this.state;

    const formLabel = editableResultado.isNew ? 'Add Resultado' : 'Modificar Resultado';

    return (
      <span>
        <h2>{formLabel}</h2>
        <form className='form-horizontal' method='POST' action={url('/api/alumno')}>
          <div className='form-group has-feedback'>
            <div className='form-group'>
              <label className='col-sm-2 control-label'>Alumno</label>
              <div className='col-sm-10'>{alumno.firstName} {alumno.lastName}</div>
            </div>
            <Input object={editableResultado} error={error} label='Descripcion' name='descripcion' onChange={this.onInputChange} />
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
              <button className='btn btn-default' type='submit' onClick={this.onSubmit}>{formLabel}</button>
            </div>
          </div>
        </form>
      </span>
    );
  }
  */
}
