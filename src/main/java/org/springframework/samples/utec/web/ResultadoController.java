package org.springframework.samples.utec.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.utec.model.Resultado;
import org.springframework.samples.utec.service.ClinicService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/alumnos/{alumnoId}")
public class ResultadoController {

	 private static final String VIEWS_PETS_CREATE_OR_UPDATE_FORM = "resultado/createOrUpdatePetForm";
	 private final ClinicService clinicService;
	 
	 @Autowired
	 public ResultadoController(ClinicService clinicService) {
		 this.clinicService = clinicService;
	 }
	  
	 @RequestMapping(value = "/resultados/{resultadoId}/edit", method = RequestMethod.GET)
	 public String initUpdateForm(@PathVariable("resultadoId") int resultadoId, ModelMap model) {
		 Resultado resultado = this.clinicService.findResultadoById(resultadoId);
		 model.put("resultado", resultado);
		 return VIEWS_PETS_CREATE_OR_UPDATE_FORM;
	 }
	 
}
