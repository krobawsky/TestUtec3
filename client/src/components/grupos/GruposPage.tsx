import * as React from 'react';

import { IRouter, Link } from 'react-router';
import { url } from '../../util';

import { IGrupo } from '../../types';

interface IGruposPageState {
  grupos: IGrupo[];
}

export default class GruposPage extends React.Component<void, IGruposPageState> {
  constructor() {
    super();

    this.state = { grupos: [] };
  }

  componentDidMount() {
    const requestUrl = url('api/grupos');

    fetch(requestUrl)
      .then(response => response.json())
      .then(grupos => { console.log('grupos', grupos); this.setState({ grupos }); });
  }



  render() {
    const { grupos } = this.state;

    if (!grupos) {
      return <h2>Grupos</h2>;
    }

    return (

      <span>
      <div className='row'>
          <div className='col s1 left'>
        <a className='btn-floating btn-large blue button-collapse' data-activates='slide-out'>
        <i className='material-icons'>menu</i>
        </a>
        <ul id='slide-out' className='side-nav'>
      <li><a><i className='material-icons'>ADMINISTRADOR</i></a></li>
      <li><a><img src='/images/admi.png' width='210' id='img' height='200' /></a></li>
      <li><a><i className='material-icons'>e</i></a></li>
         <li><a><i className='material-icons'>e</i></a></li>
         <li><a><i className='material-icons'>e</i></a></li>
      <li><a className='subheader'>Opciones</a></li>
        <li><a href='/welcome' title='Enviar'><i className='material-icons'>send</i>Enviar Test</a></li>
        <li><a href='/grupos' title='Grupos'><i className='material-icons'>group_add</i>Añadir grupos</a></li>
        <li><div className='divider'></div></li>
        <li><a className='subheader'>Resultados</a></li>
        <li><a href='/alumnos/list' title='Alumnos'><i className='material-icons'>person</i>Alumnos</a></li>
        <li><a href='/grupo/list' title='Grupos'><i className='material-icons'>group</i>Grupos</a></li>
        <li><div className='divider'></div></li>
        <li><a href='/'><i className='material-icons'>exit_to_app</i>CERRAR SESIÓN</a></li>
      </ul>
        </div>
        <div className='col s11 container'>
      <h1>Grupos</h1>
      <Link className='btn btn-default' to='/grupos/nuevo'> Añadir Grupo</Link>
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>N° Alumnos</td>
            </tr>
          </thead>
          <tbody>
            {grupos.map(grupo => (
              <tr key={grupo.id}>
                <td> <h5>{grupo.name} </h5></td><td> { grupo.alumnos.length } </td>
                <td>  <a href={`/grupos/${grupo.id}`} className='btn-floating btn-small waves-effect waves-light blue'><i className='material-icons'>edit</i></a></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      </span>
    );
  }
}
