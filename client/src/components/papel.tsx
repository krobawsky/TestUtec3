import * as React from 'react';

export default () => (
<div>
  <div class='section white'>
  </div>
   <div class='row container'>
      <h2 class='header'>Iniciar sesión</h2>
      <p class='grey-text text-darken-3 lighten-3'>Eliga el tipo de usuario que se desea ingresar.
       <a href='loginalumno'>
       <span className='black-text name'>
       <button className='btn waves-effect waves-light' type='submit' name='action'>Alumno</button>
       </span>
       </a>
        <a href='loginadmin'>   <span className='black-text name'><button className='btn waves-effect waves-light' type='submit' name='action'>Psicólogo</button>  </span></a>
</p><br/>
  </div>
   <div className='container-fluid'>
      <div className='container xd-container'>
  <div className='card'>
    <div className='card-image waves-effect waves-block waves-light'>
       <img src='images/utec.jpg'  width='10px' />
    </div>
    <div className='card-content'>
      <span className='card-title activator grey-text text-darken-4'>UTEC - Universidad de Ingeniería y Tecnología<i className='material-icons right'>more_vert</i></span>
      <p><a href='https://www.utec.edu.pe/'>UTEC</a></p>
    </div>
    <div className='card-reveal'>
      <span className='card-title grey-text text-darken-4'>UTEC - Universidad de Ingeniería y Tecnología<i className='material-icons right'>close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
   </div>
    </div>
  </div>
);