package org.springframework.samples.utec.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.utec.service.ClinicService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class EstudianteController {
	
	private static final String VIEWS_OWNER_CREATE_OR_UPDATE_FORM = "alumnos/createOrUpdateOwnerForm";
    private final ClinicService clinicService;
    
    @Autowired
    public EstudianteController(ClinicService clinicService) {
        this.clinicService = clinicService;
    }
    
    @InitBinder
    public void setAllowedFields(WebDataBinder dataBinder) {
        dataBinder.setDisallowedFields("id");
    }
    
    @RequestMapping("/student/{alumnoId}")
    public ModelAndView showOwner(@PathVariable("alumnoId") int alumnoId) {
        ModelAndView mav = new ModelAndView("student/studentDetails");
        mav.addObject(this.clinicService.findAlumnoById(alumnoId));
        return mav;
    }

}
