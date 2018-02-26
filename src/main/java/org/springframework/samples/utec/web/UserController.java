package org.springframework.samples.utec.web;

import java.util.Map;

import javax.validation.Valid;
 
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.utec.model.Alumno;
import org.springframework.samples.utec.model.User;
import org.springframework.samples.utec.service.ClinicService;
import org.springframework.samples.utec.service.UserService;
import org.springframework.samples.utec.web.api.UserResource;
import org.springframework.stereotype.Controller; 
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UserController {
	
	private final Logger logger = Logger.getLogger(UserResource.class);

	
	private static final String VIEWS_OWNER_CREATE_OR_UPDATE_FORM = "owners/createOrUpdateOwnerForm";
    private final UserService userService;
    private final ClinicService clinicService;
    
    @Autowired
    public UserController(UserService userService, ClinicService clinicService) {
        this.userService = userService;
        this.clinicService = clinicService;
    }
    
    @InitBinder
    public void setAllowedFields(WebDataBinder dataBinder) {
        dataBinder.setDisallowedFields("id");
    }
    
    @RequestMapping(value = "/loginadmin", method = RequestMethod.GET)
    public String initCreationFormAdmi(Map<String, Object> model) {
    	
     	logger.info("HOLA QUE HACE!!!!");
    	
        User user = new User();
        model.put("user", user);
        return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
    }
    
    @RequestMapping(value = "/loginA", method = RequestMethod.POST)
    public String processValidationFormAdmi(@Valid User user, BindingResult result) {
    	
        if (result.hasErrors()) {
        		return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
        } else {
        	User resulta = this.userService.findByUsername(user.getUsername());
        	if (resulta.equals("")) {
                // no owners found
                result.rejectValue("Credencial invalida", "notFound", "not found");
                logger.info("CONtra invalido");
                return null;
            } else  {
                // 1 owner found
                // return "redirect:/users/" + user.getId();
            	return "redirect:/";
            } 
        }	 
        		
    }
    
    @RequestMapping(value = "/logintutor", method = RequestMethod.GET)
    public String initCreationFormTuto(Map<String, Object> model) {
    	
     	logger.info("HOLA QUE HACE!!!!");
    	
        User user = new User();
        model.put("user", user);
        return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
        
    }
    
    @RequestMapping(value = "/loginT", method = RequestMethod.POST)
    public String processValidationFormTuto(@Valid User user, BindingResult result) {
    	
        if (result.hasErrors()) {
        		return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
        } else {
        	User resulta = this.userService.findByUsername(user.getUsername());
        	if (resulta.equals("")) {
                // no owners found
                result.rejectValue("Credencial invalida", "notFound", "not found");
                logger.info("CONtra invalido");
                return null;
            } else  {
                // 1 owner found
               /// return "redirect:/users/" + user.getId();
                return "redirect:/";
            } 
        }	 
        		
    }
    
    @RequestMapping(value = "/loginalumno", method = RequestMethod.GET)
    public String initCreationFormAlumno(Map<String, Object> model) {
    	    	
        Alumno alumno = new Alumno();
        model.put("alumno", alumno);
        return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
    }
    
    @RequestMapping(value = "/loginE", method = RequestMethod.POST)
    public String processValidationFormAlumno(@Valid Alumno alumno, BindingResult result) {
    	
        if (result.hasErrors()) {
        		return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
        } else {
        	Alumno resulta = this.clinicService.findAlumnoByLastNameC(alumno.getLastName());
        	if (resulta.equals("")) {
                // no owners found
                result.rejectValue("Credencial invalida", "notFound", "not found");
                logger.info("CONtra invalido");
                return null;
            } else  {
                // 1 owner found
               /// return "redirect:/users/" + user.getId();
                return "redirect:/";
            } 
        }	 
        		
    }
}
