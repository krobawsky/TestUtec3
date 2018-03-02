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
const COLORS2 = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c'];

const tipos = [{ tipo: 'Afrontamiento Directo', ab: 'AD'}, { tipo: 'Planificación de Actividades', ab: 'PA'}, { tipo: 'Superación de Actividades Competitivas' , ab: 'SAC'}, { tipo: 'Retracción del Afrontamiento', ab: 'RA'},
  { tipo: 'Búsqueda de Soporte Social', ab: 'BSE'}, { tipo: 'Búsqueda de Soporte Emocional', ab: 'BSE'}, { tipo: 'Reinterpretación Positiva de la Experiencia', ab: 'RPE'}, { tipo: 'Aceptación', ab: 'A'},
  { tipo: 'Retomo a la Religión' , ab: 'RR'}, { tipo: 'Análisis de las Emociones', ab: 'AE'}, { tipo: 'Negación', ab: 'N'}, { tipo: 'Conductas Inadecuadas', ab: 'CI'}, { tipo: 'Distracción', ab: 'D'}];
const tipos2 = [{ tipo: 'Sinceridad', ab: 'X'}, { tipo: 'Deseabilidad Social', ab: 'Y'}, { tipo: 'Autodescalificación', ab: 'Z'}, { tipo: 'Esquizoide', ab: '1'},
   { tipo: 'Evitativo', ab: '2'}, { tipo: 'Dependiente', ab: '3'}, { tipo: 'Histriónico', ab: '4'} , { tipo: 'Narcisita', ab: '5'},
   { tipo: 'Antisocial', ab: '6A'}, { tipo: 'Agresivo-sádico', ab: '6B'}, { tipo: 'Compulsivo', ab: '7'}, { tipo: 'Pasivo-agresivo', ab: '8A'},
   { tipo: 'Autoderrotista', ab: '8B'}, { tipo: 'Esquizotípico' , ab: 'S'}, { tipo: 'Borderline' , ab: 'B'}, { tipo: 'Paranoide' , ab: 'P'},
   { tipo: 'Ansiedad' , ab: 'A'}, { tipo: 'Somatoformo' , ab: 'H'}, { tipo: 'Bipolar' , ab: 'N'}, { tipo: 'Distimia' , ab: 'D'},
   { tipo: 'Dependencia de alcohol' , ab: 'B'}, { tipo: 'Dependencia de drogas' , ab: 'T'}, { tipo: 'Desorden del pensamiento' , ab: 'SS'},
   { tipo: 'Depresión mayor' , ab: 'CC'}, { tipo: 'Desorden delusional' , ab: 'PP'}];
const tipos3 = [{ tipo: 'INTRAPERSONAL', ab: 'IA'}, { tipo: 'Conocimiento Emocional de si mismo', ab: 'CM'}, { tipo: 'Asertividad', ab: 'AS'}, { tipo: 'Autoconcepto', ab: 'AC'}, { tipo: 'Autorrealizacion', ab: 'AR'}, { tipo: 'Independencia', ab: 'IN'},
   { tipo: 'INTERPERSONAL', ab: 'IE'}, { tipo: 'Empatia', ab: 'EM'}, { tipo: 'Relaciones Interpersonales', ab: 'RI'} , { tipo: 'Responsabilidad Social', ab: 'RS'},
   { tipo: 'ADAPTIBILIDAD', ab: 'AD'}, { tipo: 'Solucion de Problemas', ab: 'SP'}, { tipo: 'Prueba de la realidad', ab: 'PR'}, { tipo: 'Flexibilidad', ab: 'FL'},
   { tipo: 'MANEJO DE ESTRES' , ab: 'MT'}, { tipo: 'Tolerancia al Stress' , ab: 'ME'}, { tipo: 'Control de Impulsos' , ab: 'CI'},
   { tipo: 'ESTADO DE ANIMO G' , ab: 'EA'}, { tipo: 'Felicidad' , ab: 'FE'}, { tipo: 'Optimismo' , ab: 'OP'}, { tipo: 'GENERAL' , ab: 'G'}];

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
            { resultado.test === 'Test del Estres' ? (
              <div className='row'>
                <div className='col s8'>
                  <ResponsiveContainer width='100%' height={300}>
                    <BarChart data={resultado.valores.sort((a, b) => Number(a.poss) - Number(b.poss))} margin={{top: 5}}>
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
                </div>
                <div className='col s4'>
                  <div className='card-panel grey' style={{marginRight: '20px', padding: '8px'}}>
                    {tipos.map(un => (<h6 className='white-text'><b>{un.ab}</b> : {un.tipo}</h6>))}
                  </div>
                </div>
                <div className='col s12'>
                  <div className='card-panel grey white-text' style={{marginLeft: '30px', marginRight: '30px'}}>
                    <h6>Areas</h6>
                    <div className='divider'></div>
                    <blockquote><b>Afrontamiento directo:</b> Realización de una acción directa y racional para solucionar el problema.</blockquote>
                    <blockquote><b>Planificación de actividades:</b> Análisis racional del problema para generar estrategias que puedan alterar la situación problema.</blockquote>
                    <blockquote><b>Supresión de actividades distractoras:</b> Búsqueda de soluciones centrándose exclusivamente en el problema objetivo.</blockquote>
                    <blockquote><b>Demora del afrontamiento:</b> Pensamientos distractivos para evitar pensar en el problema. </blockquote>
                    <blockquote><b>Búsqueda de soporte social:</b> Buscar información y consejo en los demás sobre las posibles soluciones al problema.</blockquote>
                    <blockquote><b>Búsqueda de soporte emocional:</b> Búsqueda de comprensión en los demás sobre la situación problema.</blockquote>
                    <blockquote><b>Reinterpretación positiva:</b> Afrontamiento activo enfocado a crear un nuevo significado a la situación problema, intentando sacar la parte positiva.</blockquote>
                    <blockquote><b>Aceptación:</b> Aceptación de la situación negativa y de las consecuencias en la vida del sujeto.</blockquote>
                    <blockquote><b>Retomo a la Religión:</b> Búsqueda de consuelo en un poder superior.</blockquote>
                    <blockquote><b>Análisis de las Emociones:</b> Regularización de los recursos para expresar u ocultar nuestros sentimientos.</blockquote>
                    <blockquote><b>Negación:</b> Ausencia de aceptación del problema, por lo que se evita distorsionando la realidad para que su valoración sea acorde con nuestra valoración.</blockquote>
                    <blockquote><b>Conductas Inadecuadas:</b> Consumo de drogas, alcohol, conductas que ponen en riesgo la integra del sujeto.</blockquote>
                    <blockquote><b>Distracción:</b> Concentrarse en otros elementos y evitar/postergar enfrentar el conflicto.</blockquote>
                  </div>
                </div>
              </div>
          ) : resultado.test === 'Test de Millon' ? (
          <div className='row'>
            <div className='col s12'>
              <ResponsiveContainer width='100%' height={300}>
                <AreaChart width={600} height={400} data={resultado.valores.sort((a, b) => Number(a.poss) - Number(b.poss))}
                margin={{top: 10, right: 40, left: 0, bottom: 0}}>
                  <XAxis dataKey='tipo'/>
                  <YAxis/>
                  <CartesianGrid strokeDasharray='3 3'/>
                  <Tooltip/>
                  <Area type='monotone' dataKey='value' stroke='#3E84D9' fill='#3E84D9' />
                </AreaChart>
              </ResponsiveContainer><br/>
            </div>
            <div className='row'>
              <div className='col s4'>
                <div className='card-panel grey' style={{marginLeft: '30px', padding: '5px'}}>
                  {tipos2.map(un => (<h6 className='white-text'>{un.ab} : {un.tipo} </h6>))}
                </div>
              </div>
            </div>
          </div>
          ) : (
          <div className='row'>
            <div className='col s12'>
              <ResponsiveContainer width='90%' height={300}>
                <BarChart data={resultado.valores.sort((a, b) => Number(a.poss) - Number(b.poss))} margin={{top: 5}}>
                    <Bar dataKey='value'>
                    {
                    resultado.valores.map((entry, index) => <Cell fill={COLORS2[index % COLORS.length]}/>)
                    }
                    </Bar>
                    <XAxis dataKey='tipo'/>
                    <YAxis/>
                    <Tooltip/>
                </BarChart>
              </ResponsiveContainer><br/>
            </div>
            <div className='row'>
              <div className='col s4'>
                <div className='card-panel grey' style={{marginLeft: '30px', padding: '5px'}}>
                  {tipos3.map(un => (<h6 className='white-text'>{un.ab} : {un.tipo} </h6>))}
                </div>
              </div>
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