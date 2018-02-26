import * as React from 'react';
import { IRouter, Link } from 'react-router';
import { IGrupo, IRouterContext } from '../../types';
import { url } from '../../util';


import GruposTable from './GruposTable';


interface IFindGruposPageProps {
  location: HistoryModule.Location;
}

interface IFindGruposPageState {
  grupos?: IGrupo[];
  filter?: string;
}

const getFilterFromLocation = (location) => {
  return location.query ? (location.query as any).name : null;
};

export default class FindGruposPage extends React.Component<IFindGruposPageProps, IFindGruposPageState> {
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
      this.fetchData(filter);
    }
  }

  componentWillReceiveProps(nextProps: IFindGruposPageProps) {
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

  /**
   * Invoked when the submit button was pressed.
   * 
   * This method updates the URL with the entered name. The change of the URL
   * leads to new properties and thus results in rerending
   */
  submitSearchForm() {
    const { filter } = this.state;

    this.context.router.push({
      pathname: '/grupo/list',
      query: { 'name': filter || '' }
    });
  }

  /** 
   * Actually loads data from the server
   */
  fetchData(filter: string) {
    const query = filter ? encodeURIComponent(filter) : '';
    const requestUrl = url('api/grupos/list?name=' + query);

    fetch(requestUrl)
      .then(response => response.json())
      .then(grupos => { this.setState({ grupos }); });
  }

  render() {
    const { filter, grupos } = this.state;

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
          <h2 className='center'>Grupos</h2>
          <form className='form-horizontal' action='javascript:void(0)'>
            <div className='form-group'>
              <div className='control-group' id='name'>
                <label className='col-sm-2 control-label'>Buscar por Apellido </label>
                <div className='input-field inline'>
                  <input  name='filter' value={filter || ''} onChange={this.onFilterChange} size={30} maxLength={80} />
                  { /* <span className='help-inline'><form:errors path='*'/></span> TODO */}
                </div>
                 <a onClick={this.submitSearchForm} className='btn-floating btn-small waves-effect waves-light blue'><i className='material-icons'>search</i></a>
              </div>
            </div>
          </form>
          </div>
          </div>
        </section>
        <br/>
        <GruposTable grupos={grupos} />
      </span>
    );
  }
};

