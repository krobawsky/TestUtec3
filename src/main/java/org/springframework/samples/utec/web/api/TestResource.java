package org.springframework.samples.utec.web.api;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.utec.model.Test;
import org.springframework.samples.utec.service.ClinicService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestResource extends AbstractResourceController {

	private final ClinicService clinicService;

    @Autowired
    public TestResource(ClinicService clinicService) {
        this.clinicService = clinicService;
    }
    
    @GetMapping(value="/tests")
    public Collection<Test> showResourcesVetList() {
        return this.clinicService.findTests();
    }
    
    @RequestMapping(value = "/tests/{testId}", method = RequestMethod.GET)
	public Test findTest(@PathVariable("testId") int testId) {
		return retrieveTest(testId);
	}
    
    private Test retrieveTest(int testId) {
		return this.clinicService.findTestById(testId);
	}
    
}
