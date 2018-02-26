package org.springframework.samples.utec.web.api;

import java.util.Collection;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.samples.utec.model.Alumno;
import org.springframework.samples.utec.model.Grupo;
import org.springframework.samples.utec.service.ClinicService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class AlumnoResource extends AbstractResourceController{
	
	private final ClinicService	clinicService;
	
	@Autowired
	public AlumnoResource(ClinicService clinicService) {
		this.clinicService = clinicService;
	}
	
	private Alumno retrieveAlumno(int alumnoId) {
		return this.clinicService.findAlumnoById(alumnoId);
	}
	
	@GetMapping(value="/alumnos")
	public Collection<Alumno> showResourcesAlumnos() {
		return this.clinicService.findAlumnos();
	}
	 
	@RequestMapping(value = "/alumno/list", method = RequestMethod.GET)
	public Collection<Alumno> findAlumnoCollection(@RequestParam("lastName") String alumnoLastname) {

		if (alumnoLastname == null) {
			alumnoLastname = "";
		}
		return this.clinicService.findAlumnoByLastName(alumnoLastname);
	}
	
	@RequestMapping(value = "/alumno/group", method = RequestMethod.GET)
	public Collection<Alumno> findAlumnoByGroup(@RequestParam("lastName") String alumnoLastname, @RequestParam("group") String grupo) {

		if (alumnoLastname == null) {
			alumnoLastname = "";
		}
		//System.out.println("");
		return this.clinicService.findAlumnosGroupByLastName(alumnoLastname, grupo);
		
	}
	
	@RequestMapping(value = "/alumnos/{testName}", method = RequestMethod.GET)
	public Collection<Alumno> findAlumnosByTestEstres(@PathVariable("testName") String testName) {

		return this.clinicService.findAlumnosByTestEstres(testName);
		
	}
	
	@RequestMapping(value = "/alumno/{alumnoId}", method = RequestMethod.GET)
	public Alumno findAlumno(@PathVariable("alumnoId") int alumnoId) {
		return retrieveAlumno(alumnoId);
	}
	
	@RequestMapping(value = "/grupos/{grupoId}/alumnos/{alumnoId}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void addNuevoAlumno(final @PathVariable("grupoId") int grupoId, @PathVariable("alumnoId") int alumnoId) {

		System.out.println("Alumno id: "+ alumnoId + " GrupoId: "+ grupoId);

		Alumno alumno = this.clinicService.findAlumnoById(alumnoId);
		
		Grupo grupo = this.clinicService.findGrupoById(grupoId);
		if (grupo == null) {
			throw new BadRequestException("grupo with Id '" + grupoId + "' is unknown.");
		}
		grupo.addAlumno(alumno);
		this.clinicService.saveGrupo(grupo);

	}
	
	@RequestMapping(value = "/alumnoD/{grupoId}/{alumnoId}", method = RequestMethod.GET)
    public void deleteGrupo(@PathVariable("grupoId") int grupoId, @PathVariable("alumnoId") int alumnoId) {
    	
    	Grupo grupo = this.clinicService.findGrupoById(grupoId);
    	Alumno alumno = this.clinicService.findAlumnoById(alumnoId);
    	System.out.println("Grupo: "+ grupoId + " Alumno: "+alumnoId);
    	grupo.deleteAlumno(alumno);
    	this.clinicService.saveGrupo(grupo);
    	
    }
	
}
