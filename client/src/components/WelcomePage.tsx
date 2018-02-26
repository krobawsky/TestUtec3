import * as React from 'react';

export default () => (
<div>
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
<br/>
    <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
              <span className='card-title'>Enviar Test</span>
                  <div className='row'>
                  <form className='col s12'>
                    <div className='row'>
                      <div className='col s12'>
                        Para:
                        <div className='input-field col12'>
                        <input id='email' type='email' className='validate'/>
                        <label htmlFor='email' data-error='wrong' data-success='right'>Ingrese correo del alumno </label>
                         </div>
                      </div>
                   </div>
                  <div className='row'>
                    <div className='col s12'> Test:
                      <div className='row'>
                        <div className='col s12'>
                        <div className='input-field col s12'>
                          <select multiple>
                          <option value='' disabled selected>Seleccione los test</option>
                          <option value='1'>Test 1</option>
                          <option value='2'>Test 2</option>
                          <option value='3'>Test 3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                      <div className='col s12'>
                        Asunto:
                        <div className='input-field inline'>
                        <input id='asunto' type='text' />
                        <label htmlFor='asunto' data-error='wrong' data-success='right'>Asunto</label>
                         </div>
                      </div>
                   </div>
                  </form>
            </div>
        <div className='right'>
        <button className='btn waves-effect waves-light' type='submit' name='action'>Enviar
        <i className='material-icons right'>send</i>
        </button>
        </div>
        <br/>
            </div>
          </div>
        </div>
     </div>
</div>
);

