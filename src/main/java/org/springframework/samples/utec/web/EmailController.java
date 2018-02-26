package org.springframework.samples.utec.web;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.utec.model.Email;
import org.springframework.samples.utec.model.User;
import org.springframework.samples.utec.others.SmtpMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
 

@Controller
public class EmailController {
	
	private static final String VIEWS_OWNER_CREATE_OR_UPDATE_FORM = "owners/createOrUpdateOwnerForm";
	
	@Autowired
	private SmtpMailSender smtpMailSender;

	@RequestMapping(value = "/welcome", method = RequestMethod.GET)
	public String emailForm(Map<String, Object> model) {
		
		Email email = new Email();
		model.put("email", email);

		return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
		
	}
	
	@RequestMapping(value = "/send-mail", method = RequestMethod.POST)
	public String sendMail(@Valid Email email, BindingResult result) {
		
		 if (result.hasErrors()) {
     		return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
		 } else {
    	 	smtpMailSender.send(email.getTo(),email.getSubject(), email.getBody());
    	 	return "redirect:/emailform";
	 	}
		 
	}
	
	@RequestMapping(value = "/emailadmin", method = RequestMethod.POST)
	public String sendMailAdmin(@Valid User User, BindingResult result) {
		
		Email email = new Email();
		if (result.hasErrors()) {
     		return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
		} else {
			smtpMailSender.send(email.getTo(),email.getSubject(), email.getBody());
			return "redirect:/emailform2";
		}
		
	}
	
}
