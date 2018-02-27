import * as React from 'react';
import { Link } from 'react-router';
import { url, submitForm } from '../../util';

import TestInformation from './TestInformation';
import Test2Preguntas from './Test2Preguntas';

import RadioInput from '../form/RadioInput';
import { IError, IRouterContext, ITest, IPregunta, IAlternativa } from '../../types';

interface ITestPageProps {
  params?: resultadoId;
  location: HistoryModule.Location;
}

interface ITestPageState {
  test?: ITest;
}

export default class Test2Page extends React.Component<ITestPageProps, ITestPageState> {

 constructor(props) {
    super(props);

    this.state = { resultadoId: props.location.state.resultadoId };
  }

  componentDidMount() {
    const requestUrl = url('api/tests/2');

    fetch(requestUrl)
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
    const { resultadoId } = this.state;
    // console.log('Test2Page: ' + resultadoId);

    return (
      <span>
        <TestInformation test={test} />
        <Test2Preguntas params={test.preguntas} resultadoId={resultadoId}/>
      </span>
    );
 }
}
