package org.springframework.samples.utec.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.beans.support.MutableSortDefinition;
import org.springframework.beans.support.PropertyComparator;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "pregunta")
public class Pregunta extends BaseEntity {

    @NotEmpty
    @Column(name = "pregunta")
    private String pregunta;
  
    @Column(name = "posicion")
    private Integer posicion;

    @ManyToOne
    @JoinColumn(name = "test_id")
    @JsonIgnore
    private Test test;
    
    @ManyToOne
    @JoinColumn(name = "tipo_id")
    private PreguntaTipo tipo;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "pregunta_tipo", joinColumns = @JoinColumn(name = "pregunta_id"),
        inverseJoinColumns = @JoinColumn(name = "tipo_id"))
    private Set<PreguntaTipo> tipos;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "pregunta_alternativa", joinColumns = @JoinColumn(name = "pregunta_id"),
        inverseJoinColumns = @JoinColumn(name = "alternativa_id"))
    private Set<Alternativa> alternativas;

	public String getPregunta() {
		return pregunta;
	}

	public void setPregunta(String pregunta) {
		this.pregunta = pregunta;
	}

	public Test getTest() {
		return test;
	}

	public void setTest(Test test) {
		this.test = test;
	}
	
	public Set<PreguntaTipo> getPreguntaTiposInternal() {
		if (this.tipos == null) {
			this.tipos = new HashSet<>();
	    }
	    return this.tipos;
	}

	protected void setPreguntaTiposInternal(Set<PreguntaTipo> tipos) {
	    this.tipos = tipos;
	}
	
	public void setPreguntaTipos(Set<PreguntaTipo> tipos) {
		this.tipos = tipos;
	}
	
	public Set<PreguntaTipo> getTipos() {
		return tipos;
	}
	
	@XmlElement
	public List<PreguntaTipo> getPreguntaTipos() {
	    List<PreguntaTipo> sortedTipos = new ArrayList<>(getPreguntaTiposInternal());
	    PropertyComparator.sort(sortedTipos, new MutableSortDefinition("name", true, true));
	    return Collections.unmodifiableList(sortedTipos);
	}

	@JsonIgnore
	public int getNrOfPreguntaTipos() {
	    return getAlternativasInternal().size();
	}

	public void addPreguntaTipo(PreguntaTipo tipo) {
		getPreguntaTiposInternal().add(tipo);
	}

	public Set<Alternativa> getAlternativasInternal() {
		if (this.alternativas == null) {
			this.alternativas = new HashSet<>();
	    }
	    return this.alternativas;
	}

	protected void setAlternativasInternal(Set<Alternativa> alternativas) {
		this.alternativas = alternativas;
	}
	    
	public void setAlternativas(Set<Alternativa> alternativas) {
		this.alternativas = alternativas;
	}
	
	@XmlElement
	public List<Alternativa> getAlternativas() {
		List<Alternativa> sortedAlts = new ArrayList<>(getAlternativasInternal());
	    PropertyComparator.sort(sortedAlts, new MutableSortDefinition("alternativa", true, true));
	    return Collections.unmodifiableList(sortedAlts);
	}

	@JsonIgnore
	public int getNrOfAlternativas() {
	    return getAlternativasInternal().size();
	}

	public void addAlternativa(Alternativa alternativa) {
	    getAlternativasInternal().add(alternativa);
	}
	    
	public Integer getPosicion() {
		return posicion;
	}

	public void setPosicion(Integer posicion) {
		this.posicion = posicion;
	}
	
	public PreguntaTipo getTipo() {
		return tipo;
	}

	public void setTipo(PreguntaTipo tipo) {
		this.tipo = tipo;
	}

	@Override
	public String toString() {
		return "Pregunta [pregunta=" + pregunta + ", test=" + test + ", alternativas=" + alternativas + "]";
	}
    
}
