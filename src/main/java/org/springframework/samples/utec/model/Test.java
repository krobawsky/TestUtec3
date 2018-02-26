package org.springframework.samples.utec.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.beans.support.MutableSortDefinition;
import org.springframework.beans.support.PropertyComparator;


@Entity
@Table(name = "test")
public class Test extends NamedEntity{

	@Column(name = "tipo")
	private String tipo;
	
	@Column(name = "descripcion")
	private String descripcion;
	
	 @OneToMany(cascade = CascadeType.ALL, mappedBy = "test")
	 private Set<Pregunta> preguntas;

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Set<Pregunta> getPreguntasInternal() {
		 if (this.preguntas == null) {
	         this.preguntas = new HashSet<>();
	     }
	     return this.preguntas;
	}

	public void setPreguntasInternal(Set<Pregunta> preguntas) {
		this.preguntas = preguntas;
	}
	 
	public List<Pregunta> getPreguntas() {
        List<Pregunta> sortedPregunta = new ArrayList<>(getPreguntasInternal());
        PropertyComparator.sort(sortedPregunta, new MutableSortDefinition("pregunta", false, false));
        return Collections.unmodifiableList(sortedPregunta);
    }

    public void addPregunta(Pregunta pregunta) {
    	getPreguntasInternal().add(pregunta);
    	pregunta.setTest(this);
    }

	@Override
	public String toString() {
		return "Test [tipo=" + tipo + ", descripcion=" + descripcion
				+ ", preguntas=" + preguntas + "]";
	}
	 
}
