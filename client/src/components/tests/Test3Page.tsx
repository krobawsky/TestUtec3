import * as React from 'react';

import { Link } from 'react-router';
import { url, submitForm } from '../../util';

import TestInformation from './TestInformation';
import TestPreguntas from './TestPreguntas';

// import '../../../public/js/materialize.js';
// import '../../../public/js/materialize.min.js';

import RadioInput from '../form/RadioInput';
import { IError, IRouterContext, ITest, IPregunta, IAlternativa } from '../../types';

interface ITestPageProps {
  params?: { testId?: string };
}

interface ITestPageState {
  test?: ITest;
}

export default class TestPage extends React.Component<ITestPageProps, ITestPageState> {

  constructor() {
    super();

    this.state = { };
  }

  componentDidMount() {
      const fetchUrl = url(`api/tests/3`);
      fetch(fetchUrl)
        .then(response => response.json())
        .then(test => { console.log('test', test); this.setState({ test }); });
  }

  onChange(value) {
    console.log(value);
  }

  comparar( a, b ) { return a - b; }

  render() {
    const { test } = this.state;

    if (!test) {
      return  <div className='center-align'>
                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <div className='preloader-wrapper big active'>
                  <div className='spinner-layer spinner-blue-only'>
                    <div className='circle-clipper left'>
                      <div className='circle'></div>
                    </div><div className='gap-patch'>
                      <div className='circle'></div>
                    </div><div className='circle-clipper right'>
                      <div className='circle'></div>
                    </div>
                  </div>
                </div>
              </div>;
    }

    return (
      <span>
        <TestInformation test={test} />
        <TestPreguntas params={test.preguntas}/>
      </span>
    );
  }
}