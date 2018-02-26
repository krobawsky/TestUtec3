import * as React from 'react';

export default () => (
  <span>
  <ul id='slide-out' className='side-nav fixed'>
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
      <div className='container-fluid'>
      <div className='container xd-container'>
    <h3 height='700px'>Test enviado satisfactorimente</h3>
      </div>
      </div>
  </span>
);