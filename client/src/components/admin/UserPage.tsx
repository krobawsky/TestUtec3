import * as React from 'react';

import { IRouter, Link } from 'react-router';
import { IUser } from '../../types';
import { url, submitForm } from '../../util';
import InputH from '../form/InputH';
import { Digits, NotEmpty } from '../form/Constraints';
import { IInputChangeHandler, IFieldError, IError, IAlumno, IRouterContext } from '../../types';

interface IUsersPageProps {
  params?: { userId?: string };
}

interface IUserPageState {
  user?: IUser;
}

export default class UserPage extends React.Component<IUsersPageProps, IUserPageState> {

  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {};
  }

  componentDidMount() {
    const { params } = this.props;

    if (params && params.userId) {
      const fetchUrl = url(`/api/users/${params.userId}`);
      fetch(fetchUrl)
        .then(response => response.json())
        .then(user => this.setState({ user }));
    }
  }

   onSubmit(event) {
    event.preventDefault();
    const { user } = this.state;

    const url = true ? '/api/emailadmin' : '/api/user/' + user.id;
    submitForm(true ? 'POST' : 'PUT', url, user, (status, response) => {
      if (status === 200 || status === 201) {
        const newUser = response as IUser;
        this.context.router.push({
         pathname: '/users/list'
        });
      } else {
        console.log('ERROR?!...', response);
        this.setState({ error: response });
      }
    });

   }

  render() {
    const { user } = this.state;

    if (!user) {
      return <h2>Loading..</h2>;
    }

    return (
      <span>
        <div className='row'>
          <div className='col s12 m6 offset-m3'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
            <span className='card-title center'>Información del Usuario</span>
            <p> Nombres : {user.firstName} {user.lastName} </p>
           <p> Usuario : {user.username} </p>
           <p> Rol : {user.rol} </p>
           <div className='right'>
           <form className='col s11' method='POST' action={url('/api/emailadmin')}>
           <InputH object={user} label='' name='id' value={user.id} />
           <button className='btn btn-default' type='submit' value='Enviar' onClick={this.onSubmit}>
            Enviar<i className='material-icons right'>send</i>
            </button>
           </form>
          </div><br/>
            </div>
            </div>
            </div>
        </div>
      </span>
    );
  }
}