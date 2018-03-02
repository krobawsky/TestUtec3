import * as React from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import { IResultado } from '../../types';

import { PolarGrid, PolarAngleAxis, PolarRadiusAxis, ReferenceLine, Brush } from '../../../node_modules/recharts';
import { XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, Cell } from '../../../node_modules/recharts';
import { Scatter, ScatterChart, Line, BarChart, Bar, AreaChart, Area} from '../../../node_modules/recharts';
import { ResponsiveContainer} from '../../../node_modules/recharts';
import { Radar, RadarChart } from '../../../node_modules/recharts';
import { ComposedChart } from '../../../node_modules/recharts';
import { Tabs, Tab } from '../../../node_modules/react-materialize';

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

let arrayPrueba = [];

const CustomTooltip  = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },
  getIntroOfPage(label) {
      if (label === 'RA') {
        return 'Retracción del Afrontamiento';
      } else if (label === 'RR') {
        return 'Retomo a la Religión';
      } else if (label === 'PA') {
        return 'Planificación de Actividades';
      } else if (label === 'CI') {
        return 'Conductas Inadecuadas';
      } else if (label === 'A') {
        return 'Aceptación';
      } else if (label === 'SAC') {
        return 'Superación de Actividades Competitivas';
      } else if (label === 'BSS') {
        return 'Búsqueda de Soporte Social';
      } else if (label === 'D') {
        return 'Distracción';
      } else if (label === 'AE') {
        return 'Análisis de las Emociones';
      } else if (label === 'N') {
        return 'Negación';
      } else if (label === 'BSE') {
        return 'Búsqueda de Soporte Emocional';
      } else if (label === 'RPE') {
        return 'Reinterpretación Positiva de la Experiencia';
      } else if (label === 'AD') {
        return 'Afrontamiento Directo';
      }
  },

  render() {
    const { active } = this.props;
    if (active) {
      const { payload, label } = this.props;
      return (
        <div className='custom-tooltip' style={{backgroundColor: 'white', padding: '10px'}}>
          <p className='label'>{`${label} : ${payload[0].value}`}</p>
          <p className='intro'>{this.getIntroOfPage(label)}</p>
        </div>
      );
    }
    return null;
  }
});

const CustomTooltip2  = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },
  getIntroOfPage(label) {
      if (label === 'X') {
        return 'Sinceridad';
      } else if (label === 'Y') {
        return 'Deseabilidad Social';
      } else if (label === 'Z') {
        return 'Autodescalificación';
      } else if (label === '1') {
        return 'Esquizoide';
      } else if (label === '2') {
        return 'Evitativo';
      } else if (label === '3') {
        return 'Dependiente';
      } else if (label === '4') {
        return 'Histriónico';
      } else if (label === '5') {
        return 'Narcisita';
      } else if (label === '6A') {
        return 'Antisocial';
      } else if (label === '6B') {
        return 'Agresivo-sádico';
      } else if (label === '7') {
        return 'Compulsivo';
      } else if (label === '8A') {
        return 'Pasivo-agresivo';
      } else if (label === '8B') {
        return 'Autoderrotista';
      } else if (label === 'S') {
        return 'Esquizotípico';
      } else if (label === 'B') {
        return 'Borderline';
      } else if (label === 'P') {
        return 'Paranoide';
      } else if (label === 'A') {
        return 'Ansiedad';
      } else if (label === 'H') {
        return 'Somatoformo';
      } else if (label === 'A') {
        return 'Ansiedad';
      } else if (label === 'N') {
        return 'Bipolar';
      } else if (label === 'D') {
        return 'Distimia';
      } else if (label === 'B') {
        return 'Dependencia de alcohol';
      } else if (label === 'T') {
        return 'Dependencia de drogas';
      } else if (label === 'SS') {
        return 'Desorden del pensamiento';
      } else if (label === 'CC') {
        return 'Depresión mayor';
      } else if (label === 'PP') {
        return 'Desorden delusional';
      }
  },

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className='custom-tooltip' style={{backgroundColor: 'white', padding: '10px'}}>
          <p className='label'>{`${label} : ${payload[0].value}`}</p>
          <p className='intro'>{this.getIntroOfPage(label)}</p>
        </div>
      );
    }
    return null;
  }
});

const CustomTooltip3  = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },
  getIntroOfPage(label) {
      if (label === 'IA') {
        return 'INTRAPERSONAL';
      } else if (label === 'CM') {
        return 'Conocimiento Emocional de si mismo';
      } else if (label === 'AS') {
        return 'Asertividad';
      } else if (label === 'AC') {
        return 'Autoconcepto';
      } else if (label === 'AR') {
        return 'Autorrealizacion';
      } else if (label === 'IN') {
        return 'Independencia';
      } else if (label === 'IE') {
        return 'INTERPERSONAL';
      } else if (label === 'EM') {
        return 'Empatia';
      } else if (label === 'RI') {
        return 'Relaciones Interpersonales';
      } else if (label === 'RS') {
        return 'Responsabilidad Social';
      } else if (label === 'AD') {
        return 'ADAPTIBILIDAD';
      } else if (label === 'SP') {
        return 'Solucion de Problemas';
      } else if (label === 'PR') {
        return 'Prueba de la realidad';
      } else if (label === 'FL') {
        return 'Flexibilidad';
      } else if (label === 'MT') {
        return 'MANEJO DE ESTRES';
      } else if (label === 'ME') {
        return 'Tolerancia al Stress';
      } else if (label === 'CI') {
        return 'Control de Impulsos';
      } else if (label === 'EA') {
        return 'ESTADO DE ANIMO G';
      } else if (label === 'FE') {
        return 'Felicidad';
      } else if (label === 'OP') {
        return 'Optimismo';
      } else if (label === 'G') {
        return 'GENERAL';
      }
  },

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className='custom-tooltip' style={{backgroundColor: 'white', padding: '10px'}}>
          <p className='label'>{`${label} : ${payload[0].value}`}</p>
          <p className='intro'>{this.getIntroOfPage(label)}</p>
        </div>
      );
    }
    return null;
  }
});

export default ({resultado}: { resultado: IResultado }) => (
  <section>
    {resultado.test === 'Test del Estres' ? (
      <div>
        <div className='card blue-grey darken-1' key={resultado.id}>
          <div className='card-content white-text'>
            <span className='card-title'>Gráficos</span>
          </div>
          <div className='card-content white'>
            <Tabs className='z-depth-1 tabs-fixed-width'>
              <Tab title='Barras' active>
                <br/>
                <ResponsiveContainer width='100%' height={300}>
                  <BarChart data={resultado.valores.sort((a, b) => Number(a.poss) - Number(b.poss))} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <Bar dataKey='value'>
                      {
                        resultado.valores.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                      }
                    </Bar>
                    <XAxis dataKey='tipo'/>
                    <CartesianGrid strokeDasharray='3 3'/>
                     <Tooltip content={<CustomTooltip/>}/>
                    <YAxis/>
                  </BarChart>
                </ResponsiveContainer>
              </Tab>
              <Tab title='Area' active>
                <br/>
                <ResponsiveContainer width='100%' height={300}>
                  <AreaChart width={600} height={400} data={resultado.valores.sort((a, b) => Number(a.poss) - Number(b.poss))} margin={{top: 10, right: 10, left: 0, bottom: 0}}>
                    <XAxis dataKey='tipo'/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray='3 3'/>
                    <ReferenceLine y={2} label='Estrategia poco utilizada' stroke='red' strokeDasharray='3 3'/>
                    <ReferenceLine y={4} label='Estrategia utilizada con frecuencia' stroke='red' strokeDasharray='3 3'/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Area type='monotone' dataKey='value' stroke='#E67E22' fill='#FAE5D3' />
                  </AreaChart>
                </ResponsiveContainer>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card-panel teal white-text'>
              <h6>Leyenda</h6>
              <div className='divider'></div>
              {tipos.map(un => (<h6><b>{un.ab}</b> : {un.tipo}</h6>))}
            </div>
            <div className='card-panel cyan darken-2 white-text'>
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
          <div className='col s12 m6'>
            <div className='card-panel light-blue darken-3'>
              <h6 className='white-text'>Descripción</h6>
              <div className='divider'></div>
              {resultado.valores.map(res => (<p className='white-text'> - { res.descripcion }. </p>))}
            </div>
          </div>
        </div>
      </div>
      ) : resultado.test === 'Test de Millon' ? (
      <div>
        <div className='card blue-grey darken-1'>
          <div className='card-content white-text'>
            <span className='card-title'>Gráficos</span>
          </div>
          <div className='card-content white'>
           <Tabs className='z-depth-1 tabs-fixed-width'>
              <Tab title='Area' active>
                <br/>
                 <ResponsiveContainer width='100%' height={300}>
                  <AreaChart width={600} height={400} data={resultado.valores.sort((a, b) => Number(a.poss) - Number(b.poss))}
                    margin={{top: 10, right: 10, left: 0, bottom: 0}}>
                    <XAxis dataKey='tipo'/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray='3 3'/>
                    <ReferenceLine y={59} label='Indicador bajo' stroke='red' strokeDasharray='3 3'/>
                    <ReferenceLine y={74} label='Indicador sugestivo' stroke='red' strokeDasharray='3 3'/>
                    <ReferenceLine y={84} label='Indicador moderado' stroke='red' strokeDasharray='3 3'/>
                    <ReferenceLine y={140} label='Indicador alto' stroke='red' strokeDasharray='3 3'/>
                    <Tooltip content={<CustomTooltip2/>}/>
                    <Area type='monotone' dataKey='value' stroke='#3E84D9' fill='#3E84D9' />
                  </AreaChart>
                </ResponsiveContainer>
              </Tab>
              <Tab title='Lineal' active>
                <br/>
                <ResponsiveContainer width='100%' height={300}>
                  <ScatterChart width={600} height={400} margin={{top: 10, right: 10, bottom: 0, left: 0}}>
                    <XAxis dataKey={'tipo'} name='tipo'/>
                    <YAxis dataKey={'value'} name='value'/>
                    <ZAxis range={[100]}/>
                    <CartesianGrid />
                    <Tooltip content={<CustomTooltip2/>}/>
                    <Scatter name='tipo' data={resultado.valores.sort((a, b) => Number(a.poss) - Number(b.poss))} fill='#8884d8' line shape='circle'/>
                  </ScatterChart>
               </ResponsiveContainer>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card-panel teal white-text'>
              <h6>Leyenda</h6>
              <div className='divider'></div>
              {tipos2.map(un => (<h6><b>{un.ab}</b> : {un.tipo}</h6>))}
            </div>
          </div>
        </div>
      </div>
      ) : (
      <div>
        <div className='card blue-grey darken-1'>
          <div className='card-content white-text'>
            <span className='card-title'>Gráficos</span>
          </div>
          <div className='card-content white'>
           <Tabs className='z-depth-1 tabs-fixed-width'>
              <Tab title='Barras' active>
                <br/>
                 <ResponsiveContainer width='100%' height={300}>
                  <BarChart data={resultado.valores.sort((a, b) => Number(a.descripcion) - Number(b.descripcion))} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey='tipo'/>
                    <YAxis/>
                    <Tooltip content={<CustomTooltip3/>}/>
                    <ReferenceLine y={0} stroke='#000'/>
                    <Brush dataKey='tipo' height={30} stroke='#8884d8'/>
                    <Bar dataKey='value'>
                      {
                        resultado.valores.map((entry, index) => <Cell fill={COLORS2[index % COLORS2.length]}/>)
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Tab>
              <Tab title='Area' active>
                <br/>
                <ResponsiveContainer width='100%' height={300}>
                  <AreaChart width={600} height={400} data={resultado.valores.sort((a, b) => Number(a.descripcion) - Number(b.descripcion))}
                    margin={{top: 10, right: 10, left: 0, bottom: 0}}>
                    <XAxis dataKey='tipo'/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray='3 3'/>
                    <ReferenceLine y={89} label='Poco desarrollada:' stroke='red' strokeDasharray='3 3'/>
                    <ReferenceLine y={109} label='Adecuada' stroke='red' strokeDasharray='3 3'/>
                    <ReferenceLine y={119} label='Altamente desarrollada' stroke='red' strokeDasharray='3 3'/>
                    <ReferenceLine y={155} label='Altamente desarrollada' stroke='red' strokeDasharray='3 3'/>
                    <Tooltip content={<CustomTooltip3/>}/>
                    <Area type='monotone' dataKey='value' stroke='#148F77' fill='#D1F2EB' />
                  </AreaChart>
               </ResponsiveContainer>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card-panel teal white-text'>
              <h6>Leyenda</h6>
              <div className='divider'></div>
              {tipos3.map(un => (<h6><b>{un.ab}</b> : {un.tipo}</h6>))}
            </div>
          </div>
        </div>
      </div>
      )
    }
  </section>
);