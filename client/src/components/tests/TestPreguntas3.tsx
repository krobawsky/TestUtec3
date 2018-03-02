import * as React from 'react';

import { Link } from 'react-router';
import { url, submitForm } from '../../util';

import { IError, IRouterContext, ITest, IPregunta, IAlternativa } from '../../types';
import RadioInput3 from '../form/RadioInput3';

interface IPregProps {
  params?: IPregunta[];
  resultadoId?: string;
  resultsTotalProps?: {};
  resultsA1Props?: {};
  resultsA2Props?: {};
  resultsA3Props?: {};
  resultsA4Props?: {};
  resultsA5Props?: {};
  resultsB1Props?: {};
  resultsB2Props?: {};
  resultsB3Props?: {};
  resultsBMProps?: {};
  resultsC1Props?: {};
  resultsC2Props?: {};
  resultsC3Props?: {};
  resultsD1Props?: {};
  resultsD2Props?: {};
  resultsE1Props?: {};
  resultsE2Props?: {};
  resultsV1Props?: {};
  resultsV2Props?: {};
  resultsGProps?: {};
}

interface IResultState {
  editableAlter?: IAlternativa[];
  resultsTotal?: {};
  resultsA1?: {};
  resultsA2?: {};
  resultsA3?: {};
  resultsA4?: {};
  resultsA5?: {};
  resultsB1?: {};
  resultsB2?: {};
  resultsB3?: {};
  resultsBM?: {};
  resultsC1?: {};
  resultsC2?: {};
  resultsC3?: {};
  resultsD1?: {};
  resultsD2?: {};
  resultsE1?: {};
  resultsE2?: {};
  resultsV1?: {};
  resultsV2?: {};
  resultsG?: {};
  error?: IError;
  progress?: string;
}

interface IResultadoRequest {
  id?: number;
  test?: string;
  descripcion?: string;
  date?: string;
}

interface IValoresRequest {
  tipo?: string;
  value?: number;
  poss?: number;
  descripcion?: string;
}

export default class Pregunta extends React.Component<IPregProps, IResultState> {

  context: IRouterContext;

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      resultsTotal: Object.assign({}, props.resultsTotalProps),
      resultsA1: Object.assign({}, props.resultsA1Props),
      resultsA2: Object.assign({}, props.resultsA2Props),
      resultsA3: Object.assign({}, props.resultsA3Props),
      resultsA4: Object.assign({}, props.resultsA4Props),
      resultsA5: Object.assign({}, props.resultsA5Props),
      resultsB1: Object.assign({}, props.resultsB1Props),
      resultsB2: Object.assign({}, props.resultsB2Props),
      resultsB3: Object.assign({}, props.resultsB3Props),
      resultsBM: Object.assign({}, props.resultsBMProps),
      resultsC1: Object.assign({}, props.resultsC1Props),
      resultsC2: Object.assign({}, props.resultsC2Props),
      resultsC3: Object.assign({}, props.resultsC3Props),
      resultsD1: Object.assign({}, props.resultsD1Props),
      resultsD2: Object.assign({}, props.resultsD2Props),
      resultsE1: Object.assign({}, props.resultsE1Props),
      resultsE2: Object.assign({}, props.resultsE2Props),
      resultsV1: Object.assign({}, props.resultsV1Props),
      resultsV2: Object.assign({}, props.resultsV2Props),
      resultsG: Object.assign({}, props.resultsGProps),
      editableAlter: Object.assign({}, props.params ),
      progress: 'progress scale-transition scale-out'
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(name: any, pos: number, question: string, value: number) {
    const { editableAlter, resultsTotal, resultsA1, resultsA2, resultsA3, resultsA4, resultsA5, resultsB1, resultsB2, resultsB3, resultsBM, resultsC1, resultsC2, resultsC3, resultsD1, resultsD2, resultsE1, resultsE2, resultsV1, resultsV2, resultsG } = this.state;
    // console.log( value );
     for (const propiedad in name) {
      if (name.hasOwnProperty(propiedad)) {
        // console.log('En la propiedad ' + propiedad + ' hay este valor: ' + JSON.stringify(name[propiedad].name));
        const tipo = JSON.parse(JSON.stringify(name[propiedad].name));
        // console.log( tipo );
        const tipos = ['Conocimiento Emocional de si mismo', 'Asertividad', 'Autoconcepto', 'Autorrealizacion', 'Independencia', 'Relaciones Interpersonales', 'Responsabilidad Social', 'Empatia', 'Solucion de Problemas', 'Prueba de la realidad', 'Flexibilidad', 'Tolerancia al Stress', 'Control de Impulsos', 'Felicidad', 'Optimismo', 'Impresión positiva', 'Impresión Negativa'];
        if ( tipo === tipos[0] ) {
          const poss1 = [7, 9, 63, 88];
          const poss2 = [23, 35, 52, 116];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsA1, {[question]: val });
              this.setState({ resultsA1: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsA1, {[question]: val });
              this.setState({ resultsA1: agregar });
            }
          }
        }
        if ( tipo === tipos[1] ) {
          const poss1 = [37, 67, 96];
          const poss2 = [22, 82, 111, 126];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsA2, {[question]: val });
              this.setState({ resultsA2: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsA2, {[question]: val });
              this.setState({ resultsA2: agregar });
            }
          }
        }
        if ( tipo === tipos[2] ) {
          const poss1 = [11, 40, 85, 100, 114, 129];
          const poss2 = [24, 56, 70];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsA3, {[question]: val });
              this.setState({ resultsA3: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsA3, {[question]: val });
              this.setState({ resultsA3: agregar });
            }
          }
        }
        if ( tipo === tipos[3] ) {
          const poss1 = [6, 81, 95, 110];
          const poss2 = [21, 36, 51, 66, 125];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsA4, {[question]: val });
              this.setState({ resultsA4: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsA4, {[question]: val });
              this.setState({ resultsA4: agregar });
            }
          }
        }
        if ( tipo === tipos[4] ) {
          const poss1 = [3];
          const poss2 = [19, 32, 48, 92, 107, 121];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsA5, {[question]: val });
              this.setState({ resultsA5: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsA5, {[question]: val });
              this.setState({ resultsA5: agregar });
            }
          }
        }
        if ( tipo === tipos[5] ) {
          const poss1 = [31, 39, 55, 62, 84, 99, 113];
          const poss2 = [10, 23, 69, 128];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsB1, {[question]: val });
              this.setState({ resultsB1: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsB1, {[question]: val });
              this.setState({ resultsB1: agregar });
            }
          }
        }
        if ( tipo === tipos[6] ) {
          const poss1 = [16, 61, 72, 90, 98, 104, 119];
          const poss2 = [30, 46, 76];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsB2, {[question]: val });
              this.setState({ resultsB2: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsB2, {[question]: val });
              this.setState({ resultsB2: agregar });
            }
          }
        }
        if ( tipo === tipos[7] ) {
          const poss1 = [44, 55, 61, 72, 98, 119, 124];
          const poss2 = [18];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsB3, {[question]: val });
              this.setState({ resultsB3: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsB3, {[question]: val });
              this.setState({ resultsB3: agregar });
            }
          }
        }
        if ( tipo === tipos[8] ) {
          const poss1 = [1, 15, 45, 60, 89];
          const poss2 = [29, 75, 118];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsC1, {[question]: val });
              this.setState({ resultsC1: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsC1, {[question]: val });
              this.setState({ resultsC1: agregar });
            }
          }
        }
        if ( tipo === tipos[9] ) {
          const poss1 = [8, 88, 112];
          const poss2 = [35, 38, 53, 68, 83, 97, 127];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsC2, {[question]: val });
              this.setState({ resultsC2: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsC2, {[question]: val });
              this.setState({ resultsC2: agregar });
            }
          }
        }
        if ( tipo === tipos[10] ) {
          const poss1 = [74];
          const poss2 = [14, 28, 43, 59, 87, 131];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsC3, {[question]: val });
              this.setState({ resultsC3: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsC3, {[question]: val });
              this.setState({ resultsC3: agregar });
            }
          }
        }
        if ( tipo === tipos[11] ) {
          const poss1 = [4, 20, 33, 78, 108];
          const poss2 = [49, 64, 93, 122];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsD1, {[question]: val });
              this.setState({ resultsD1: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsD1, {[question]: val });
              this.setState({ resultsD1: agregar });
            }
          }
        }
        if ( tipo === tipos[12] ) {
          const poss1 = [];
          const poss2 = [13, 27, 42, 58, 73, 86, 102, 117, 130];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsD2, {[question]: val });
              this.setState({ resultsD2: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsD2, {[question]: val });
              this.setState({ resultsD2: agregar });
            }
          }
        }
        if ( tipo === tipos[13] ) {
          const poss1 = [31, 47, 62, 105, 120];
          const poss2 = [2, 17, 77, 91];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsE1, {[question]: val });
              this.setState({ resultsE1: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsE1, {[question]: val });
              this.setState({ resultsE1: agregar });
            }
          }
        }
        if ( tipo === tipos[14] ) {
          const poss1 = [11, 20, 26, 54, 80, 106, 108];
          const poss2 = [132];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsE2, {[question]: val });
              this.setState({ resultsE2: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsE2, {[question]: val });
              this.setState({ resultsE2: agregar });
            }
          }
        }
        if ( tipo === tipos[15] ) {
          const poss1 = [5, 34, 50, 65, 79, 94, 109, 123];
          const poss2 = [];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsV1, {[question]: val });
              this.setState({ resultsV1: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsV1, {[question]: val });
              this.setState({ resultsV1: agregar });
            }
          }
        }
        if ( tipo === tipos[16] ) {
          const poss1 = [12, 25, 41, 57, 71, 101, 115];
          const poss2 = [];
          for (let e of poss1) {
            if (pos === e) {
              const val = 0 + parseInt(value);
              const agregar = Object.assign({}, resultsV2, {[question]: val });
              this.setState({ resultsV2: agregar });
            }
          }
          for (let e of poss2) {
            if (pos === e) {
              const val = 6 - parseInt(value);
              const agregar = Object.assign({}, resultsV2, {[question]: val });
              this.setState({ resultsV2: agregar });
            }
          }
        }
      }
    }
    const possG1 = [25, 33, 37, 90, 110];
    const possG2 = [13, 22, 129];
    for (let e of possG1) {
      if (pos === e) {
        const val = 0 + parseInt(value);
        const agregar = Object.assign({}, resultsG, {[question]: val });
        this.setState({ resultsG: agregar });
      }
    }
    for (let e of possG2) {
      if (pos === e) {
        const val = 6 - parseInt(value);
        const agregar = Object.assign({}, resultsG, {[question]: val });
        this.setState({ resultsG: agregar });
      }
    }
    const possI = [55, 61, 72, 98, 119];
    for (let e of possI) {
      if (pos === e) {
        const val = 0 + parseInt(value);
        const agregar = Object.assign({}, resultsBM, {[question]: val });
        this.setState({ resultsBM: agregar });
      }
    }
    const agregarTotal = Object.assign({}, resultsTotal, {[question]: +value });
    this.setState({ resultsTotal: agregarTotal });
  }

  onSubmit(event) {
    event.preventDefault();

    let resultadoId = this.props.resultadoId;

    const { editableAlter, resultsTotal, resultsA1, resultsA2, resultsA3, resultsA4, resultsA5, resultsB1, resultsB2, resultsB3, resultsBM, resultsC1, resultsC2, resultsC3, resultsD1, resultsD2, resultsE1, resultsE2, resultsV1, resultsV2, resultsG } = this.state;

    if ( Object.getOwnPropertyNames(resultsTotal).sort().length < Object.getOwnPropertyNames(editableAlter).sort().length ) {
      alert( 'Debe contestar todas las preguntas!' );

    } else {
      this.test();

      let resA1 = Object.values(resultsA1).reduce((a, b) => a + b); // Total
      let resA2 = Object.values(resultsA2).reduce((a, b) => a + b); // Total
      let resA3 = Object.values(resultsA3).reduce((a, b) => a + b); // Total
      let resA4 = Object.values(resultsA4).reduce((a, b) => a + b); // Total
      let resA5 = Object.values(resultsA5).reduce((a, b) => a + b); // Total
      let resAT = resA1 + resA2 + resA3 + resA4 + resA5; // TotalA
      let resB1 = Object.values(resultsB1).reduce((a, b) => a + b); // Total
      let resB2 = Object.values(resultsB2).reduce((a, b) => a + b); // Total
      let resB3 = Object.values(resultsB3).reduce((a, b) => a + b); // Total
      let resBM = Object.values(resultsBM).reduce((a, b) => a + b); // Total
      let resBT = resB1 + resB2 + resB3 - resBM; // TotalB
      let resC1 = Object.values(resultsC1).reduce((a, b) => a + b); // Total
      let resC2 = Object.values(resultsC2).reduce((a, b) => a + b); // Total
      let resC3 = Object.values(resultsC3).reduce((a, b) => a + b); // Total
      let resCT = resC1 + resC2 + resC3; // TotalB
      let resD1 = Object.values(resultsD1).reduce((a, b) => a + b); // Total
      let resD2 = Object.values(resultsD2).reduce((a, b) => a + b); // Total
      let resDT = resD1 + resD2; // TotalD
      let resE1 = Object.values(resultsE1).reduce((a, b) => a + b); // Total
      let resE2 = Object.values(resultsE2).reduce((a, b) => a + b); // Total
      let resET = resE1 + resE2; // TotalD
      let resV1 = Object.values(resultsV1).reduce((a, b) => a + b); // Total
      let resV2 = Object.values(resultsV2).reduce((a, b) => a + b); // Total
      let resG = Object.values(resultsG).reduce((a, b) => a + b); // Total
      let resGT = resAT + resBT + resCT + resDT + resET - resG; // TotalG

      resGT = Math.round((((resGT - 465.31) / 49.9) * 15) + 100);
      resAT = Math.round((((resAT - 156.70) / 20.41) * 15) + 100);
      resA1 = Math.round((((resA1 - 29.79) / 5.28) * 15) + 100);
      resA2 = Math.round((((resA2 - 25.82) / 4.66) * 15) + 100);
      resA3 = Math.round((((resA3 - 35.76) / 6.30) * 15) + 100);
      resA4 = Math.round((((resA4 - 37.72) / 5.07) * 15) + 100);
      resA5 = Math.round((((resA5 - 27.37) / 4.48) * 15) + 100);
      resBT = Math.round((((resBT - 99.52) / 10.85) * 15) + 100);
      resB1 = Math.round((((resB1 - 44.23) / 6.02) * 15) + 100);
      resB2 = Math.round((((resB2 - 43.27) / 4.93) * 15) + 100);
      resB3 = Math.round((((resB3 - 33.51) / 4.19) * 15) + 100);
      resCT = Math.round((((resCT - 100.32) / 12.46) * 15) + 100);
      resC1 = Math.round((((resC1 - 31.79) / 4.60) * 15) + 100);
      resC2 = Math.round((((resC2 - 39.53) / 5.58) * 15) + 100);
      resC3 = Math.round((((resC3 - 28.94) / 4.86) * 15) + 100);
      resDT = Math.round((((resDT - 68.27) / 9.66) * 15) + 100);
      resD1 = Math.round((((resD1 - 33.66) / 5.64) * 15) + 100);
      resD2 = Math.round((((resD2 - 34.59) / 5.63) * 15) + 100);
      resET = Math.round((((resET - 70.50) / 8.74) * 15) + 100);
      resE1 = Math.round((((resE1 - 37.48) / 5.13) * 15) + 100);
      resE2 = Math.round((((resE2 - 32.98) / 4.46) * 15) + 100);
      resV1 = Math.round((((resV1 - 20.35) / 5.30) * 15) + 100);
      resV2 = Math.round((((resV2 - 10.66) / 4.26) * 15) + 100);

      console.log('Escala IA: ' + resAT);
      console.log('Escala CM: ' + resA1);
      console.log('Escala AS: ' + resA2);
      console.log('Escala AC: ' + resA3);
      console.log('Escala AR: ' + resA4);
      console.log('Escala IN: ' + resA5);
      console.log('Escala IE: ' + resBT);
      console.log('Escala EM: ' + resB3);
      console.log('Escala RI: ' + resB1);
      console.log('Escala RS: ' + resB2);
      console.log('Escala AD: ' + resCT);
      console.log('Escala SP: ' + resC1);
      console.log('Escala PR: ' + resC2);
      console.log('Escala FL: ' + resC3);
      console.log('Escala MT: ' + resDT);
      console.log('Escala ME: ' + resD1);
      console.log('Escala CI: ' + resD2);
      console.log('Escala EA: ' + resET);
      console.log('Escala FE: ' + resE1);
      console.log('Escala OP: ' + resE2);
      console.log('Escala G: ' + resGT);

      // Dia actual
      const fec = new Date();
      let dd = fec.getDate();
      let mm = fec.getMonth() + 1;

      const yyyy = fec.getFullYear();
      if ( dd < 10) {
          dd = '0' + dd;
      }
      if ( mm < 10) {
          mm = '0' + mm;
      }
      const today = yyyy + '/' + mm + '/' + dd;

      // Update
      const resultRequest: IResultadoRequest = {
        test: 'Test ICE Baron',
        descripcion: '',
        date: today
      };
      const url = 'api/tests/results/' + resultadoId;
        submitForm('PUT', url, resultRequest, (status, response) => {
          if (status === 204) {
            console.log('OK!');
          } else {
            console.log('ERROR?!...', response);
            this.setState({ error: response });
          }
      });

      // For para los valores
      let num: number = 0;
      for ( num = 0; num < 22; num++ ) {

        if (num === 0) {
          const total = resAT; // Total
          let desc = '1'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'IA',
            value: +total,
            poss: 1,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 1) {
          const total = resA1; // Total
          let desc = '2'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'CM',
            value: +total,
            poss: 2,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 2) {
          const total = resA2; // Total
          let desc = '3'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'AS',
            value: +total,
            poss: 3,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 3) {
          const total = resA3; // Total
          let desc = '4'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'AC',
            value: +total,
            poss: 4,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 4) {
          const total = resA4; // Total
          let desc = '5'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'AR',
            value: +total,
            poss: 5,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 5) {
          const total = resA5; // Total
          let desc = '6'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'IN',
            value: +total,
            poss: 6,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 6) {
          const total = resBT; // Total
          let desc = '7'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'IE',
            value: +total,
            poss: 7,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 7) {
          const total = resB3; // Total
          let desc = '8'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'EM',
            value: +total,
            poss: 8,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 8) {
          const total = resB1; // Total
          let desc = '9'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'RI',
            value: +total,
            poss: 9,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 9) {
          const total = resB2; // Total
          let desc = '10'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'RS',
            value: +total,
            poss: 10,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 10) {
          const total = resCT; // Total
          let desc = '11'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'AD',
            value: +total,
            poss: 11,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 11) {
          const total = resC1; // Total
          let desc = '12'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'SP',
            value: +total,
            poss: 12,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 12) {
          const total = resC2; // Total
          let desc = '13'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'PR',
            value: +total,
            poss: 13,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 13) {
          const total = resC3; // Total
          let desc = '14'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'FL',
            value: +total,
            poss: 14,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 14) {
          const total = resDT; // Total
          let desc = '15'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'MT',
            value: +total,
            poss: 15,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 15) {
          const total = resD1; // Total
          let desc = '16'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'ME',
            value: +total,
            poss: 16,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 16) {
          const total = resD2; // Total
          let desc = '17'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'CI',
            value: +total,
            poss: 17,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 17) {
          const total = resET; // Total
          let desc = '18'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'EA',
            value: +total,
            poss: 18,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 18) {
          const total = resE1; // Total
          let desc = '19'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'FE',
            value: +total,
            poss: 19,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 19) {
          const total = resE2; // Total
          let desc = '20'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'OP',
            value: +total,
            poss: 20,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
            } else {
              console.log('Error?!...', response);
            }
          });
        }
        if (num === 20) {
          const total = resGT; // Total
          let desc = '21'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'G',
            value: +total,
            poss: 21,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
              console.log('res: ', response);
              this.context.router.push({
                pathname: '/'
              });
            } else {
              console.log('Error?!...', response);
            }
          });
        }
      }

    }
  }

  test  = () => {
    this.setState ({
      progress: 'progress scale-transition scale-in'
    });
  }

  render() {
    // const { params } = this.props;
    let params = this.props.params;
    const { editableAlter, error } = this.state;
    params.sort((a, b) => Number(a.posicion) - Number(b.posicion));
    let resId = this.props.resultadoId;
    if (!resId ) {
      return <h2>No puedes resolver este test. Inicia sesión</h2>;
    }
    return (
       <div>
        <div className='col-sm-12'>
            <form onSubmit={this.onSubmit}>
              <ul className='collection with-header'>
                <li className='collection-header'><h4 className='light-blue-text'>Preguntas</h4></li>
                {params.map(pregunta => (
                  <li className='collection-item' key={pregunta.id}>
                    <div className='row'>
                      <br/>
                      <div className='col s12'>
                        <strong className='title grey-text text-darken-3'>{pregunta.posicion})  {pregunta.pregunta}</strong>
                      </div>
                      <div className='col s12 m6 offset-m3'>
                        <br/>
                        <div className='center-align'>
                          <RadioInput3 object={editableAlter} error={error} name={pregunta.tipos} pos={pregunta.posicion} question={pregunta.pregunta} options={pregunta.alternativas.sort((a, b) => Number(a.id) - Number(b.id))} onChange={this.onInputChange} />
                        </div>
                      </div>
                      <br/>
                      <br/>
                    </div>
                  </li>
                ))}
                <li className='collection-item center-align'>
                  <div>
                    <br/>
                    <button className='btn waves-effect waves-teal btn-large' type='submit'>Finalizar test!<i className='material-icons right'>send</i></button>
                    <div className={this.state.progress}>
                      <div className='indeterminate'></div>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
            <br/><br/><br/>
        </div>
      </div>
    );
  }
}