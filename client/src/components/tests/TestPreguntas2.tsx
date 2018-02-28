import * as React from 'react';

import { Link } from 'react-router';
import { url, submitForm } from '../../util';

import { IError, IRouterContext, ITest, IPregunta, IPreguntaTipo, IAlternativa } from '../../types';
import RadioInput2 from '../form/RadioInput2';

interface IPregProps {
  params?: IPregunta[];
  resultadoId?: string;
  resultsTotalProps?: {};
  resultsVProps?: {};
  resultsXProps?: {};
  resultsYProps?: {};
  resultsZProps?: {};
  results1Props?: {};
  results2Props?: {};
  results3Props?: {};
  results4Props?: {};
  results5Props?: {};
  results6AProps?: {};
  results6BProps?: {};
  results7Props?: {};
  results8AProps?: {};
  results8BProps?: {};
  resultsSProps?: {};
  resultsCProps?: {};
  resultsCCrops?: {};
  resultsAProps?: {};
  resultsHProps?: {};
  resultsNProps?: {};
  resultsDProps?: {};
  resultsBProps?: {};
  resultsTProps?: {};
  resultsSSProps?: {};
  resultsCCProps?: {};
  resultsPPProps?: {};
}

interface IResultState {
  editableAlter?: IAlternativa[];
  resultsTotal?: {};
  resultsV?: {};
  resultsX?: {};
  resultsY?: {};
  resultsZ?: {};
  results1?: {};
  results2?: {};
  results3?: {};
  results4?: {};
  results5?: {};
  results6A?: {};
  results6B?: {};
  results7?: {};
  results8A?: {};
  results8B?: {};
  resultsS?: {};
  resultsC?: {};
  resultsP?: {};
  resultsA?: {};
  resultsH?: {};
  resultsN?: {};
  resultsD?: {};
  resultsB?: {};
  resultsT?: {};
  resultsSS?: {};
  resultsCC?: {};
  resultsPP?: {};
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
      resultsV: Object.assign({}, props.resultsVProps),
      resultsX: Object.assign({}, props.resultsXProps),
      resultsY: Object.assign({}, props.resultsYProps),
      resultsZ: Object.assign({}, props.resultsZProps),
      results1: Object.assign({}, props.results1Props),
      results2: Object.assign({}, props.results2Props),
      results3: Object.assign({}, props.results3Props),
      results4: Object.assign({}, props.results4Props),
      results5: Object.assign({}, props.results5Props),
      results6A: Object.assign({}, props.results6AProps),
      results6B: Object.assign({}, props.results6BProps),
      results7: Object.assign({}, props.results7Props),
      results8A: Object.assign({}, props.results8AProps),
      results8B: Object.assign({}, props.results8BProps),
      resultsS: Object.assign({}, props.resultsSProps),
      resultsC: Object.assign({}, props.resultsCProps),
      resultsP: Object.assign({}, props.resultsCCrops),
      resultsA: Object.assign({}, props.resultsAProps),
      resultsH: Object.assign({}, props.resultsHProps),
      resultsN: Object.assign({}, props.resultsNProps),
      resultsD: Object.assign({}, props.resultsDProps),
      resultsB: Object.assign({}, props.resultsBProps),
      resultsT: Object.assign({}, props.resultsTProps),
      resultsSS: Object.assign({}, props.resultsSSProps),
      resultsCC: Object.assign({}, props.resultsCCProps),
      resultsPP: Object.assign({}, props.resultsPPProps),
      editableAlter: Object.assign({}, props.params ),
      progress: 'progress scale-transition scale-out'
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
onInputChange(name: any, pos: number, question: string, value: any) {
    const { editableAlter, resultsTotal, resultsV, resultsX, resultsY, resultsZ, results1, results2, results3, results4, results5, results6A, results6B, results7, results8A, results8B, resultsS, resultsC, resultsP, resultsA, resultsH, resultsN, resultsD, resultsB, resultsT, resultsSS, resultsCC, resultsPP  } = this.state;
    // console.log( value );
    for (const propiedad in name) {
      if (name.hasOwnProperty(propiedad)) {
        // console.log('En la propiedad ' + propiedad + ' hay este valor: ' + JSON.stringify(name[propiedad].name));
        const tipo = JSON.parse(JSON.stringify(name[propiedad].name));
        // console.log( tipo );
      const tipos = ['Esquizoide', 'Evitativo', 'Dependiente', 'Histriónico', 'Narcisista', 'Antisocial', 'Agresivo-sádico', 'Compulsivo', 'Pasivo-agresivo', 'Autoderrotista', 'Esquizotípico', 'Borderline', 'Paranoide', 'Ansiedad', 'Somatoformo', 'Bipolar', 'Distimia', 'Dependencia de alcohol', 'Dependencia de drogas', 'Desorden del pensamiento', 'Depresión mayor', 'Desorden delusional', 'Deseabilidad Social', 'Autodescalificación', 'Validez'];
        if ( tipo === tipos[0] ) {
          if ( value === 'Verdadero') {
            const poss3 = [2, 13, 19, 34, 81, 143, 161];
            const poss2 = [10, 33, 47, 83, 106, 124, 150, 20];
            const poss1 = [16, 22, 25, 46, 53, 85, 108, 141, 142, 159, 160];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [48];
            const poss1 = [14, 28, 60, 78, 95, 103, 111, 125];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results1, {[question]: val });
                this.setState({ results1: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[1]  ) {
          if ( value === 'Verdadero') {
            const poss3 = [3, 8, 49, 63, 77, 120, 141, 158];
            const poss2 = [19, 23, 25, 27, 32, 47, 56, 57, 83, 102, 110, 115, 118, 150, 150, 171];
            const poss1 = [2, 34, 45, 81, 85, 106, 109, 113, 133, 139, 147, 160];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [14, 21, 28, 125, 163];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results2, {[question]: val });
                this.setState({ results2: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[2] ) {
          if ( value === 'Verdadero') {
            const poss3 = [10, 31, 42, 78, 108, 133, 145, 159, 173];
            const poss2 = [34, 57, 60, 77, 81, 97];
            const poss1 = [49, 54, 75, 110, 125, 149, 168];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [4];
            const poss1 = [7, 12, 21, 28, 40, 41, 43, 74, 91, 92, 101, 147, 162, 163];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results3, {[question]: val });
                this.setState({ results3: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[3] ) {
          if ( value === 'Verdadero') {
            const poss3 = [14, 20, 28, 48, 60, 86, 111, 125, 137, 170];
            const poss2 = [9, 42, 43, 66, 103, 133, 166, 51];
            const poss1 = [7, 37, 40, 41, 56, 89, 91, 95, 128, 130, 142, 162, 171, 172, 173];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [158];
            const poss1 = [3, 19, 39, 51, 77, 126];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results4, {[question]: val });
                this.setState({ results4: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[4] ) {
          if ( value === 'Verdadero') {
            const poss3 = [1, 6, 15, 37, 89, 91, 129, 131, 142, 166];
            const poss2 = [4, 14, 16, 41, 86, 103, 111, 125, 137, 165, 170, 171, 172];
            const poss1 = [2, 12, 22, 28, 32, 43, 55, 60, 80, 85, 126, 1329, 130, 134, 135, 143, 146, 163];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results5, {[question]: val });
                this.setState({ results5: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results5, {[question]: val });
                this.setState({ results5: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results5, {[question]: val });
                this.setState({ results5: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [42, 149, 158];
            const poss1 = [81, 31, 45, 51, 78, 106];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results5, {[question]: val });
                this.setState({ results5: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results5, {[question]: val });
                this.setState({ results5: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results5, {[question]: val });
                this.setState({ results5: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[5] ) {
          if ( value === 'Verdadero') {
            const poss3 = [7, 40, 92, 94, 103, 116, 130, 147, 162, 172];
            const poss2 = [1, 12, 20, 22, 38, 43, 55, 73, 74, 80, 86, 87, 91, 129, 142, 144, 165];
            const poss1 = [15, 32, 44, 48, 64, 85, 101, 104, 111, 113, 140, 157, 171];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results6A, {[question]: val });
                this.setState({ results6A: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results6A, {[question]: val });
                this.setState({ results6A: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results6A, {[question]: val });
                this.setState({ results6A: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [42, 78, 81];
            const poss1 = [34, 77];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results6A, {[question]: val });
                this.setState({ results6A: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results6A, {[question]: val });
                this.setState({ results6A: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results6A, {[question]: val });
                this.setState({ results6A: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[6] ) {
          if ( value === 'Verdadero') {
            const poss3 = [4, 9, 12, 30, 41, 44, 101, 134, 148, 163];
            const poss2 = [1, 21, 64, 74, 82, 84, 91, 107, 115, 121, 129, 155, 166];
            const poss1 = [7, 32, 38, 40, 43, 58, 66, 80, 86, 95, 135, 142, 146, 147, 165];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results6B, {[question]: val });
                this.setState({ results6B: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results6B, {[question]: val });
                this.setState({ results6B: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results6B, {[question]: val });
                this.setState({ results6B: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [42, 77, 78];
            const poss1 = [31, 71, 106, 145];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results6B, {[question]: val });
                this.setState({ results6B: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results6B, {[question]: val });
                this.setState({ results6B: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results6B, {[question]: val });
                this.setState({ results6B: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[7] ) {
          if ( value === 'Verdadero') {
            const poss3 = [21, 39, 46, 61, 75, 88, 126, 138, 149, 153];
            const poss2 = [64, 134, 148, 159, 161, 163];
            const poss1 = [4, 32, 74, 78, 81];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results7, {[question]: val });
                this.setState({ results7: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results7, {[question]: val });
                this.setState({ results7: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results7, {[question]: val });
                this.setState({ results7: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [20, 48, 86, 145];
            const poss1 = [7, 40, 43, 50, 60, 66, 77, 92, 95, 103, 111, 128, 155];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results7, {[question]: val });
                this.setState({ results7: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results7, {[question]: val });
                this.setState({ results7: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results7, {[question]: val });
                this.setState({ results7: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[8] ) {
          if ( value === 'Verdadero') {
            const poss3 = [22, 50, 55, 66, 95, 104, 107, 135, 156, 165];
            const poss2 = [9, 16, 28, 43, 64, 73, 74, 77, 82, 86, 101, 115, 123, 128, 155];
            const poss1 = [1, 4, 12, 21, 23, 25, 51, 58, 110, 120, 129, 139, 171];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results8A, {[question]: val });
                this.setState({ results8A: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results8A, {[question]: val });
                this.setState({ results8A: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results8A, {[question]: val });
                this.setState({ results8A: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [149, 159];
            const poss1 = [6];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results8A, {[question]: val });
                this.setState({ results8A: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results8A, {[question]: val });
                this.setState({ results8A: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results8A, {[question]: val });
                this.setState({ results8A: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[9] ) {
          if ( value === 'Verdadero') {
            const poss3 = [23, 57, 65, 110, 121, 139, 154, 168];
            const poss2 = [10, 16, 28, 42, 45, 51, 54, 56, 77, 106, 115, 120, 132, 145, 155];
            const poss1 = [8, 18, 25, 31, 63, 71, 73, 81, 82, 99, 128, 133, 141, 167, 171, 173];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results8B, {[question]: val });
                this.setState({ results8B: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results8B, {[question]: val });
                this.setState({ results8B: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results8B, {[question]: val });
                this.setState({ results8B: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [74];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, results8B, {[question]: val });
                this.setState({ results8B: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, results8B, {[question]: val });
                this.setState({ results8B: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, results8B, {[question]: val });
                this.setState({ results8B: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[10] ) {
          if ( value === 'Verdadero') {
            const poss3 = [24, 47, 69, 83, 102, 112, 118, 150];
            const poss2 = [2, 3, 8, 31, 38, 49, 63, 77, 85, 100, 113, 120, 123, 124, 133, 141, 158, 164];
            const poss1 = [10, 13, 19, 23, 25, 53, 108, 130, 136, 147, 160, 161, 162, 165];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsS, {[question]: val });
                this.setState({ resultsS: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsS, {[question]: val });
                this.setState({ resultsS: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsS, {[question]: val });
                this.setState({ resultsS: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [168];
            const poss1 = [14, 48, 60];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsS, {[question]: val });
                this.setState({ resultsS: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsS, {[question]: val });
                this.setState({ resultsS: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsS, {[question]: val });
                this.setState({ resultsS: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[11] ) {
          if ( value === 'Verdadero') {
            const poss3 = [25, 43, 56, 58, 73, 82, 113, 115, 128, 155, 171];
            const poss2 = [5, 22, 23, 26, 27, 35, 50, 59, 66, 79, 91, 95, 97, 101, 129, 136, 140, 142, 156];
            const poss1 = [7, 36, 40, 44, 51, 53, 54, 57, 65, 67, 72, 74, 77, 78, 94, 99, 103, 104, 108, 110, 130, 132, 135, 139, 144, 147, 154, 162, 165, 167, 178, 173];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsC, {[question]: val });
                this.setState({ resultsC: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsC, {[question]: val });
                this.setState({ resultsC: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsC, {[question]: val });
                this.setState({ resultsC: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsC, {[question]: val });
                this.setState({ resultsC: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsC, {[question]: val });
                this.setState({ resultsC: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsC, {[question]: val });
                this.setState({ resultsC: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[12] ) {
          if ( value === 'Verdadero') {
            const poss3 = [16, 32, 38, 64, 74, 84, 85, 146, 164];
            const poss2 = [15, 24, 37, 46, 80, 89, 100, 103, 123, 126, 129, 131];
            const poss1 = [6, 12, 21, 22, 30, 39, 41, 43, 44, 55, 61, 63, 68, 75, 98, 127, 135, 138, 143, 163, 165, 171, 172];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsP, {[question]: val });
                this.setState({ resultsP: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsP, {[question]: val });
                this.setState({ resultsP: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsP, {[question]: val });
                this.setState({ resultsP: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsP, {[question]: val });
                this.setState({ resultsP: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsP, {[question]: val });
                this.setState({ resultsP: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsP, {[question]: val });
                this.setState({ resultsP: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[13] ) {
          if ( value === 'Verdadero') {
            const poss3 = [18, 51, 67, 114, 117];
            const poss2 = [29, 33, 53, 71, 96, 97, 109, 167];
            const poss1 = [8, 16, 26, 36, 54, 78, 99, 108, 132, 145, 153];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsA, {[question]: val });
                this.setState({ resultsA: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsA, {[question]: val });
                this.setState({ resultsA: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsA, {[question]: val });
                this.setState({ resultsA: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [166];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsA, {[question]: val });
                this.setState({ resultsA: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsA, {[question]: val });
                this.setState({ resultsA: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsA, {[question]: val });
                this.setState({ resultsA: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[14] ) {
          if ( value === 'Verdadero') {
            const poss3 = [29, 33, 68, 71, 72, 96];
            const poss2 = [18, 51, 53, 67, 98, 114];
            const poss1 = [5, 26, 31, 36, 42, 50, 56, 60, 66, 78, 102, 109, 117, 118, 137, 145, 170, 173];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsH, {[question]: val });
                this.setState({ resultsH: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsH, {[question]: val });
                this.setState({ resultsH: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsH, {[question]: val });
                this.setState({ resultsH: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [41];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsH, {[question]: val });
                this.setState({ resultsH: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsH, {[question]: val });
                this.setState({ resultsH: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsH, {[question]: val });
                this.setState({ resultsH: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[15] ) {
          if ( value === 'Verdadero') {
            const poss3 = [11, 93, 151, 174];
            const poss2 = [14, 20, 28, 50, 60, 86, 103, 125, 128, 134, 137, 170];
            const poss1 = [17, 37, 40, 58, 686, 67, 73, 89, 95, 98, 101, 111, 121, 127, 131, 166, 172];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsN, {[question]: val });
                this.setState({ resultsN: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsN, {[question]: val });
                this.setState({ resultsN: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsN, {[question]: val });
                this.setState({ resultsN: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [19, 42, 158, 161];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsN, {[question]: val });
                this.setState({ resultsN: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsN, {[question]: val });
                this.setState({ resultsN: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsN, {[question]: val });
                this.setState({ resultsN: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[16] ) {
          if ( value === 'Verdadero') {
            const poss3 = [27, 45, 54, 79, 97, 99, 108, 132];
            const poss2 = [5, 8, 26, 36, 51, 53, 59, 65, 71, 72, 76, 83, 96, 109, 136, 154];
            const poss1 = [25, 46, 56, 107, 110, 139, 155, 167, 168];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsD, {[question]: val });
                this.setState({ resultsD: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsD, {[question]: val });
                this.setState({ resultsD: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsD, {[question]: val });
                this.setState({ resultsD: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [166];
            const poss1 = [41, 86];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsD, {[question]: val });
                this.setState({ resultsD: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsD, {[question]: val });
                this.setState({ resultsD: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsD, {[question]: val });
                this.setState({ resultsD: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[17] ) {
          if ( value === 'Verdadero') {
            const poss3 = [17, 87, 119, 157];
            const poss2 = [18, 73, 95, 97, 105, 109, 144, 175];
            const poss1 = [22, 23, 25, 27, 35, 40, 46, 54, 65, 70, 80, 93, 96, 103, 104, 104, 108, 111, 114, 117, 125, 128, 130, 135, 137, 149, 149, 155, 159, 162, 171];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsB, {[question]: val });
                this.setState({ resultsB: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsB, {[question]: val });
                this.setState({ resultsB: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsB, {[question]: val });
                this.setState({ resultsB: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [52, 122];
            const poss1 = [8];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsB, {[question]: val });
                this.setState({ resultsB: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsB, {[question]: val });
                this.setState({ resultsB: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsB, {[question]: val });
                this.setState({ resultsB: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[18] ) {
          if ( value === 'Verdadero') {
            const poss3 = [35, 78, 105, 140, 144, 175];
            const poss2 = [1, 7, 9, 20, 22, 40, 43, 58, 73, 80, 82, 86, 91, 92, 95, 103, 115, 117, 129, 162];
            const poss1 = [6, 12, 14, 30, 32, 44, 50, 55, 60, 66, 89, 93, 94, 101, 104, 111, 113, 114, 116, 120, 123, 125, 128, 130, 137, 146, 155, 165, 166, 171, 172];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsT, {[question]: val });
                this.setState({ resultsT: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsT, {[question]: val });
                this.setState({ resultsT: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsT, {[question]: val });
                this.setState({ resultsT: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [61];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsT, {[question]: val });
                this.setState({ resultsT: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsT, {[question]: val });
                this.setState({ resultsT: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsT, {[question]: val });
                this.setState({ resultsT: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[19] ) {
          if ( value === 'Verdadero') {
            const poss3 = [98, 109, 124, 127, 160, 167];
            const poss2 = [38, 68, 69, 77, 80, 83, 85, 102, 112, 115, 120, 146, 164];
            const poss1 = [3, 8, 13, 19, 23, 24, 29, 31, 74, 82, 141, 147, 156, 161];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsSS, {[question]: val });
                this.setState({ resultsSS: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsSS, {[question]: val });
                this.setState({ resultsSS: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsSS, {[question]: val });
                this.setState({ resultsSS: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsSS, {[question]: val });
                this.setState({ resultsSS: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsSS, {[question]: val });
                this.setState({ resultsSS: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsSS, {[question]: val });
                this.setState({ resultsSS: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[20] ) {
          if ( value === 'Verdadero') {
            const poss3 = [5, 26, 36, 53, 59, 76, 136];
            const poss2 = [33, 45, 47, 50, 56, 72, 79, 96, 108, 109];
            const poss1 = [19, 51, 54, 57, 58, 65, 67, 81, 95, 99, 110, 117, 154];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsCC, {[question]: val });
                this.setState({ resultsCC: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsCC, {[question]: val });
                this.setState({ resultsCC: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsCC, {[question]: val });
                this.setState({ resultsCC: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsCC, {[question]: val });
                this.setState({ resultsCC: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsCC, {[question]: val });
                this.setState({ resultsCC: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsCC, {[question]: val });
                this.setState({ resultsCC: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[21] ) {
          if ( value === 'Verdadero') {
            const poss3 = [80, 100, 123];
            const poss2 = [16, 24, 38, 69, 84, 85, 98, 131, 146, 164];
            const poss1 = [15, 32, 39, 74, 89, 112, 126, 138, 143];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsPP, {[question]: val });
                this.setState({ resultsPP: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsPP, {[question]: val });
                this.setState({ resultsPP: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsPP, {[question]: val });
                this.setState({ resultsPP: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsPP, {[question]: val });
                this.setState({ resultsPP: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsPP, {[question]: val });
                this.setState({ resultsPP: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsPP, {[question]: val });
                this.setState({ resultsPP: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[22] ) {
          if ( value === 'Verdadero') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [4, 14, 34, 39, 60, 61, 75, 78, 86, 88, 89, 93, 103, 106, 122, 125, 126, 137, 138, 149, 153, 159, 166];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsY, {[question]: val });
                this.setState({ resultsY: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsY, {[question]: val });
                this.setState({ resultsY: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsY, {[question]: val });
                this.setState({ resultsY: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsY, {[question]: val });
                this.setState({ resultsY: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsY, {[question]: val });
                this.setState({ resultsY: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsY, {[question]: val });
                this.setState({ resultsY: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[23] ) {
          if ( value === 'Verdadero') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [3, 5, 8, 18, 23, 24, 25, 26, 27, 33, 36, 43, 45, 49, 50, 51, 53, 54, 58, 59, 63, 66, 67, 68, 71, 72, 76, 79, 82, 96, 97, 99, 100, 102, 108, 110, 114, 115, 117, 118, 120, 128, 132, 136, 158, 167];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsZ, {[question]: val });
                this.setState({ resultsZ: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsZ, {[question]: val });
                this.setState({ resultsZ: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsZ, {[question]: val });
                this.setState({ resultsZ: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsZ, {[question]: val });
                this.setState({ resultsZ: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsZ, {[question]: val });
                this.setState({ resultsZ: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsZ, {[question]: val });
                this.setState({ resultsZ: agregar });
              }
            }
          }
        }
        if ( tipo === tipos[24] ) {
          if ( value === 'Verdadero') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [62, 90, 152, 169];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsV, {[question]: val });
                this.setState({ resultsV: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsV, {[question]: val });
                this.setState({ resultsV: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 1 * 1;
                const agregar = Object.assign({}, resultsV, {[question]: val });
                this.setState({ resultsV: agregar });
              }
            }
          } else if ( value === 'Falso') {
            const poss3 = [];
            const poss2 = [];
            const poss1 = [62, 90, 152, 169];
            for (let e of poss3) {
              if (pos === e) {
                const val = 1 * 3;
                const agregar = Object.assign({}, resultsV, {[question]: val });
                this.setState({ resultsV: agregar });
              }
            }
            for (let e of poss2) {
              if (pos === e) {
                const val = 1 * 2;
                const agregar = Object.assign({}, resultsV, {[question]: val });
                this.setState({ resultsV: agregar });
              }
            }
            for (let e of poss1) {
              if (pos === e) {
                const val = 0 * 1;
                const agregar = Object.assign({}, resultsV, {[question]: val });
                this.setState({ resultsV: agregar });
              }
            }
          }
        }
      }
    }
    const agregarTotal = Object.assign({}, resultsTotal, {[question]: +value });
    this.setState({ resultsTotal: agregarTotal });
  }

  onSubmit(event) {
    event.preventDefault();

    let resultadoId = this.props.resultadoId;

    const { editableAlter, resultsTotal, resultsV, resultsX, resultsY, resultsZ, results1, results2, results3, results4, results5, results6A, results6B, results7, results8A,
      results8B, resultsS, resultsC, resultsP, resultsA, resultsH, resultsN, resultsD, resultsB, resultsT, resultsSS, resultsCC, resultsPP  } = this.state;

    const X1 = [0, 180, 194, 206, 219, 231, 244, 256, 269, 281, 294, 306, 319, 344, 356, 369, 381, 394, 419, 431, 444, 456, 469, 482, 494, 507, 519, 532, 544, 557, 963];
    const X2 = [0, 5, 10, 15, 20, 25, 30, 34, 40, 45, 50, 54, 55, 56, 58, 60, 63, 65, 67, 70, 72, 75, 79, 84, 89, 91, 93, 95, 97, 100];
    const hY = [0, 5, 10, 15, 20, 25, 30, 34, 39, 43, 46, 50, 56, 62, 67, 72, 75, 78, 82, 85, 90, 95, 100];
    const hZ = [12, 24, 35, 38, 42, 45, 48, 52, 55, 57, 59, 61, 63, 65, 67, 69, 70, 71, 73, 75, 76, 77, 78, 79, 80, 82, 84, 85, 87, 89, 91, 93, 95, 97, 100];
    const h1 = [0, 0, 0, 0, 0, 0, 0, 13, 18, 23, 28, 33, 38, 43, 48, 53, 58, 63, 66, 67, 69, 70, 71, 71, 73, 74, 76, 78, 81, 83, 86, 88, 91, 96, 101, 106, 108, 109, 111, 116, 121];
    const h2 = [6, 6, 6, 6, 6, 6, 6, 16, 26, 41, 44, 47, 50, 53, 57, 61, 66, 66, 67, 68, 68, 69, 71, 74, 76, 78, 81, 82, 83, 84, 86, 88, 90, 94, 97, 100, 101, 103, 105, 106, 108, 110, 112, 114, 116, 118, 121];
    const h3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 23, 34, 40, 42, 50, 59, 66, 66, 66, 69, 71, 72, 74, 77, 78, 80, 81, 85, 89, 91, 93, 94, 94, 94, 95, 96, 98, 100, 102, 106, 111, 116, 121];
    const h4 = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 11, 13, 16, 18, 26, 36, 41, 44, 47, 50, 53, 55, 57, 59, 61, 63, 66, 67, 68, 69, 70, 71, 73, 74, 76, 78, 79, 80, 81, 82, 83, 85, 87, 89, 90, 91, 94, 93, 99, 103, 108, 112, 116, 118, 121];
    const h5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 12, 19, 23, 27, 32, 35, 38, 41, 44, 47, 49, 51, 52, 55, 61, 66, 67, 69, 70, 72, 73, 75, 77, 80, 81, 83, 86, 88, 90, 92, 93, 96, 98, 100, 101, 101, 102, 103, 104, 104, 105, 106, 108, 110, 112, 114, 116, 118, 119, 120, 121];
    const h6A = [0, 0, 0, 0, 0, 0, 0, 0, 9, 13, 17, 22, 27, 32, 37, 42, 44, 47, 49, 52, 54, 57, 59, 62, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 79, 81, 83, 85, 87, 88, 91, 94, 98, 101, 104, 106, 108, 110, 112, 114, 116, 118, 121];
    const h6B = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 15, 25, 35, 37, 39, 41, 43, 45, 47, 49, 50, 52, 54, 56, 62, 66, 67, 68, 70, 73, 75, 78, 79, 80, 83, 86, 88, 89, 93, 96, 98, 100, 102, 104, 105, 106, 114, 116, 118, 119, 121];
    const h7 = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 11, 14, 18, 23, 26, 31, 34, 36, 39, 41, 46, 54, 59, 61, 61, 61, 61, 61, 62, 63, 64, 65, 67, 71, 75, 78, 80, 83, 86, 90, 93, 94, 95, 96, 97, 98, 102, 106, 108, 110, 113, 116, 118, 121];
    const h8A = [0,  0,  0, 0, 0, 0, 0, 2, 7, 12, 17, 22, 27, 32, 34, 36, 38, 40, 42, 44, 47, 49, 51, 55, 62, 66, 67, 68, 69, 70, 71, 74, 76, 78, 81, 85, 88, 90, 94, 98, 102, 105, 107, 108, 110, 111, 111, 112, 113, 114, 116, 117, 118, 119, 120, 121];
    const h8B = [0, 0, 0, 10, 20, 30, 35, 38, 41, 44, 47, 50, 55, 60, 61, 66, 67, 68, 69, 70, 71, 72, 73, 74, 74, 74, 75, 76, 76, 77, 78, 79, 81, 83, 89, 93, 98, 104, 111, 116, 119, 120, 120, 121];
    const hS = [6, 6, 6, 16, 26, 36, 41, 43, 46, 48, 51, 53, 56, 58, 61, 63, 64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 70, 71, 71, 72, 72, 73, 73, 74, 75, 77, 81, 84, 87, 90, 97, 105, 110, 116, 119, 121];
    const hC = [0, 0, 0, 0, 0, 11, 16, 21, 26, 31, 36, 41, 42, 43, 44, 45, 46, 48, 50, 53, 56, 58, 59, 61, 63, 66, 66, 66, 66, 66, 66, 67, 68, 69, 70, 71, 72, 73, 73, 73, 74, 74, 75, 75, 75, 75, 76, 76, 77, 80, 84, 87, 92, 95, 97, 100, 104, 108, 110, 112, 114, 116, 118, 119, 121];
    const hP = [0, 0, 0, 0, 0, 0, 12, 15, 17, 19, 27, 37, 42, 45, 49, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 65, 66, 66, 67, 68, 69, 69, 70, 70, 71, 72, 72, 73, 73, 74, 75, 77, 80, 82, 85, 88, 92, 95, 98, 100, 102, 104, 107, 109, 111, 113, 117, 120, 121];
    const hA = [0, 0, 0, 20, 30, 40, 50, 60, 62, 64, 66, 70, 72, 75, 77, 79, 81, 83, 85, 86, 87, 88, 89, 90, 90, 90, 91, 93, 95, 96, 98, 100, 102, 105, 109, 113, 115];
    const hH = [0, 0, 0, 15, 30, 40, 48, 55, 57, 58, 59, 59, 60, 60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 67, 68, 68, 68, 69, 70, 72, 75, 83, 87, 92, 96, 100, 105, 110, 115];
    const hN = [0, 0, 0, 0, 0, 0, 2, 5, 10, 12, 20, 30, 35, 37, 39, 41, 44, 47, 50, 53, 57, 60, 60, 60, 60, 60, 60, 60, 61, 62, 63, 64, 65, 67, 69, 71, 73, 75, 79, 82, 85, 90, 95, 110, 115];
    const hD = [0, 0, 0, 0, 10, 15, 18, 21, 25, 27, 30, 32, 35, 42, 49, 55, 58, 59, 61, 63, 71, 73, 74, 76, 80, 85, 87, 88, 89, 90, 90, 90, 91, 91, 92, 92, 93, 93, 93, 94, 94, 95, 96, 96, 97, 98, 98, 99, 99, 100, 100, 104, 107, 110, 112, 114, 115];
    const hB = [0, 0, 0, 0, 0, 0, 0, 0, 15, 25, 35, 38, 41, 45, 48, 51, 55, 60, 61, 62, 63, 64, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 86, 88, 89, 90, 92, 93, 94, 95, 97, 98, 99, 100, 101, 103, 105, 108, 111, 113, 115];
    const hT = [0, 0, 0, 0, 0, 0, 0, 5, 10, 15, 20, 25, 30, 35, 37, 39, 41, 44, 48, 51, 54, 57, 60, 60, 60, 61, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 75, 77, 79, 81, 83, 85, 86, 87, 89, 90, 91, 92, 94, 95, 97, 98, 99, 100, 103, 106, 109, 112, 115];
    const hSS = [0, 0, 0, 35, 40, 44, 50, 55, 60, 60, 60, 60, 60, 61, 61, 62, 62, 63, 65, 67, 67, 68, 68, 69, 70, 70, 71, 72, 73, 75, 77, 79, 80, 82, 85, 90, 95, 100, 110, 115];
    const hCC  = [0, 35, 38, 41, 44, 47, 50, 55, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 61, 62, 63, 64, 65, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 75, 76, 77, 78, 79, 80, 83, 85, 90, 95, 100, 110, 115];
    const hPP = [0, 0, 0, 10, 25, 35, 38, 41, 44, 47, 51, 53, 55, 57, 60, 60, 60, 61, 63, 64, 65, 67, 69, 71, 72, 73, 75, 80, 85, 88, 91, 94, 97, 100, 105, 110, 115];
    const mY = [0, 0, 0, 10, 20, 24, 28, 34, 35, 41, 45, 50, 57, 63, 67, 71, 75, 80, 85, 91, 95, 100];
    const mZ = [0, 15, 25, 34, 35, 37, 40, 43, 45, 46, 48, 49, 51, 52, 54, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 78, 82, 85, 87, 88, 90, 92, 94, 97, 100];
    const m1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 35, 47, 50, 53, 56, 60, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 84, 86, 88, 90, 91, 96, 104, 111, 118, 121];
    const m2 = [0, 0, 0, 0, 0, 15, 21, 31, 41, 44, 48, 51, 53, 60, 64, 66, 67, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 83, 85, 87, 88, 89, 90, 91, 94, 97, 100, 102, 104, 105, 106, 108, 110, 111, 116, 118, 120, 121];
    const m3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 15, 20, 30, 37, 45, 55, 66, 68, 69, 70, 71, 72, 75, 78, 81, 84, 87, 89, 91, 93, 95, 97, 99, 101, 102, 103, 103, 104, 105, 108, 112, 116, 118, 121];
    const m4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 15, 18, 21, 24, 31, 36, 41, 49, 56, 58, 59, 61, 62, 63, 64, 66, 69, 70, 74, 78, 79, 80, 81, 81, 82, 83, 84, 86, 89, 91, 92, 93, 93, 94, 94, 96, 97, 99, 101, 106, 121];
    const m5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 13, 23, 33, 35, 38, 40, 43, 45, 48, 52, 58, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 84, 85, 86, 87, 89, 91, 96, 101, 106, 112, 118, 121];
    const m6A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 17, 22, 27, 32, 42, 45, 47, 50, 52, 57, 58, 59, 61, 62, 63, 64, 65, 66, 66, 66, 67, 69, 70, 72, 73, 75, 76, 78, 79, 80, 81, 85, 87, 89, 90, 90, 91, 95, 98, 100, 102, 103, 105, 106, 111, 116, 121];
    const m6B = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 12, 16, 20, 24, 30, 35, 37, 39, 42, 44, 49, 55, 60, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 95, 97, 99, 101, 103, 106, 111, 115, 117, 119, 121];
    const m7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 14, 16, 21, 26, 31, 36, 41, 44, 47, 50, 54, 58, 61, 61, 62, 63, 64, 68, 71, 74, 78, 82, 84, 86, 89, 91, 92, 93, 94, 94, 95, 95, 96, 98, 100, 103, 106, 111, 116, 121];
    const m8A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 12, 17, 24, 28, 32, 34, 35, 40, 45, 48, 50, 51, 52, 53, 57, 63, 66, 67, 68, 69, 72, 73, 74, 77, 78, 79, 79, 80, 81, 85, 88, 89, 90, 93, 96, 100, 104, 109, 111, 113, 115, 118, 121];
    const m8B = [0, 0, 0, 10, 15, 20, 25, 30, 34, 37, 40, 42, 45, 52, 58, 66, 67, 68, 69, 70, 71, 72, 74, 75, 75, 76, 76, 77, 78, 79, 80, 81, 83, 86, 87, 90, 92, 95, 99, 102, 104, 106, 106, 107, 108, 111, 116, 118, 121];
    const mS = [0, 0, 0, 16, 26, 41, 42, 43, 43, 44, 44, 44, 45, 46, 47, 48, 51, 53, 54, 60, 61, 62, 64, 65, 66, 66, 66, 66, 66, 66, 67, 67, 68, 68, 69, 70, 71, 72, 73, 74, 76, 79, 81, 89, 96, 102, 108, 116, 121];
    const mC = [0, 0, 0, 0, 5, 10, 20, 26, 31, 33, 34, 36, 37, 38, 39, 40, 41, 43, 46, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 60, 61, 62, 62, 63, 64, 64, 65, 66, 66, 67, 68, 68, 69, 70, 70, 71, 72, 72, 73, 73, 74, 75, 78, 81, 83, 85, 88, 92, 96, 100, 103, 106, 109, 112, 115, 121];
    const mP = [7, 7, 7, 12, 17, 22, 27, 32, 37, 40, 42, 43, 45, 47, 49, 52, 53, 57, 62, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 69, 71, 73, 75, 77, 80, 82, 84, 86, 88, 90, 92, 96, 100, 104, 107, 109, 111, 114, 117, 119, 121];
    const mA = [0, 0, 0, 5, 10, 15, 20, 30, 32, 35, 37, 40, 42, 48, 52, 57, 60, 64, 68, 72, 75, 77, 80, 82, 85, 87, 88, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109, 112, 115];
    const mH = [10, 10, 10, 25, 30, 35, 40, 43, 45, 50, 52, 55, 57, 57, 58, 59, 59, 59, 60, 61, 62, 63, 64, 65, 65, 66, 66, 67, 68, 69, 70, 70, 71, 73, 74, 75, 80, 85, 89, 94, 97, 100, 105, 110, 115];
    const mN = [0, 0, 0, 0, 5, 7, 9, 12, 15, 18, 25, 30, 35, 37, 40, 42, 45, 47, 50, 52, 55, 57, 60, 60, 60, 60, 60, 60, 60, 61, 62, 64, 65, 67, 68, 70, 73, 74, 76, 79, 81, 84, 90, 97, 110, 115];
    const mD = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 15, 19, 22, 25, 27, 29, 31, 33, 35, 37, 39, 41, 44, 46, 53, 58, 61, 65, 70, 74, 76, 77, 79, 82, 86, 88, 89, 90, 91, 91, 91, 91, 92, 92, 92, 93, 93, 93, 94, 95, 96, 97, 98, 100, 105, 110, 115];
    const mB = [0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 20, 25, 35, 37, 39, 42, 45, 47, 49, 52, 55, 57, 59, 60, 60, 60, 60, 60, 60, 61, 63, 65, 67, 69, 71, 73, 75, 78, 82, 85, 89, 91, 94, 96, 98, 100, 103, 106, 109, 112, 115];
    const mT = [0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 16, 20, 25, 30, 35, 37, 39, 41, 43, 45, 48, 51, 55, 58, 60, 60, 60, 60, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 72, 73, 74, 75, 77, 78, 79, 80, 81, 83, 85, 87, 88, 89, 90, 92, 95, 97, 100, 102, 104, 107, 110, 115];
    const mSS = [0, 0, 0, 35, 38, 40, 42, 45, 47, 55, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 62, 62, 64, 65, 67, 69, 70, 72, 73, 75, 80, 81, 83, 85, 87, 89, 90, 95, 97, 98, 99, 100, 102, 104, 105, 110, 115];
    const mCC = [0, 0, 0, 10, 25, 35, 45, 47, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 60, 60, 60, 60, 60, 60, 60, 60, 61, 61, 62, 64, 66, 67, 69, 71, 72, 73, 76, 77, 78, 79, 80, 81, 82, 83, 88, 95, 100, 110, 115];
    const mPP = [0, 0, 0, 15, 35, 37, 40, 45, 55, 60, 60, 60, 60, 60, 60, 60, 61, 62, 64, 65, 67, 70, 71, 73, 74, 76, 82, 86, 87, 88, 91, 94, 97, 100, 105, 110, 115];
    const factorX = [0, 144, 145, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 401, 417, 433, 449, 465, 481, 497, 513, 529, 545, 561, 577, 591];
    const operadoresX = [0, 0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12];
    const operadoresX2 = [0, 0, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0, 0, 0, -1, -1, -2, -2, -3, -3, -4, -4, -5, -5, -6];

    if ( Object.getOwnPropertyNames(resultsTotal).sort().length < Object.getOwnPropertyNames(editableAlter).sort().length ) {
      alert( 'Debe contestar todas las preguntas!' );
      // console.log( results1 );
    } else {
      this.test();

      let resV = Object.values(resultsV).reduce((a, b) => a + b); // Total
      let resY = Object.values(resultsY).reduce((a, b) => a + b); // Total
      let resZ = Object.values(resultsZ).reduce((a, b) => a + b); // Total
      let res1 = Object.values(results1).reduce((a, b) => a + b); // Total
      let res2 = Object.values(results2).reduce((a, b) => a + b); // Total
      let res3 = Object.values(results3).reduce((a, b) => a + b); // Total
      let res4 = Object.values(results4).reduce((a, b) => a + b); // Total
      let res5 = Object.values(results5).reduce((a, b) => a + b); // Total
      let res6A = Object.values(results6A).reduce((a, b) => a + b); // Total
      let res6B = Object.values(results6B).reduce((a, b) => a + b); // Total
      let res7 = Object.values(results7).reduce((a, b) => a + b); // Total
      let res8A = Object.values(results8A).reduce((a, b) => a + b); // Total
      let res8B = Object.values(results8B).reduce((a, b) => a + b); // Total
      let resS = Object.values(resultsS).reduce((a, b) => a + b); // Total
      let resC = Object.values(resultsC).reduce((a, b) => a + b); // Total
      let resP = Object.values(resultsP).reduce((a, b) => a + b); // Total
      let resA = Object.values(resultsA).reduce((a, b) => a + b); // Total
      let resH = Object.values(resultsH).reduce((a, b) => a + b); // Total
      let resN = Object.values(resultsN).reduce((a, b) => a + b); // Total
      let resD = Object.values(resultsD).reduce((a, b) => a + b); // Total
      let resB = Object.values(resultsB).reduce((a, b) => a + b); // Total
      let resT = Object.values(resultsT).reduce((a, b) => a + b); // Total
      let resSS = Object.values(resultsSS).reduce((a, b) => a + b); // Total
      let resCC = Object.values(resultsCC).reduce((a, b) => a + b); // Total
      let resPP = Object.values(resultsPP).reduce((a, b) => a + b); // Total
      let resX = (res4 + res8A) * 1.5 + (res1 + res2 + res3 + res8B) * 1.6 + (res5 + res6A + res6B + res7);
      let i = 0;
      const sexo = 'F';

      // para la Escala X (puntaje)
      for (i ;  i < 30 ; i++) {
        if (resX > X1[i] && resX <= X1[i + 1]) {
          resX = X2[i];
          console.log('Puntaje X : ' + X2[i]);
        }
      }
      // para la Escala V (validar)
      if (resV < 1) {
        console.log('V: Es Valido');
      } else {
        console.log('V: No es Valido');
      }
      // para la Escala X (validar)
      if (resX > 144 && resX < 591) {
        console.log('X: Es Valido');
      }
      // Para sexo femenino
      if (sexo === 'F') {
        for (i = 0 ; i < mY.length ; i++) {
          if ( resY === i ) {
            resY = mY[i];
            console.log('Puntaje Y : ' + resY);
            break;
          }
        }
        for (i = 0 ; i < mZ.length ; i++) {
          if ( resZ === i ) {
            resZ = mZ[i];
            console.log('Puntaje Z : ' + resZ);
            break;
          }
        }
        for (i = 0 ; i < m1.length ; i++) {
          if ( res1 === i ) {
            res1 = m1[i];
            console.log('Puntaje 1 : ' + res1);
            break;
          }
        }
        for (i = 0 ; i < m2.length ; i++) {
          if ( res2 === i ) {
            res2 = m2[i];
            console.log('Puntaje 2 : ' + res2);
            break;
          }
        }
        for (i = 0 ; i < m3.length ; i++) {
          if ( res3 === i ) {
            res3 = m3[i];
            console.log('Puntaje 3 : ' + res3);
            break;
          }
        }
        for (i = 0 ; i < m4.length ; i++) {
          if ( res4 === i ) {
            res4 = m4[i];
            console.log('Puntaje 4 : ' + res4);
            break;
          }
        }
        for (i = 0 ; i < m5.length ; i++) {
          if ( res5 === i ) {
            res5 = m5[i];
            console.log('Puntaje 5 : ' + res5);
            break;
          }
        }
        for (i = 0 ; i < m6A.length ; i++) {
          if ( res6A === i ) {
            res6A = m6A[i];
            console.log('Puntaje 6A : ' + res6A);
            break;
          }
        }
        for (i = 0 ; i < m6B.length ; i++) {
          if ( res6B === i ) {
            res6B = m6B[i];
            console.log('Puntaje 6B : ' + res6B);
            break;
          }
        }
        for (i = 0 ; i < m7.length ; i++) {
          if ( res7 === i ) {
            res7 = m7[i];
            console.log('Puntaje 7 : ' + res7);
            break;
          }
        }
        for (i = 0 ; i < m8A.length ; i++) {
          if ( res8A === i ) {
            res8A = m8A[i];
            console.log('Puntaje 8A : ' + res8A);
            break;
          }
        }
        for (i = 0 ; i < m8B.length ; i++) {
          if ( res8B === i ) {
            res8B = m8B[i];
            console.log('Puntaje 8B : ' + res8B);
            break;
          }
        }
        for (i = 0 ; i < mS.length ; i++) {
          if ( resS === i ) {
            resS = mS[i];
            console.log('Puntaje S : ' + resS);
            break;
          }
        }
        for (i = 0 ; i < mC.length ; i++) {
          if ( resC === i ) {
            resC = mC[i];
            console.log('Puntaje C : ' + resC);
            break;
          }
        }
        for (i = 0 ; i < mP.length ; i++) {
          if ( resP === i ) {
            resP = mP[i];
            console.log('Puntaje P : ' + resP);
            break;
          }
        }
        for (i = 0 ; i < mA.length ; i++) {
          if ( resA === i ) {
            resA = mA[i];
            console.log('Puntaje A : ' + resA);
            break;
          }
        }
        for (i = 0 ; i < mH.length ; i++) {
          if ( resH === i ) {
            resH = mH[i];
            console.log('Puntaje H : ' + resH);
            break;
          }
        }
        for (i = 0 ; i < mN.length ; i++) {
          if ( resN === i ) {
            resN = mN[i];
            console.log('Puntaje N : ' + resN);
            break;
          }
        }
        for (i = 0 ; i < mD.length ; i++) {
          if ( resD === i ) {
            resD = mD[i];
            console.log('Puntaje D : ' + resD);
            break;
          }
        }
        for (i = 0 ; i < mB.length ; i++) {
          if ( resB === i ) {
            resB = mB[i];
            console.log('Puntaje B : ' + resB);
            break;
          }
        }
        for (i = 0 ; i < mT.length ; i++) {
          if ( resT === i ) {
            resT = mT[i];
            console.log('Puntaje T : ' + resT);
            break;
          }
        }
        for (i = 0 ; i < mSS.length ; i++) {
          if ( resSS === i ) {
            resSS = mSS[i];
            console.log('Puntaje SS : ' + resSS);
            break;
          }
        }
        for (i = 0 ; i < mCC.length ; i++) {
          if ( resCC === i ) {
            resCC = mCC[i];
            console.log('Puntaje CC : ' + resCC);
            break;
          }
        }
        for (i = 0 ; i < mPP.length ; i++) {
          if ( resPP === i ) {
            resPP = mPP[i];
            console.log('Puntaje PP : ' + resPP);
            break;
          }
        }
      } else {
        for (i = 0 ; i < hY.length ; i++) {
          if ( resY === i ) {
            resY = hY[i];
            console.log('Puntaje Y : ' + resY);
            break;
          }
        }
        for (i = 0 ; i < hZ.length ; i++) {
          if ( resZ === i ) {
            resZ = hZ[i];
            console.log('Puntaje Z : ' + resZ);
            break;
          }
        }
        for (i = 0 ; i < h1.length ; i++) {
          if ( res1 === i ) {
            res1 = h1[i];
            console.log('Puntaje 1 : ' + res1);
            break;
          }
        }
        for (i = 0 ; i < h2.length ; i++) {
          if ( res2 === i ) {
            res2 = h2[i];
            console.log('Puntaje 2 : ' + res2);
            break;
          }
        }
        for (i = 0 ; i < h3.length ; i++) {
          if ( res3 === i ) {
            res3 = h3[i];
            console.log('Puntaje 3 : ' + res3);
            break;
          }
        }
        for (i = 0 ; i < h4.length ; i++) {
          if ( res4 === i ) {
            res4 = h4[i];
            console.log('Puntaje 4 : ' + res4);
            break;
          }
        }
        for (i = 0 ; i < h5.length ; i++) {
          if ( res5 === i ) {
            res5 = h5[i];
            console.log('Puntaje 5 : ' + res5);
            break;
          }
        }
        for (i = 0 ; i < h6A.length ; i++) {
          if ( res6A === i ) {
            res6A = h6A[i];
            console.log('Puntaje 6A : ' + res6A);
            break;
          }
        }
        for (i = 0 ; i < h6B.length ; i++) {
          if ( res6B === i ) {
            res6B = h6B[i];
            console.log('Puntaje 6B : ' + res6B);
            break;
          }
        }
        for (i = 0 ; i < h7.length ; i++) {
          if ( res7 === i ) {
            res7 = h7[i];
            console.log('Puntaje 7 : ' + res7);
            break;
          }
        }
        for (i = 0 ; i < h8A.length ; i++) {
          if ( res8A === i ) {
            res8A = h8A[i];
            console.log('Puntaje 8A : ' + res8A);
            break;
          }
        }
        for (i = 0 ; i < h8B.length ; i++) {
          if ( res8B === i ) {
            res8B = h8B[i];
            console.log('Puntaje 8B : ' + res8B);
            break;
          }
        }
        for (i = 0 ; i < hS.length ; i++) {
          if ( resS === i ) {
            resS = hS[i];
            console.log('Puntaje S : ' + resS);
            break;
          }
        }
        for (i = 0 ; i < hC.length ; i++) {
          if ( resC === i ) {
            resC = hC[i];
            console.log('Puntaje C : ' + resC);
            break;
          }
        }
        for (i = 0 ; i < hP.length ; i++) {
          if ( resP === i ) {
            resP = hP[i];
            console.log('Puntaje P : ' + resP);
            break;
          }
        }
        for (i = 0 ; i < hA.length ; i++) {
          if ( resA === i ) {
            resA = hA[i];
            console.log('Puntaje A : ' + resA);
            break;
          }
        }
        for (i = 0 ; i < hH.length ; i++) {
          if ( resH === i ) {
            resH = hH[i];
            console.log('Puntaje H : ' + resH);
            break;
          }
        }
        for (i = 0 ; i < hN.length ; i++) {
          if ( resN === i ) {
            resN = hN[i];
            console.log('Puntaje N : ' + resN);
            break;
          }
        }
        for (i = 0 ; i < hD.length ; i++) {
          if ( resD === i ) {
            resD = hD[i];
            console.log('Puntaje D : ' + resD);
            break;
          }
        }
        for (i = 0 ; i < hB.length ; i++) {
          if ( resB === i ) {
            resB = hB[i];
            console.log('Puntaje B : ' + resB);
            break;
          }
        }
        for (i = 0 ; i < hT.length ; i++) {
          if ( resT === i ) {
            resT = hT[i];
            console.log('Puntaje T : ' + resT);
            break;
          }
        }
        for (i = 0 ; i < hSS.length ; i++) {
          if ( resSS === i ) {
            resSS = hSS[i];
            console.log('Puntaje SS : ' + resSS);
            break;
          }
        }
        for (i = 0 ; i < hCC.length ; i++) {
          if ( resCC === i ) {
            resCC = hCC[i];
            console.log('Puntaje CC : ' + resCC);
            break;
          }
        }
        for (i = 0 ; i < hPP.length ; i++) {
          if ( resPP === i ) {
            resPP = hPP[i];
            console.log('Puntaje PP : ' + resPP);
            break;
          }
        }
      }
      // Factor corrector X (Patrones clinicos de personalidad y sindromes clinicos)
      for (i ;  i < factorX.length ; i++) {
        if (res1 >= factorX[i] && res1 < factorX[i + 1]) {
          res1 = res1 + operadoresX[i];
        }
        if (res2 >= factorX[i] && res2 < factorX[i + 1]) {
          res2 = res2 + operadoresX[i];
        }
        if (res3 >= factorX[i] && res3 < factorX[i + 1]) {
          res3 = res3 + operadoresX[i];
        }
        if (res4 >= factorX[i] && res4 < factorX[i + 1]) {
          res4 = res4 + operadoresX[i];
        }
        if (res5 >= factorX[i] && res5 < factorX[i + 1]) {
          res5 = res5 + operadoresX[i];
        }
        if (res6A >= factorX[i] && res6A < factorX[i + 1]) {
          res6A = res6A + operadoresX[i];
        }
        if (res6B >= factorX[i] && res6B < factorX[i + 1]) {
          res6B = res6B + operadoresX[i];
        }
        if (res7 >= factorX[i] && res7 < factorX[i + 1]) {
          res7 = res7 + operadoresX[i];
        }
        if (res8A >= factorX[i] && res8A < factorX[i + 1]) {
          res8A = res8A + operadoresX[i];
        }
        if (res8B >= factorX[i] && res8B < factorX[i + 1]) {
          res8B = res8B + operadoresX[i];
        }
        if (resA >= factorX[i] && resA < factorX[i + 1]) {
          resA = resA + operadoresX[i];
        }
        if (resH >= factorX[i] && resH < factorX[i + 1]) {
          resH = resH + operadoresX[i];
        }
        if (resN >= factorX[i] && resN < factorX[i + 1]) {
          resN = resN + operadoresX[i];
        }
        if (resD >= factorX[i] && resD < factorX[i + 1]) {
          resD = resD + operadoresX[i];
        }
        if (resB >= factorX[i] && resB < factorX[i + 1]) {
          resB = resB + operadoresX[i];
        }
        if (resT >= factorX[i] && resT < factorX[i + 1]) {
          resT = resT + operadoresX[i];
        }
      }
      // Factor corrector X/2 (Patologia severa de personalidad y sindromes severos)
      for (i ;  i < factorX.length ; i++) {
        if (resS >= factorX[i] && resS < factorX[i + 1]) {
          resS = resS + operadoresX2[i];
        }
        if (resC >= factorX[i] && resC < factorX[i + 1]) {
          resC = resC + operadoresX2[i];
        }
        if (resP >= factorX[i] && resP < factorX[i + 1]) {
          resP = resP + operadoresX2[i];
        }
        if (resSS >= factorX[i] && resSS < factorX[i + 1]) {
          resSS = resSS + operadoresX2[i];
        }
        if (resCC >= factorX[i] && resCC < factorX[i + 1]) {
          resCC = resCC + operadoresX2[i];
        }
        if (resPP >= factorX[i] && resPP < factorX[i + 1]) {
          resPP = resPP + operadoresX2[i];
        }
      }
      // Factor DA ( 2, 8B, C)
      let resFinal = 0;
      const valorTiempo = 'menos de 1 semana';
      if ( resD > 85 && resA < 85 ) {
          resFinal = resD - 85;
      } else if (resD > 85 && resA > 85) {
          resFinal = resD - 85 + resA - 85;
      } else {
          resFinal = 0;
      }
      if ( valorTiempo === 'menos de 1 semana' && resFinal < 26 && resFinal > 0) {
        // para el tipo 2
        res2 = res2 - resFinal;
        // para el tipo 8B
        res8B = res8B - resFinal;
        // para el tipo C
        if ( resFinal < 21) {
          resC = resC - resFinal;
        }
      } else if (valorTiempo === 'de 1 a 4 semanas' && resFinal < 16 && resFinal > 0) {
        // para el tipo 2
        res2 = res2 - (resFinal) / 2;
        // para el tipo 8B
        res8B = res8B - (resFinal) / 2;
        // para el tipo C
        resC =  resC - ((resFinal) * 3 ) / 4;
      } else if (valorTiempo === 'mas de 4 semanas' && resFinal < 16 && resFinal > 0) {
        // para el tipo 2
        res2 =  res2 - (resFinal) / 4;
        // para el tipo 8B
        res8B =  res8B - (resFinal) / 4;
            // para el tipo C
        if ( resFinal < 11) {
          resC = resC - (resFinal) / 2;
        }
      }
      // Factor DD (S, C, A, H, D)
      resS = resS + Math.round((resY - resZ) / 10);
      resC = resC + Math.round((resY - resZ) / 10);
      resA = resA + Math.round((resY - resZ) / 10);
      resH = resH + Math.round((resY - resZ) / 10);
      resD = resD + Math.round((resY - resZ) / 10);
      // Factor DC I (patologia severa, A, H, D)
      let contador = 0;
      let contador2 = 0;
      let VALIDACION = 'FALSE';
      let VALIDACION2 = 'FALSE';
      if ( sexo === 'F') {
          if (res8B > res1 && res8B > res2 && res8B >= res3 && res8B > res5 && res8B > res6A && res8B > res6B
          && res8B > res7 && res8B >= res8A && res8B >= res4) {
              VALIDACION2  = 'TRUE';
          }
          if ( (res4 > res1 && res4 > res2 && res4 >= res3 && res4 > res5 && res4 > res6A && res4 > res6B
          && res4 > res7 && res4 > res8A && res4 > res8B) || (res5 > res1 && res5 >= res2 && res5 >= res3 && res5 >= res4
          && res5 > res6A && res5 > res6B && res5 >= res7 && res5 >= res8A && res5 >= res8B) ) {
              VALIDACION = 'TRUE';
          }
          if ( res7 > res1) {
              contador = contador + 1;
          }
          if ( res7 > res2) {
              contador = contador + 1;
          }
          if ( res7 >= res3) {
              contador = contador + 1;
          }
          if ( res7 >= res4) {
              contador = contador + 1;
          }
          if ( res7 > res5) {
              contador = contador + 1;
          }
          if ( res7 > res6A) {
              contador = contador + 1;
          }
          if ( res7 > res6B) {
              contador = contador + 1;
          }
          if ( res7 > res8A) {
              contador = contador + 1;
          }
          if ( res7 > res8B) {
              contador = contador + 1;
          }
          if ( res2 > res1) {
              contador2 = contador2 + 1;
          }
          if ( res2 >= res3) {
              contador2 = contador2 + 1;
          }
          if ( res2 >= res4) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res5) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res6A) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res6B) {
              contador2 = contador2 + 1;
          }
          if ( res2 >= res7) {
              contador2 = contador2 + 1;
          }
          if ( res2 >= res8A) {
              contador2 = contador2 + 1;
          }
          if ( res2 >= res8B) {
              contador2 = contador2 + 1;
          }
      } else {
          if (res8B >= res1 && res8B >= res2 && res8B >= res3 && res8B >= res5 && res8B >= res6A && res8B >= res6B
          && res8B >= res7 && res8B >= res8A && res8B > res4) {
              VALIDACION2 = 'TRUE';
          }
          if ( (res4 > res1 && res4 >= res2 && res4 >= res3 && res4 >= res5 && res4 >= res6A && res4 >= res6B
          && res4 >= res7 && res4 >= res8A && res4 > res8B) || (res5 > res1 && res5 >= res2 && res5 > res3 && res5 > res4
          && res5 > res6A && res5 > res6B && res5 >= res7 && res5 >= res8A && res5 > res8B) ) {
              VALIDACION = 'TRUE';
          }
          if ( res7 > res1) {
              contador = contador + 1;
          }
          if ( res7 >= res2) {
              contador = contador + 1;
          }
          if ( res7 > res3) {
              contador = contador + 1;
          }
          if ( res7 > res4) {
              contador = contador + 1;
          }
          if ( res7 > res5) {
              contador = contador + 1;
          }
          if ( res7 > res6A) {
              contador = contador + 1;
          }
          if ( res7 > res6B) {
              contador = contador + 1;
          }
          if ( res7 >= res8A) {
              contador = contador + 1;
          }
          if ( res7 > res8B) {
              contador = contador + 1;
          }
          if ( res2 > res1) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res3) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res4) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res5) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res6A) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res6B) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res7) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res8A) {
              contador2 = contador2 + 1;
          }
          if ( res2 > res8B) {
              contador2 = contador2 + 1;
          }
      }
      if ( contador > 7 || VALIDACION === 'TRUE') {
          resS = resS + 4;
          resC = resC + 4;
          resP = resP + 2;
          resA = resA + 15;
          resH = resH + 13;
          resD = resD + 15;
      }
      // Factor DC II (S, C, A, P, H, D)
      if ( contador2 > 7 || VALIDACION2 === 'TRUE') {
          resS = resS - 2;
          resC = resC - 6;
          resP = resP - 7;
          resA = resA - 7;
          resH = resH - 5;
          resD = resD - 5;
      }
      // Factor DP (Sindromes severos)
      if ( valorTiempo === 'menos de 1 semana') {
          resSS = resSS + 8;
          resCC = resCC + 10;
          resPP = resPP + 4;
      } else if ( valorTiempo === 'de 1 a 4 semanas') {
          resSS = resSS + 5;
          resCC = resCC + 7;
          resPP = resPP + 2;
      }
      // Imprimimos los valores
      console.log('Escala 1: ' + res1);
      console.log('Escala 2: ' + res2);
      console.log('Escala 3: ' + res3);
      console.log('Escala 4: ' + res4);
      console.log('Escala 5: ' + res5);
      console.log('Escala 6A: ' + res6A);
      console.log('Escala 6B: ' + res6B);
      console.log('Escala 7: ' + res7);
      console.log('Escala 8A: ' + res8A);
      console.log('Escala 8B: ' + res8B);
      console.log('Escala S: ' + resS);
      console.log('Escala C: ' + resC);
      console.log('Escala P: ' + resP);
      console.log('Escala A: ' + resA);
      console.log('Escala H: ' + resH);
      console.log('Escala N: ' + resN);
      console.log('Escala D: ' + resD);
      console.log('Escala B: ' + resB);
      console.log('Escala T: ' + resT);
      console.log('Escala SS: ' + resSS);
      console.log('Escala CC: ' + resCC);
      console.log('Escala PP: ' + resPP);
      console.log('Escala X: ' + resX);
      console.log('Escala Y: ' + resY);
      console.log('Escala Z: ' + resZ);
      console.log('Escala V: ' + resV);

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
        test: 'Test de Millon',
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
      for ( num = 0; num < 25; num++ ) {

        if (num === 0) {
          const total = resX; // Total
          let desc = '1'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'X',
            value: +total,
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
          const total = resY; // Total
          let desc = '2'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'Y',
            value: +total,
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
          const total = resZ; // Total
          let desc = '3'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'Z',
            value: +total,
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
          const total = res1; // Total
          let desc = '4'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '1',
            value: +total,
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
          const total = res2; // Total
          let desc = '5'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '2',
            value: +total,
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
          const total = res3; // Total
          let desc = '6'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '3',
            value: +total,
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
          const total = res4; // Total
          let desc = '7'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '4',
            value: +total,
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
          const total = res5; // Total
          let desc = '8'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '5',
            value: +total,
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
          const total = res6A; // Total
          let desc = '9'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '6A',
            value: +total,
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
          const total = res6B; // Total
          let desc = '10'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '6B',
            value: +total,
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
          const total = res7; // Total
          let desc = '11'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '7',
            value: +total,
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
          const total = res8A; // Total
          let desc = '12'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '8A',
            value: +total,
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
          const total = res8B; // Total
          let desc = '13'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: '8B',
            value: +total,
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
          const total = resS; // Total
          let desc = '14'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'S',
            value: +total,
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
          const total = resC; // Total
          let desc = '15'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'C',
            value: +total,
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
          const total = resP; // Total
          let desc = '16'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'P',
            value: +total,
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
          const total = resA; // Total
          let desc = '17'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'A',
            value: +total,
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
          const total = resH; // Total
          let desc = '18'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'H',
            value: +total,
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
          const total = resN; // Total
          let desc = '19'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'N',
            value: +total,
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
          const total = resD; // Total
          let desc = '20'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'D',
            value: +total,
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
          const total = resB; // Total
          let desc = '21'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'B',
            value: +total,
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
        if (num === 21) {
          const total = resT; // Total
          let desc = '22'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'T',
            value: +total,
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
        if (num === 22) {
          const total = resSS; // Total
          let desc = '23'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'SS',
            value: +total,
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
        if (num === 23) {
          const total = resCC; // Total
          let desc = '24'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'CC',
            value: +total,
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
        if (num === 24) {
          const total = resPP; // Total
          let desc = '25'; // Descripcion
          const valuableRequest: IValoresRequest = {
            tipo: 'PP',
            value: +total,
            descripcion: desc
          };
          // Post
          const url = 'api/tests/results/' + resultadoId + '/values';
          submitForm('POST', url, valuableRequest, (status, response) => {
            if (status === 204) {
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
    let params = this.props.params;
    const { editableAlter, error } = this.state;
    params.sort((a, b) => Number(a.posicion) - Number(b.posicion));
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
                      <div className='col s12 m8 l9'>
                        <strong className='title grey-text text-darken-3'>{pregunta.posicion})  {pregunta.pregunta}</strong>
                      </div>
                      <div className='col s12 m4 l3'>
                        <RadioInput2 object={editableAlter} error={error} name={pregunta.tipos} pos={pregunta.posicion} question={pregunta.pregunta} options={pregunta.alternativas.sort((a, b) => Number(a.id) - Number(b.id))} onChange={this.onInputChange} />
                      </div>
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