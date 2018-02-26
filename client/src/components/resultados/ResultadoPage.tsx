import * as React from 'react';

import { Link } from 'react-router';
import { url } from '../../util';

import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from '../../../node_modules/recharts';
import { LineChart, Line } from '../../../node_modules/recharts';
import { BarChart, Bar} from '../../../node_modules/recharts';
import { AreaChart, Area } from '../../../node_modules/recharts';
import { PieChart, Pie } from '../../../node_modules/recharts';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ReferenceLine } from '../../../node_modules/recharts';
 import * as html2canvas from '../../../node_modules/html2canvas';
 import * as jsPDF from '../../../node_modules/jspdf';

import ResultadoInformation from './ResultadoInformation';
import ResultadoGraficos from './ResultadoGraficos';

import { IResultado } from '../../types';

interface IResultadoPageProps {
  params?: { resultadoId?: string , alumnoId?: string};
}

interface IResultadoPageState {
  resultado?: IResultado;
}

export default class ResultPage extends React.Component<IResultadoPageProps, IResultadoPageState> {

  constructor() {
    super();

    this.state = { };
  }

  componentDidMount() {
    const { params } = this.props;

    if (params && params.resultadoId) {
      const fetchUrl = url(`/api/alumnos/${params.alumnoId}/resultados/${params.resultadoId}`);
      fetch(fetchUrl)
        .then(response => response.json())
        .then(resultado => { console.log('resultado', resultado); this.setState({ resultado }); });
    }
  }

  onChange(value) {
    console.log(value);
  }

  render() {
    const { resultado } = this.state;
     const { params } = this.props;
    if (!resultado) {
      return <h2>No resultado loaded</h2>;
    }

    return (

      <span>
        <br></br><br></br>
        <div className='row' id='divToPrint'>
          <div className='col s12 m4 l3 center'>
            <ResultadoInformation resultado={resultado} />
      <Link className='waves-effect waves-light btn red' to={`/alumnos/${params.alumnoId}/resultados/${params.resultadoId}/print`}><i className='material-icons right'>picture_as_pdf</i>Descargar</Link>
          </div>
          <div className='col s12 m8 l9'>
            <ResultadoGraficos resultado={resultado} />
          </div>
        </div>
      </span>
    );
  }
};