import * as React from 'react';

import { Link } from 'react-router';
import { IGrupo } from '../../types';
import { url } from '../../util';


interface IGruposPageProps {
  params?: { grupoId?: string };
}

interface IGrupoPageState {
  grupo?: IGrupo;
}

export default class DetalleGruposPage extends React.Component<IGruposPageProps, IGrupoPageState> {

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

  delete(id) {
      const fetchUrl = url(`api/grupoD/${id}`);
      fetch(fetchUrl, {method: 'DELETE'})
        .then(response => response.json())
        .then(grupo => this.setState({ grupo }));
  }

  deleteAlumno(alumnoId, grupoId) {
      const fetchUrl = url(`api/alumnoD/${grupoId}/${alumnoId}`);
      fetch(fetchUrl)
        .then(response => response.json());
  }

  render() {
    const { grupo } = this.state;

    if (!grupo) {
      return <h2>No Grupo loaded</h2>;
    }

    return (
      <span>
        <a href='/grupos' className='btn-floating btn-small waves-effect waves-light blue'><i className='material-icons'>arrow_back</i></a>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m8 l9'>
              <h3>Grupo {grupo.name}</h3>
            </div>
            <div className='col s12 m4 l3'>
              <div className='fixed-action-btn horizontal right' style={{position: 'relative', display: 'inline-block', right: '24px', marginTop: '30px'}}>
                <a className='btn-floating btn-large blue tooltipped' data-position='top' data-delay='50' data-tooltip='Opciones'>
                  <i className='material-icons'>mode_edit</i>
                </a>
                <ul>
                  <li><a className='btn-floating red tooltipped' data-position='bottom' data-delay='50' data-tooltip='Eliminar grupo' onClick={() => this.delete(grupo.id)} href={`/grupos`}><i className='material-icons'>delete</i></a></li>
                  <li><a className='btn-floating green tooltipped' data-position='bottom' data-delay='50' data-tooltip='Agregar alumnos' href={`/grupo/${grupo.id}/lista`}><i className='material-icons'>add</i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <table className='bordered'>
            <thead>
              <th>Alumnos</th>
            </thead>
            <tbody>
              {grupo.alumnos.map( alumno => (
                <tr key={alumno.id}>
                  <td>{alumno.firstName} {alumno.lastName}</td>
                  <td><Link className='btn-floating btn-small waves-effect waves-light red tooltipped' data-delay='50' data-tooltip='Quitar alumno del grupo' onClick={() => this.deleteAlumno(alumno.id, grupo.id)}><i className='material-icons'>delete</i></Link></td></tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </span>
    );
  }
}
