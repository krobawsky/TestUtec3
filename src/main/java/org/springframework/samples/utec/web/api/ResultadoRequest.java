package org.springframework.samples.utec.web.api;

import javax.validation.constraints.Size;

import org.joda.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;


public class ResultadoRequest {
	
	private Integer id;
	@JsonFormat(pattern = "yyyy/MM/dd")
	private LocalDate date;
	
	@Size(min = 1)
	private String test;
	private String descripcion;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	public String getTest() {
		return test;
	}
	public void setTest(String test) {
		this.test = test;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	@JsonProperty("isNew")
	public boolean isNew() {
		return this.id == null;
	}	
	
}
