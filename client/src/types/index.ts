import { IRouter } from 'react-router';

// ------------------------------------ ROUTER ------------------------------------
export interface IRouterContext {
  router: IRouter;
};

// ------------------------------------ UTIL --------------------------------------
export type IHttpMethod = 'POST' | 'PUT' | 'GET';


// ------------------------------------ ERROR ------------------------------------
export interface IFieldError {
  field: string;
  message: string;
}

interface IFieldErrors {
  [index: string]: IFieldError;
};

export interface IError {
  fieldErrors: IFieldErrors;
}


// ------------------------------------ FORM --------------------------------------
export interface IConstraint {
  message: string;
  validate: (value: any) => boolean;
}

export type IInputChangeHandler = (name: string, value: string, error: IFieldError) => void;

export type IInputChangeHandler2 = (name: string, question:string , value: string, error: IFieldError) => void;

export type IInputChangeHandler3 = (names: any, pos:number, question:string , value: string, error: IFieldError) => void;

export interface ISelectOption {
  value: string|number;
  name: string;
};

// ------------------------------------ MODEL .------------------------------------

interface IBaseEntity {
  id: number;
  isNew: boolean;
};

interface INamedEntity extends IBaseEntity {
  name: string;
}

interface IPerson extends IBaseEntity {
  firstName: string;
  lastName: string;
}

export interface IPreguntaTipo extends INamedEntity {
};

export interface IEditableResultado extends INamedEntity {
  test?: string;
  descripcion?: string;
}

export interface ITest extends INamedEntity {
  tipo: string;
  descripcion: string;
  num_preguntas: number;
  preguntas: IPregunta[];
};

export interface IPregunta extends IBaseEntity {
  pregunta: string;
  tipo: IPreguntaTipo;
  tipos: any;
  posicion: number;
  alternativas: IAlternativa[];
};

export interface IAlternativa extends IBaseEntity {
  alternativa: string;
  value: number;
};

export interface IResultadoRequest {
  id?: number;
  alumnoId?: number;
  date?: string;
  test?: string;
  descripcion?: string;
}

export interface IAlumno extends IPerson {

  codigo: string;
  password: string;
  correo: string;
  ingreso: string;
  carrera: string;
  edad: string;
  genero: string;
  telefono: string;
  promedio: string;
  resultados: IResultado[];
};

export interface IResultado extends INamedEntity {
  test: string;
  descripcion: string;
  date: Date;
  valores: IValores[];
};

export interface ISpecialty extends INamedEntity {
};

export interface IVet extends IPerson {
  specialties: ISpecialty[];
};

export interface IGrupo extends INamedEntity {
  alumnos: IAlumno[];
}

export interface IValores extends IBaseEntity {
  tipo: string;
  value: number;
  descripcion: string;
};

export interface IUser extends IPerson {
  username: string;
  password: string;
  rol: string;
  correo: string;
};

export interface IUserRequest {
  rol?: string;
  password?: number;
}

export interface IEmail extends IBaseEntity {
  to: string;
  subject: string;
  body: string;
};