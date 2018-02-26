import * as React from 'react';

import { IResultado } from '../../types';
import { browserHistory} from 'react-router';

// import '../../../public/js/materialize.js';
// import '../../../public/js/materialize.min.js';
export default ({resultado}: { resultado: IResultado }) => (
  <section>
    <div className='center-align'>
     <div><a onClick={browserHistory.goBack} className='btn-floating btn-small waves-effect waves-light blue'><i className='material-icons'>arrow_back</i></a></div><br/>
      <img className='circle responsive-img' src='http://www.minhaseconomias.com.br/wp-content/uploads/2014/10/novas_funcio_graficos.png?20a14a'/>
      <div className='divider'></div>
      <h4 className='center-align cyan-text text-darken-2'>{resultado.test}</h4>
      <div className='divider'></div>
      <br/>
      <h5 className='cyan-text'>Fec. Resolución: <span className='cyan-text text-darken-2'>{resultado.date}</span></h5>
    </div>
  </section>
);