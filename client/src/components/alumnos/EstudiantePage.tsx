import * as React from 'react';

import { Link } from 'react-router';
import { IAlumno } from '../../types';
import { url } from '../../util';

import AlumnoInformation from './AlumnoInformation';
import EstudianteTableTest from './EstudianteTableTest';

interface IAlumnosPageProps {
  params?: { alumnoId?: string };
}

interface IAlumnoPageState {
  alumno?: IAlumno;
}

export default class EstudiantePage extends React.Component<IAlumnosPageProps, IAlumnoPageState> {

  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { params } = this.props;

    if (params && params.alumnoId) {
      const fetchUrl = url(`/api/student/${params.alumnoId}`);
      fetch(fetchUrl)
        .then(response => response.json())
        .then(alumno => this.setState({ alumno }));
    }
  }

  render() {
    const { alumno } = this.state;

    if (!alumno) {
      return <h2>No Alumno loaded</h2>;
    }

    return (
      <span>
        <div className='row'>
          <div className='col s12 m4 l3'>
       <div className='center-align'>
      <img className='circle responsive-img' src='https://www.almabay.com/common/marvel/images/default-male-avatar.png'/>
      <div className='divider'></div>
      <h4 className='center-align cyan-text text-darken-2'>{alumno.firstName} {alumno.lastName}</h4>
      <div className='divider'></div>
      <br/><br/><br/>
       <div><a href='/'><i className='material-icons'>exit_to_app</i>CERRAR SESIÓN</a></div>
    </div>
          </div>
          <div className='col s12 m8 l9'>
         <EstudianteTableTest alumno={alumno} />
          </div>
        </div>
      </span>
    );
  }
}
