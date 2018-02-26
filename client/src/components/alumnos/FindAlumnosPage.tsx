import * as React from 'react';
import { IRouter, Link } from 'react-router';
import { IAlumno, IRouterContext } from '../../types';
import { url } from '../../util';


import AlumnosTable from './AlumnosTable';


interface IFindAlumnosPageProps {
  location: HistoryModule.Location;
}

interface IFindAlumnosPageState {
  alumnos?: IAlumno[];
  filter?: string;
}

const getFilterFromLocation = (location) => {
  return location.query ? (location.query as any).lastName : null;
};

export default class FindAlumnosPage extends React.Component<IFindAlumnosPageProps, IFindAlumnosPageState> {
  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.submitSearchForm = this.submitSearchForm.bind(this);

    this.state = {
      filter: getFilterFromLocation(props.location)
    };
  }

  componentDidMount() {
    const { filter } = this.state;
    if (typeof filter === 'string') {
      // only load data on mount (initialy) if filter is specified
      // i.e. lastName query param in uri was set
      this.fetchData(filter);
    }
  }

  componentWillReceiveProps(nextProps: IFindAlumnosPageProps) {
    const { location } = nextProps;

    // read the filter from uri
    const filter = getFilterFromLocation(location);

    // set state
    this.setState({ filter });

    // load data according to filter
    this.fetchData(filter);
  }

  onFilterChange(event) {
    this.setState({
      filter: event.target.value as string
    });
  }

  submitSearchForm() {
    const { filter } = this.state;

    this.context.router.push({
      pathname: '/alumnos/list',
      query: { 'lastName': filter || '' }
    });
  }

  /** 
   * Actually loads data from the server
   */
  fetchData(filter: string) {
    const query = filter ? encodeURIComponent(filter) : '';
    const requestUrl = url('api/alumno/list?lastName=' + query);

    fetch(requestUrl)
      .then(response => response.json())
      .then(alumnos => { this.setState({ alumnos }); });
  }

  filtrarTest(test) {
    const requestUrl = url('api/alumnos/' + test);

    fetch(requestUrl)
      .then(response => response.json())
      .then(alumnos => { this.setState({ alumnos }); });

    const btn = document.getElementById('btn-enviar');
    btn.removeAttribute('style');

  }

  render() {
    const { filter, alumnos } = this.state;
    const test1 = 'Test del Estres';
    const test2 = 'Test de Millon';
    const test3 = 'Test ICE Baron';
    return (
      <span>
        <section>
        <div className='row'>
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
         <div className='col s11 container'>
          <h2 className='center'>Alumnos</h2>
          <form className='form-horizontal' action='javascript:void(0)'>
            <div className='form-group'>
              <div className='control-group' id='lastName'>
                <label className='col-sm-2 control-label'>Buscar por Apellido </label>
                <div className='input-field inline'>
                  <input  name='filter' value={filter || ''} onChange={this.onFilterChange} size={30} maxLength={80} />
                </div>
                 <a onClick={this.submitSearchForm} className='btn-floating btn-small waves-effect waves-light blue'><i className='material-icons'>search</i></a>
                  <div className='fixed-action-btn horizontal right' style={{position: 'relative', display: 'inline-block', right: '24px', marginTop: '30px'}}>
            <a className='btn-floating btn-small blue btn tooltipped' data-position='top' data-delay='50' data-tooltip='Filtrar por test'>
              <i className='material-icons'>find_in_page</i>
            </a>
            <ul>
             <li><a onClick={() => this.filtrarTest(test1)} className='btn-floating yellow darken-1 center btn tooltipped' data-position='bottom' data-delay='50' data-tooltip='Test del Estres'>E</a></li>
              <li><a onClick={() => this.filtrarTest(test2)} className='btn-floating red center btn tooltipped' data-position='bottom' data-delay='50' data-tooltip='Test Millon'>M</a></li>
              <li><a onClick={() => this.filtrarTest(test3)} className='btn-floating green center btn tooltipped' data-position='bottom' data-delay='50' data-tooltip='Test ICE Baron'>B</a></li>
            </ul>
          </div>
              </div>
        </div>
          </form>
        </div>
        </div>
        </section>
        <br/>
        <AlumnosTable alumnos={alumnos} />
        <button id='btn-enviar' style={{display: 'none'}} className='btn waves-effect waves-light' type='submit' name='action'>Enviar<i className='material-icons right'>send</i></button>
      </span>
    );
  }
};

