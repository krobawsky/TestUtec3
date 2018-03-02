package org.springframework.samples.utec.web.api;

public class ValoresRequest {
	
	private Integer	 id;
	
	private String	tipo;
	
	private Integer  value;
	
	private Integer  poss;
	
	private String  descripcion;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}
	
	public Integer getPoss() {
		return poss;
	}

	public void setPoss(Integer poss) {
		this.poss = poss;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
}
