import * as React from 'react';

import { Link } from 'react-router';
import { url, submitForm } from '../../util';

import TestInformation from './TestInformation';
import TestPreguntas2 from './TestPreguntas2';

import RadioInput from '../form/RadioInput';
import { IError, IRouterContext, ITest, IPregunta, IAlternativa } from '../../types';

interface ITestPageProps {
  params?: resultadoId;
  location: HistoryModule.Location;
}

interface ITestPageState {
  test?: ITest;
  resultadoId?: string;
}

export default class Test2Page extends React.Component<ITestPageProps, ITestPageState> {

  constructor(props) {
    super(props);

    this.state = { resultadoId: props.location.state.resultadoId };
  }

  componentDidMount() {
    const fetchUrl = url('api/tests/2');
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
    const { resultadoId } = this.state;
    console.log('Test2Page: ' + resultadoId);

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
        <TestPreguntas2 params={test.preguntas} resultadoId={resultadoId}/>
      </span>
    );
 }
}
