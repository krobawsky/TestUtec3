import * as React from 'react';

import { Link } from 'react-router';
import { browserHistory} from 'react-router';
import { url } from '../../util';

import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from '../../../node_modules/recharts';
import { LineChart, Line, Cell} from '../../../node_modules/recharts';
import { BarChart, Bar} from '../../../node_modules/recharts';
import { AreaChart, Area, Scatter, ScatterChart, ZAxis } from '../../../node_modules/recharts';
import { PieChart, Pie } from '../../../node_modules/recharts';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ReferenceLine } from '../../../node_modules/recharts';
 import * as html2canvas from '../../../node_modules/html2canvas';
 import * as jsPDF from '../../../node_modules/jspdf';

import ResultadoInformation from './ResultadoInformation';
import ResultadoGraficos from './ResultadoGraficos';

import { IResultado , IAlumno } from '../../types';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const tipos = [{ tipo: 'Aceptación', ab: 'A'}, { tipo: 'Afrontamiento Directo', ab: 'AD'} , { tipo: 'Análisis de las Emociones', ab: 'AE'},
 { tipo: 'Búsqueda de Soporte Emocional', ab: 'BSE'}, { tipo: 'Búsqueda de Soporte Social', ab: 'BSE'} , { tipo: 'Conductas Inadecuadas', ab: 'CI'},
  { tipo: 'Distracción', ab: 'D'}, { tipo: 'Negación', ab: 'N'}, { tipo: 'Planificación de Actividades', ab: 'PA'}, { tipo: 'Retracción del Afrontamiento', ab: 'RA'},
   { tipo: 'Reinterpretación Positiva de la Experiencia', ab: 'RPE'} , { tipo: 'Retomo a la Religión' , ab: 'RR'}, { tipo: 'Superación de Actividades Competitivas' , ab: 'SAC'}];

interface IResultadoPageProps {
  params?: { resultadoId?: string , alumnoId?: string};
}

interface IResultadoPageState {
  resultado?: IResultado;
  alumno?: IAlumno;
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
    if (params && params.alumnoId) {
      const fetchUrl = url(`/api/alumno/${params.alumnoId}`);
      fetch(fetchUrl)
        .then(response => response.json())
        .then(alumno => this.setState({ alumno }));
    }
  }

  onChange(value) {
    console.log(value);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save('resultado.pdf');
      });
  }

  render() {
    const { resultado, alumno } = this.state;

    if (!resultado) {
      return <h2>No resultado loaded</h2>;
    }

    return (
      <span>
        <br></br>
        <div style= {{borderStyle: 'solid', width: '210mm', minHeight: '297mm', marginLeft: 'auto', marginRight: 'auto'}}>
        <div className='row' id='divToPrint' style={{width: '210mm', minHeight: '297mm', marginLeft: 'auto', marginRight: 'auto'}}>
          <div className='container'>
              <br/>
              <img src='/images/logo.png'/>
              <br/>
              <h5 className='center'>Resultados: {resultado.test}</h5>
              <br/>
              <h6 style={{fontWeight: 'bold'}}> Nombre : {alumno.firstName} {alumno.lastName}</h6>
              <h6 style={{fontWeight: 'bold'}}> Fecha : {resultado.date} </h6><br/>
              <div className='divider black'></div>
               <h5 className='center'>Gráficos</h5><br/>
          </div>
          {resultado.test === 'Test del Estres' ? (
            <div>
          <div className='row'>
            <div className='col s8'>
              <ResponsiveContainer width='100%' height={300}>
              <BarChart data={resultado.valores} margin={{top: 5}}>
              <Bar dataKey='value'>
              {
              resultado.valores.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
              </Bar>
              <XAxis dataKey='tipo'/>
              <CartesianGrid strokeDasharray='3 3'/>
              <YAxis/>
              <Tooltip/>
              </BarChart>
              </ResponsiveContainer>
              <ResponsiveContainer width='100%' height={300}>
              <RadarChart outerRadius={100} width={900} height={400} data={resultado.valores}>
              <Radar dataKey='value' stroke='#FF8042' fill='#FF8042' fillOpacity={0.6}/>
              <PolarAngleAxis dataKey='tipo' />
              <PolarGrid />
              <PolarRadiusAxis />
              </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className='col s4'>
            <div className='card-panel grey' style={{marginRight: '20px'}}>
            {tipos.map(un => (<h6 className='white-text'>{un.ab} : {un.tipo}</h6>))}
              </div>
            </div>
          </div>
          <div className='row'>
          <div className='card-panel grey' style={{marginLeft: '30px', marginRight: '30px'}}>
          <h6 className='white-text'>{resultado.valores.map(valor => valor.descripcion).join('. ')}</h6>
          </div>
          </div>
          </div>
          ) : (
          <div className='row'>
            <div className='col s12'>
              <ResponsiveContainer width='100%' height={300}>
                  <AreaChart width={600} height={400} data={resultado.valores.sort((a, b) => Number(a.descripcion) - Number(b.descripcion))}
                margin={{top: 10, right: 40, left: 0, bottom: 0}}>
                <XAxis dataKey='tipo'/>
                <YAxis/>
                <CartesianGrid strokeDasharray='3 3'/>
                <Tooltip/>
                <Area type='monotone' dataKey='value' stroke='#3E84D9' fill='#3E84D9' />
              </AreaChart>
              </ResponsiveContainer><br/>
              <ResponsiveContainer width='100%' height={300}>
                <ScatterChart width={600} height={400} margin={{top: 10, right: 40, bottom: 0, left: 0}}>
                <XAxis dataKey={'tipo'} name='tipo'/>
                <YAxis dataKey={'value'} name='value'/>
                <ZAxis range={[100]}/>
                <CartesianGrid />
                <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                <Scatter name='tipo' data={resultado.valores.sort((a, b) => Number(a.descripcion) - Number(b.descripcion))} fill='#8884d8' line shape='circle'/>
              </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
          )}
          </div>
        <button className='btn btn-default grey left' style={{marginTop: '20px'}} onClick={browserHistory.goBack}>Cancelar</button>
         <button className='btn btn-default right' style={{marginTop: '20px'}} onClick={this.printDocument}>Descargar</button>
        </div>
         <br/>
      </span>
    );
  }
};