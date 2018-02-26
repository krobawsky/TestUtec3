import * as React from 'react';

import { IRouter, Link } from 'react-router';
import { url } from '../../util';

import { ITest } from '../../types';

interface ITetsPageState {
  tests: ITest[];
}

const renderRow = (test: ITest) => (
  <tr key={test.id}>
    <td>{test.name}</td>
    <td>{test.tipo}</td>
    <td>{test.preguntas.length}</td>
    <td>
      <a className='lighten-2' href={`/tests/${test.id}`}>
        Empezar prueba
      </a>
    </td>
  </tr>
);


export default class TestsPage extends React.Component<void, ITetsPageState> {

  constructor(props) {
    super(props);

    this.state = {
      tests: [],
    };
  }

  componentDidMount() {
    const requestUrl = url('api/tests');

    fetch(requestUrl)
      .then(response => response.json())
      .then(tests => { console.log('tests', tests); this.setState({ tests }); });
  }

  render() {
    const { tests } = this.state;

    if (!tests) {
      return <h2>Tests</h2>;
    }

    return (
      <span>
        <h2>Tests</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Test</th>
              <th>Tipo</th>
              <th>N° Preguntas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tests.map(renderRow)}
          </tbody>
        </table>
      </span>
    );
  }
}
