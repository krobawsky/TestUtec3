package org.springframework.samples.utec.web.api;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.samples.utec.model.Grupo;
import org.springframework.samples.utec.service.ClinicService;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class GrupoResource extends AbstractResourceController{

	private final ClinicService clinicService;

	@Autowired
	public GrupoResource(ClinicService clinicService) {
		this.clinicService = clinicService;
	}
	    
	private Grupo retrieveGrupo(int grupoId) {
		return this.clinicService.findGrupoById(grupoId);
	}
	
	@GetMapping(value="/grupos")
	public Collection<Grupo> showResourcesGrupoList() {
		return this.clinicService.findGrupos();
	}
	    
	@RequestMapping(value = "/grupo", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Grupo createGrupo(@RequestBody @Valid Grupo grupo, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			throw new InvalidRequestException("Invalid Owner", bindingResult);
		}

		this.clinicService.saveGrupo(grupo);

		return grupo;
	}
	    
	@RequestMapping(value = "/grupo/{grupoId}", method = RequestMethod.GET)
	public Grupo findGrupo(@PathVariable("grupoId") int grupoId) {
		return retrieveGrupo(grupoId);
	}
	    
	    
	    
	@RequestMapping(value = "/grupoD/{grupoId}", method = RequestMethod.DELETE)
	public void deleteGrupo(@PathVariable("grupoId") int grupoId) {
	    	
		this.clinicService.deleteGrupo(grupoId);
		
	}	    
	    
	@RequestMapping(value = "/grupos/list", method = RequestMethod.GET)
	public Collection<Grupo> findGrupoCollection(@RequestParam("name") String name) {
		
		if (name == null) {
			name = "";
		}
		return this.clinicService.findGrupoByName(name);
	}
	    	
}
