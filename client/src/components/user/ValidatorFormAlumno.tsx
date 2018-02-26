import * as React from 'react';

import { IRouter, Link } from 'react-router';
import { url, submitForm } from '../../util';

import Input from '../form/InputU';
import InputP from '../form/InputP';

import { Digits, NotEmpty } from '../form/Constraints';

import { IInputChangeHandler, IFieldError, IError, IAlumno, IRouterContext } from '../../types';

interface IAlumnoEditorProps {
  initialAlumno?: IAlumno;
}

interface IAlumnoEditorState {
  alumno?: IAlumno;
  error?: IError;
};

export default class ValidatorForm extends React.Component<IAlumnoEditorProps, IAlumnoEditorState> {

  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      alumno: Object.assign({}, props.initialAlumno)
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const { alumno } = this.state;

    const url = alumno.isNew ? '/api/loginE' : '/api/alumno/' + alumno.id;
    submitForm(alumno.isNew ? 'POST' : 'PUT', url, alumno, (status, response) => {
      if (status === 200 || status === 201) {
        const newAlumno = response as IAlumno;
        this.context.router.push({
          pathname: '/student/' + newAlumno.id
        });
      } else {
        console.log('ERROR?!...', response);
        this.setState({ error: response });
      }
    });
  }

bachar(event) {
  console.log('gola soy german');
}

  onInputChange(name: string, value: string, fieldError: IFieldError) {
    const { alumno, error } = this.state;
    const modifiedOwner = Object.assign({}, alumno, { [name]: value });
    const newFieldErrors = error ? Object.assign({}, error.fieldErrors, {[name]: fieldError }) : {[name]: fieldError };
    this.setState({
      alumno: modifiedOwner,
      error: { fieldErrors: newFieldErrors }
    });
  }

  render() {
    const { alumno, error } = this.state;
    return (
      <span><br/><br/>
      <form className='form-horizontal'>
       <div className='row center-align'>
        <div className='col s12 m4 offset-m4'>
          <div className='card blue-grey darken-2 hoverable'>
            <div className='card-content white-text'>
              <span className='card-title'>Login Alumno</span>
              <div className='divider'></div>
                <div className='row'>
                  <form className='col s11' method='POST' action={url('/api/login')}>
                    <div className='row'>
                      <div className='input-field col s12'>
                          <img src='/images/tutor.png' width='330' id='img' height='200' /><br/> <br/>
                            <Input object={alumno} error={error} constraint={NotEmpty} label='' name='codigo' onChange={this.onInputChange} />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='input-field col s12'>
                          <InputP object={alumno} error={error} constraint={Digits(10)} label='' name='password' onChange={this.onInputChange} />
                      </div>
                    </div><br/>
<div className='divider'></div>
 <div className='card-action'><br/>
                 <button className='btn btn-default' type='submit' onClick={this.onSubmit}>{alumno.isNew ? 'Iniciar sessión' : 'Update Owner'}</button>
            </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
        </form>
      </span>
    );
  }
}