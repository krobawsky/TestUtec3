package org.springframework.samples.utec.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;

import org.hibernate.annotations.Type;
import org.joda.time.LocalDate;
import org.springframework.beans.support.MutableSortDefinition;
import org.springframework.beans.support.PropertyComparator;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "resultado")
public class Resultado extends NamedEntity {
	
	@Column(name="test")
	private String test;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name = "date")
    @Type(type = "org.jadira.usertype.dateandtime.joda.PersistentLocalDate")
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private LocalDate date;
	
	@ManyToOne
    @JoinColumn(name = "alumno_idalumno")
    @JsonIgnore
    private Alumno alumno;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "resultado", fetch = FetchType.EAGER)
    private Set<Valores> valores;

	public String getTest() {
		return this.test;
	}

	public void setTest(String test) {
		this.test = test;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public LocalDate getDate() {
		return this.date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Alumno getAlumno() {
		return this.alumno;
	}

	protected void setAlumno(Alumno alumno) {
		this.alumno = alumno;
	}
	
	@XmlElement
    public List<Valores> getValores() {
        List<Valores> sortedVals = new ArrayList<>(getValoresInternal());
        PropertyComparator.sort(sortedVals, new MutableSortDefinition("value", true, true));
        return Collections.unmodifiableList(sortedVals);
    }

	public void setValores(Set<Valores> valores) {
		this.valores = valores;
	}

	protected Set<Valores> getValoresInternal() {
        if (this.valores == null) {
            this.valores = new HashSet<>();
        }
        return this.valores;
    }

    protected void setValoresInternal(Set<Valores> valores) {
        this.valores = valores;
    }
    
    @JsonIgnore
    public int getNrOfValores() {
        return getValoresInternal().size();
    }

    public void addValores(Valores value) {
    	getValoresInternal().add(value);
    	value.setResultado(this);
    }
	
}
