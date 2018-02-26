import * as React from 'react';

import { Link } from 'react-router';
import { IAlumno } from '../../types';

// import '../../../public/js/materialize.js';
// import '../../../public/js/materialize.min.js';

import { BarChart, Bar, AreaChart, Area} from '../../../node_modules/recharts';
import { XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from '../../../node_modules/recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default ({alumno}: { alumno: IAlumno }) => (
  <section>
    {alumno.resultados.map(resultado => (
      resultado.test === 'Test del Estres' ? (
      <div className='card blue-grey darken-1' key={resultado.id}>
        <div className='card-content white-text'>
        <span className='card-title'>{resultado.test}</span>
          <h6>Fec. Resolución: {resultado.date}</h6>
          <p>{resultado.descripcion}</p>
        </div>
        <div className='card-tabs white'>
          <br/>
          <ResponsiveContainer width='90%' height={300}>
          <BarChart data={resultado.valores.sort((a, b) => Number(a.value) - Number(b.value))} margin={{top: 20, right: 10, left: 10, bottom: 20}}>
            <Bar dataKey='value'>
              {
                resultado.valores.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Bar>
            <XAxis dataKey='tipo'/>
            <YAxis/>
            <Tooltip/>
          </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='card-action'>
            <Link to={`/alumnos/${alumno.id}/resultados/${resultado.id}`}>Ver más detalles</Link>
        </div>
      </div>
      ) : (
      <div className='card blue-grey darken-1' key={resultado.id}>
        <div className='card-content white-text'>
        <span className='card-title'>{resultado.test}</span>
          <h6>Fec. Resolución: {resultado.date}</h6>
          <p>{resultado.descripcion}</p>
        </div>
        <div className='card-tabs white'>
          <br/>
          <ResponsiveContainer width='90%' height={300}>
            <AreaChart width={600} height={400} data={resultado.valores}
            margin={{top: 10, right: 10, left: 0, bottom: 0}}>
            <XAxis dataKey='tipo'/>
            <YAxis/>
            <Tooltip/>
            <Area type='monotone' dataKey='value' stroke='#3E84D9' fill='#3E84D9' />
          </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className='card-action'>
            <Link to={`/alumnos/${alumno.id}/resultados/${resultado.id}`}>Ver más detalles</Link>
        </div>
      </div>
      )
    ))}
  </section>
);