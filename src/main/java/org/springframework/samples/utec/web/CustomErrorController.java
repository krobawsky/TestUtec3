package org.springframework.samples.utec.web;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CustomErrorController implements ErrorController {

	@RequestMapping(value = "/error")
	public String error() {
		return "exception";
	}

	@Override
	public String getErrorPath() {
		return "/error";
	}
	
}
