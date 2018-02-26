import * as React from 'react';

import { Link } from 'react-router';
import { IGrupo } from '../../types';
import { browserHistory} from 'react-router';

export default ({grupo}: { grupo: IGrupo }) => (
  <section>
     <div className='center-align'>
     <div><a onClick={browserHistory.goBack} className='btn-floating btn-small waves-effect waves-light blue'><i className='material-icons'>arrow_back</i></a></div><br/>
      <img className='circle responsive-img' src='https://www.almabay.com/common/marvel/images/default-male-avatar.png'/>
      <div className='divider'></div>
      <h4 className='center-align cyan-text text-darken-2'>{grupo.name}</h4>
      <div className='divider'></div>
      <h6 className='center-align cyan-text text-darken-2'>No han resuelto:</h6>
      <br/>
      <div style={{height: '100px', overflowY: 'scroll'}}>
      {grupo.alumnos.map(alumno =>
         alumno.resultados.map(resultado =>
             resultado.date === null ? (
             <p>{alumno.firstName}</p>
             ) : (
             null
             )))}
      </div>
    </div>
  </section>
);
