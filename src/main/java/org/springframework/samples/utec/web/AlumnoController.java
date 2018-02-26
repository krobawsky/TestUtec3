package org.springframework.samples.utec.web;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.utec.model.Alumno;
import org.springframework.samples.utec.service.ClinicService;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AlumnoController {

	private static final String VIEWS_OWNER_CREATE_OR_UPDATE_FORM = "alumnos/createOrUpdateOwnerForm";
    private final ClinicService clinicService;
	
	@Autowired
    public AlumnoController(ClinicService clinicService) {
        this.clinicService = clinicService;
    }

    @InitBinder
    public void setAllowedFields(WebDataBinder dataBinder) {
        dataBinder.setDisallowedFields("id");
    }
    
    @RequestMapping(value = "/alumnos/find", method = RequestMethod.GET)
    public String initFindForm(Map<String, Object> model) {
        model.put("alumno", new Alumno());
        return "alumno/findAlumnos";
    }
    
    @RequestMapping(value = "/alumnos", method = RequestMethod.GET)
    public String processFindForm(Alumno alumno, BindingResult result, Map<String, Object> model) {

        // allow parameterless GET request for /owners to return all records
        if (alumno.getLastName() == null) {
            alumno.setLastName(""); // empty string signifies broadest possible search
        }

        // find owners by last name
        Collection<Alumno> results = this.clinicService.findAlumnoByLastName(alumno.getLastName());
        if (results.isEmpty()) {
            // no owners found
            result.rejectValue("lastName", "notFound", "not found");
            return "alumnos/findAlumnos";
        } else if (results.size() == 1) {
            // 1 owner found
            alumno = results.iterator().next();
            return "redirect:/alumnos/" + alumno.getId();
        } else {
            // multiple owners found
            model.put("selections", results);
            return "alumnos/alumnosList";
        }
    }
    
    @RequestMapping("/alumnos/{alumnoId}")
    public ModelAndView showOwner(@PathVariable("alumnoId") int alumnoId) {
        ModelAndView mav = new ModelAndView("alumnos/alumnoDetails");
        mav.addObject(this.clinicService.findAlumnoById(alumnoId));
        return mav;
    }
    
}
