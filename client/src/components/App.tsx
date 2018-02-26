import * as React from 'react';
import Menu from './Menu';
import { browserHistory} from 'react-router';

export default ({location, children}) => (
  <div>
    <div className='container-fluid'>
     <Menu name={location.pathname} />
     <br></br>
      <div className='container xd-container'>
        {children}
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
