package org.springframework.samples.utec.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "alternativa")
public class Alternativa extends BaseEntity{
	
	@Column(name = "alternativa")
	private String alternativa;

	@Column(name = "value")
	private Integer value;
	
	public String getAlternativa() {
		return alternativa;
	}

	public void setAlternativa(String alternativa) {
		this.alternativa = alternativa;
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}
	
}
