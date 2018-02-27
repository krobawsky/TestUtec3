import * as React from 'react';

import { Link } from 'react-router';
import { IAlumno } from '../../types';
import { url } from '../../util';

import AlumnoInformation from './AlumnoInformation';
import AlumnoResultado from './AlumnoResultado';

interface IAlumnosPageProps {
  params?: { alumnoId?: string };
}

interface IAlumnoPageState {
  alumno?: IAlumno;
}

export default class AlumnosPage extends React.Component<IAlumnosPageProps, IAlumnoPageState> {

  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { params } = this.props;

    if (params && params.alumnoId) {
      const fetchUrl = url(`/api/alumno/${params.alumnoId}`);
      fetch(fetchUrl)
        .then(response => response.json())
        .then(alumno => this.setState({ alumno }));
    }
  }

  render() {
    const { alumno } = this.state;

    if (!alumno) {
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
        <AlumnoInformation alumno={alumno} />
          </div>
          <div className='col s12 m8 l9'>
         <AlumnoResultado alumno={alumno} />
          </div>
        </div>
      </span>
    );
  }
}
