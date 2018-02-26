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
          <h3>Grupo {grupo.name}</h3>
        <Link className='btn btn-default' onClick={() => this.delete(grupo.id)} to='/grupos'>
          Eliminar Grupo</Link>
          <Link className='btn-floating btn-small waves-effect waves-light blue' to={`/grupo/${grupo.id}/lista`}><i className='material-icons'>add</i></Link><br/><br/>
          <table className='bordered'>
          <thead>
          <th>Alumnos</th>
          </thead>
          <tbody>
          {grupo.alumnos.map( alumno => (
              <tr key={alumno.id}>
                <td>{alumno.firstName} {alumno.lastName}</td>
<td><Link className='btn-floating btn-small waves-effect waves-light red' onClick={() => this.deleteAlumno(alumno.id, grupo.id)}><i className='material-icons'>delete</i></Link></td></tr>
             ))}
             </tbody>
            </table>
            </div>
      </span>
    );
  }
}
