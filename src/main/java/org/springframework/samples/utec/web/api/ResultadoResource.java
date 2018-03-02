package org.springframework.samples.utec.web.api;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.samples.utec.model.Alumno;
import org.springframework.samples.utec.model.Resultado;
import org.springframework.samples.utec.model.Valores;
import org.springframework.samples.utec.service.ClinicService;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ResultadoResource extends AbstractResourceController{
	

	private final ClinicService	clinicService;

	@Autowired
	public ResultadoResource(ClinicService clinicService) {
		this.clinicService = clinicService;
	}

	@GetMapping("/alumnos/*/resultados/{resultadoId}")
	public ResultadoRequest findResultado(@PathVariable("resultadoId") int resultadoId) {
		
		final Resultado resultado = this.clinicService.findResultadoById(resultadoId);

		final ResultadoRequest resultadoRequest = new ResultadoRequest();
		resultadoRequest.setId(resultado.getId());
		resultadoRequest.setDate(resultado.getDate());
		resultadoRequest.setDescripcion(resultado.getDescripcion());
		resultadoRequest.setTest(resultado.getTest());

		return resultadoRequest;
		
	}
	
	@GetMapping("/alumnos/{alumnoId}/resultados/{resultadoId}")
	public Resultado findResultado2(@PathVariable("resultadoId") int resultadoId) {
		
		final Resultado resultado = this.clinicService.findResultadoById(resultadoId);

		return resultado;
		
	}
	
	@RequestMapping(value = "/tests/results/{alumnoId}", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Integer createResultado (final @PathVariable("alumnoId") int studentId, final @Valid @RequestBody ResultadoRequest resultadoRequest, 
            final BindingResult bindingResult) {
        
        if (bindingResult.hasErrors()) {
            throw new InvalidRequestException("Submitted res invalid", bindingResult);
        }
        
        Resultado res = new Resultado();
        Alumno student = this.clinicService.findAlumnoById(studentId);
        if (student == null) {
            throw new BadRequestException("Student with Id '" + studentId + "' is unknown.");
        }
        
        student.addResultado(res);
        save(res, resultadoRequest);
        
        throw new BadRequestException(res.getId().toString());
        
    }
	
	@PutMapping("/tests/results/{resultadoId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void processUpdateResult (final @PathVariable("resultadoId") int resultId, final @Valid @RequestBody ResultadoRequest resultRequest, 
            final BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            throw new InvalidRequestException("Submitted Result invalid", bindingResult);
        }

        save(clinicService.findResultadoById(resultId), resultRequest);
        
    }
	
	@RequestMapping(value = "/tests/results/{resultadoId}/values", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addValues(final @PathVariable("resultadoId") int resultId, final @Valid @RequestBody ValoresRequest valRequest, 
            final BindingResult bindingResult) {
       
        if (bindingResult.hasErrors()) {
            throw new InvalidRequestException("Submitted val invalid", bindingResult);
        }
        
        Valores value = new Valores();
        Resultado result = this.clinicService.findResultadoById(resultId);
        if (result == null) {
            throw new BadRequestException(" Result with Id '" + resultId + "' is unknown.");
        }
        
        result.addValores(value);
        saveValor(value, valRequest);
        
    }
	
	@PutMapping("/alumnos/{alumnoId}/resultados/{resultadoId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void processUpdateForm(final @PathVariable("resultadoId") int resultadoId, final @Valid @RequestBody ResultadoRequest resultadoRequest, final BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			throw new InvalidRequestException("Submitted Pet invalid", bindingResult);
		}

		save(clinicService.findResultadoById(resultadoId), resultadoRequest);
		
	}
	
	private Resultado save(Resultado resultado, ResultadoRequest resultadoRequest) {

		resultado.setTest(resultadoRequest.getTest());
		resultado.setDescripcion(resultadoRequest.getDescripcion());
		resultado.setDate(resultadoRequest.getDate());

		clinicService.saveResultado(resultado);
		
		return resultado;
		
	}
	
	private void saveValor(Valores value, ValoresRequest valRequest) {
        
		value.setTipo(valRequest.getTipo());
        value.setValue(valRequest.getValue());
        value.setDescripcion(valRequest.getDescripcion());

        clinicService.saveValor(value);
    }
	
}
