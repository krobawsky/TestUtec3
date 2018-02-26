import * as React from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import { IGrupo } from '../../types';

// import '../../../public/js/materialize.js';
// import '../../../public/js/materialize.min.js';

import { BarChart, Bar} from '../../../node_modules/recharts';
import { XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from '../../../node_modules/recharts';
import { Tabs, Tab } from '../../../node_modules/react-materialize';
import { Radar, RadarChart } from '../../../node_modules/recharts';
import { PolarGrid, PolarAngleAxis, PolarRadiusAxis, ReferenceLine } from '../../../node_modules/recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const tipos = [{ tipo: 'Aceptación', ab: 'A'}, { tipo: 'Afrontamiento Directo', ab: 'AD'} , { tipo: 'Análisis de las Emociones', ab: 'AE'},
 { tipo: 'Búsqueda de Soporte Emocional', ab: 'BSE'}, { tipo: 'Búsqueda de Soporte Social', ab: 'BSE'} , { tipo: 'Conductas Inadecuadas', ab: 'CI'},
  { tipo: 'Distracción', ab: 'D'}, { tipo: 'Negación', ab: 'N'}, { tipo: 'Planificación de Actividades', ab: 'PA'}, { tipo: 'Retracción del Afrontamiento', ab: 'RA'},
   { tipo: 'Reinterpretación Positiva de la Experiencia', ab: 'RPE'} , { tipo: 'Retomo a la Religión' , ab: 'RR'}, { tipo: 'Superación de Actividades Competitivas' , ab: 'SAC'}];
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
let total6 = 0;
let total7 = 0;
let total8 = 0;
let total9 = 0;
let total10 = 0;
let total11 = 0;
let total12 = 0;
let total13 = 0;
let valoresGen = [];
let valoresFin = [];
const valores1 = [];
const valores2 = [];
const valores3 = [];
const valores4 = [];
const valores5 = [];
const valores6 = [];
const valores7 = [];
const valores8 = [];
const valores9 = [];
const valores10 = [];
const valores11 = [];
const valores12 = [];
const valores13 = [];

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
        <div className='custom-tooltip' style={{backgroundColor: 'white', padding: '5px'}}>
          <p className='label'>{`${label} : ${payload[0].value}`}</p>
          <p className='intro'>{this.getIntroOfPage(label)}</p>
        </div>
      );
    }

    return null;
  }
});

export default ({grupo}: { grupo: IGrupo }) => (
  <section>
     {grupo.alumnos.map(alumno =>
  <div>
      <div>
         {alumno.resultados.map(resultado => {
             if (resultado.test === 'Test del Estres') {
            <p>hi</p>;
            <div>{resultado.valores.map((valor, index) => {
                   if (valor.tipo === 'A') {
                       valores1.push(valor.value);
                       total1 = valores1.reduce((a, v) => a + v);
                       console.log(total1 / valores1.length);
                  } else if (valor.tipo === 'AD') {
                       valores2.push(valor.value);
                       total2 = valores2.reduce((a, v) => a + v);
                       console.log(total2 / valores2.length);
                  } else if (valor.tipo === 'AE') {
                       valores3.push(valor.value);
                       total3 = valores3.reduce((a, v) => a + v);
                       console.log(total3 / valores3.length);
                  } else if (valor.tipo === 'BSE') {
                       valores4.push(valor.value);
                       total4 = valores4.reduce((a, v) => a + v);
                       console.log(total4 / valores4.length);
                  } else if (valor.tipo === 'BSS') {
                       valores5.push(valor.value);
                       total5 = valores5.reduce((a, v) => a + v);
                       console.log(total5 / valores5.length);
                  } else if (valor.tipo === 'CI') {
                       valores6.push(valor.value);
                       total6 = valores6.reduce((a, v) => a + v);
                       console.log(total6 / valores6.length);
                  } else if (valor.tipo === 'D') {
                       valores7.push(valor.value);
                       total7 = valores7.reduce((a, v) => a + v);
                       console.log(total7 / valores7.length);
                  } else if (valor.tipo === 'N') {
                       valores8.push(valor.value);
                       total8 = valores8.reduce((a, v) => a + v);
                       console.log(total8 / valores8.length);
                  } else if (valor.tipo === 'PA') {
                       valores9.push(valor.value);
                       total9 = valores9.reduce((a, v) => a + v);
                       console.log(total9 / valores9.length);
                  } else if (valor.tipo === 'RPE') {
                       valores10.push(valor.value);
                       total10 = valores10.reduce((a, v) => a + v);
                       console.log(total10 / valores10.length);
                  } else if (valor.tipo === 'RR') {
                       valores11.push(valor.value);
                       total11 = valores11.reduce((a, v) => a + v);
                       console.log(total11 / valores11.length);
                  } else if (valor.tipo === 'RA') {
                       valores12.push(valor.value);
                       total12 = valores12.reduce((a, v) => a + v);
                       console.log(total12 / valores12.length);
                  } else if (valor.tipo === 'SAC') {
                        valores13.push(valor.value);
                       total13 = valores13.reduce((a, v) => a + v);
                       console.log(total13 / valores13.length);
                  }
            })}</div>;
                 valoresGen.push({val: ((total1 / valores1.length).toFixed(2)) / 1 , tipo: 'A'});
                 valoresGen.push({val: ((total2 / valores2.length).toFixed(2)) / 1 , tipo: 'AD'});
                 valoresGen.push({val: ((total3 / valores3.length).toFixed(2)) / 1 , tipo: 'AE'});
                 valoresGen.push({val: ((total4 / valores4.length).toFixed(2)) / 1 , tipo: 'BSE'});
                 valoresGen.push({val: ((total5 / valores5.length).toFixed(2)) / 1 , tipo: 'BSS'});
                 valoresGen.push({val: ((total6 / valores6.length).toFixed(2)) / 1 , tipo: 'CI'});
                 valoresGen.push({val: ((total7 / valores7.length).toFixed(2)) / 1 , tipo: 'D'});
                 valoresGen.push({val: ((total8 / valores8.length).toFixed(2)) / 1 , tipo: 'N'});
                 valoresGen.push({val: ((total9 / valores9.length).toFixed(2)) / 1 , tipo: 'PA'});
                 valoresGen.push({val: ((total10 / valores10.length).toFixed(2)) / 1 , tipo: 'RPE'});
                 valoresGen.push({val: ((total11 / valores11.length).toFixed(2)) / 1 , tipo: 'RR'});
                 valoresGen.push({val: ((total12 / valores12.length).toFixed(2)) / 1 , tipo: 'RA'});
                 valoresGen.push({val: ((total13 / valores13.length).toFixed(2)) / 1 , tipo: 'SAC'});
                 console.log(valoresGen.slice(Math.max(valoresGen.length - 13)));
                 valoresFin = valoresGen.slice(Math.max(valoresGen.length - 13));
          }
          })}
      </div>
  </div>
)}

      <div className='card blue-grey darken-1'>
          <div className='card-content white-text'>
          <span className='card-title'>Test del Estres</span>
          </div>
          <div className='card-content white'>
          <Tabs className='z-depth-1 tabs-fixed-width'>
          <Tab title='Barras' active>
          <br/>
          <ResponsiveContainer width='100%' height={300}>
           <BarChart data={valoresFin.sort((a, b) => Number(a.val) - Number(b.val))} margin={{top: 20, right: 10, bottom: 20}}>
          <Bar dataKey='val'>
          {
          valoresFin.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          </Bar>
          <XAxis dataKey='tipo'/>
          <YAxis/>
          <Tooltip content={<CustomTooltip/>}/>
          </BarChart>
          </ResponsiveContainer>
        </Tab>
        <Tab title='Araña' active><br/>
          <ResponsiveContainer width='100%' height={300}>
         <RadarChart outerRadius={120} data={valoresFin}>
            <Radar dataKey='val' stroke='#FF8042' fill='#FF8042' fillOpacity={0.6}/>
            <PolarAngleAxis dataKey='tipo' />
            <PolarGrid />
            <PolarRadiusAxis />
          </RadarChart>
           </ResponsiveContainer>
           </Tab>
           </Tabs>
           {tipos.map(un => <span style={{fontStyle: 'italic'}}> {un.ab} = {un.tipo}. </span>)}
        </div>
      </div>
      {/*
      <div className='row'>
      <div className='col s12 m12'>
        <div className='card-panel teal'>
          {tipos.map(un => (<h6 className='white-text'>{un.ab} : {un.tipo}</h6>))}
        </div>
      </div> 
    </div>*/}
  </section>
);
