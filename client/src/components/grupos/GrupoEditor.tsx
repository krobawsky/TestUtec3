import * as React from 'react';

import { IRouter, Link } from 'react-router';
import { url, submitForm } from '../../util';

import Input from '../form/Input';

import { Digits, NotEmpty } from '../form/Constraints';

import { IInputChangeHandler, IFieldError, IError, IGrupo, IRouterContext } from '../../types';

interface IGrupoEditorProps {
  initialGrupo?: IGrupo;
}

interface IGrupoEditorState {
  grupo?: IGrupo;
  error?: IError;
};

export default class GrupoEditor extends React.Component<IGrupoEditorProps, IGrupoEditorState> {

  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      grupo: Object.assign({}, props.initialGrupo)
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const { grupo } = this.state;

    const url = grupo.isNew ? '/api/grupo' : '/api/grupo/' + grupo.id;
    submitForm(grupo.isNew ? 'POST' : 'PUT', url, grupo, (status, response) => {
      if (status === 200 || status === 201) {
        const newGrupo = response as IGrupo;
        this.context.router.push({
          pathname: '/grupos/' + newGrupo.id
        });
      } else {
        console.log('ERROR?!...', response);
        this.setState({ error: response });
      }
    });
  }

  onInputChange(name: string, value: string, fieldError: IFieldError) {
    const { grupo, error } = this.state;
    const modifiedGrupo = Object.assign({}, grupo, { [name]: value });
    const newFieldErrors = error ? Object.assign({}, error.fieldErrors, {[name]: fieldError }) : {[name]: fieldError };
    this.setState({
      grupo: modifiedGrupo,
      error: { fieldErrors: newFieldErrors }
    });
  }

  render() {
    const { grupo, error } = this.state;
    return (
      <span>
        <h2>Nuevo Grupo</h2>
        <form className='form-horizontal' method='POST' action={url('/api/grupo')}>
          <div className='form-group has-feedback'>
            <Input object={grupo} error={error} constraint={NotEmpty} label='Nombre' name='name' onChange={this.onInputChange} />
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
              <button className='btn btn-default' type='submit' onClick={this.onSubmit}>{grupo.isNew ? 'Añadir Grupo' : 'Update Grupo'}</button>
            </div>
          </div>
        </form>
      </span>
    );
  }
}