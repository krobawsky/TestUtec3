import * as React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';

import WelcomePage from './components/WelcomePage';
import ErrorPage from './components/ErrorPage';
import FindAlumnosPage from './components/alumnos/FindAlumnosPage';
import AlumnosPage from './components/alumnos/AlumnosPage';
import EditResultadoPage from './components/resultados/EditResultadoPage';
import ResultadoPage from './components/resultados/ResultadoPage';
import ResultadoPrint from './components/resultados/ResultadoPrint';
import NotFoundPage from './components/NotFoundPage';
import GruposPage from './components/grupos/GruposPage';
import DetalleGrupoPage from './components/grupos/DetalleGrupoPage';
import NuevoGrupoPage from './components/grupos/NuevoGrupoPage';
import AgregarAlumnoPage from './components/grupos/AgregarAlumnoPage';
import FindGruposPage from './components/grupos/FindGruposPage';
import TestsPage from './components/tests/TestsPage';
import TestPage from './components/tests/TestPage';
import Test2Page from './components/tests/Test2Page';
import Test3Page from './components/tests/Test3Page';
import papel from './components/papel';
import UsersPage from './components/user/UsersPage';
import EmailPage from './components/email/EmailPage';
import EmailEnviadoPage from './components/email/EmailEnviadoPage';
import LoginAdmiPage from './components/user/LoginAdmiPage';
import LoginTutoPage from './components/user/LoginTutoPage';
import LoginAlumnoPage from './components/user/LoginAlumnoPage';
import EstudiantePage from './components/alumnos/EstudiantePage';
import GrupoPage from './components/grupos/GrupoPage';
/** Administrador*/
import AgregarPsicologosPage from './components/admin/AgregarPsicologosPage';
import UserPage from './components/admin/UserPage';

export default () => (
  <Route component={App}>
   <Route path='/' component={papel} />
   <Route path='/loginadmin' component={LoginAdmiPage} />
   <Route path='/logintutor' component={LoginTutoPage} />
   <Route path='/loginalumno' component={LoginAlumnoPage} />
   <Route path='/welcomeawdawdad' component={UsersPage} />
   <Route path='/welcome' component={EmailPage} />
   <Route path='/emailform/emailenviado' component={EmailEnviadoPage} />
    <Route path='/welcomeddqwdqd' component={WelcomePage} />
    <Route path='/alumnos/list' component={FindAlumnosPage} />
    <Route path='/alumnos/:alumnoId' component={AlumnosPage} />
    <Route path='/student/:alumnoId' component={EstudiantePage} />
    <Route path='/alumnos/:alumnoId/resultados/:resultadoId/edit' component={EditResultadoPage} />
    <Route path='/alumnos/:alumnoId/resultados/:resultadoId' component={ResultadoPage} />
    <Route path='/alumnos/:alumnoId/resultados/:resultadoId/print' component={ResultadoPrint} />
    <Route path='/grupos' component={GruposPage} />
    <Route path='/grupos/nuevo' component={NuevoGrupoPage} />
    <Route path='/grupos/:grupoId' component={DetalleGrupoPage} />
    <Route path='/grupo/:grupoId/lista' component={AgregarAlumnoPage} />
    <Route path='/grupo/list' component={FindGruposPage} />
    <Route path='/grupos/detalle/:grupoId' component={GrupoPage} />
    <Route path='/tests' component={TestsPage} />
    <Route path='/student/tests/estres' component={TestPage} />
    <Route path='/student/tests/millon' component={Test2Page} />
    <Route path='/student/tests/baron' component={Test3Page} />
    <Route path='/users/list' component={AgregarPsicologosPage} />
    <Route path='/users/:userId' component={UserPage} />
    <Route path='/error' component={ErrorPage} />
    <Route path='*' component={NotFoundPage} />
  </Route>
);

