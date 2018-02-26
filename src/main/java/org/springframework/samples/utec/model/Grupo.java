package org.springframework.samples.utec.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlElement;

import org.springframework.beans.support.MutableSortDefinition;
import org.springframework.beans.support.PropertyComparator;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name= "grupo")
public class Grupo extends NamedEntity{

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "alumno_has_grupo", joinColumns = @JoinColumn(name = "grupo_idgrupo"),
	inverseJoinColumns = @JoinColumn(name = "alumno_idalumno"))
	private Set<Alumno> alumnos;
	
	protected Set<Alumno> getAlumnosInternal(){
		if (this.alumnos == null) {
			this.alumnos = new HashSet<>();
		}
		return this.alumnos;
	}
	
	protected void setAlumnosInternal(Set<Alumno> alumnos) {
		this.alumnos = alumnos;
	}
	
	@XmlElement
	public List<Alumno> getAlumnos(){
		List<Alumno> sortedAlum = new ArrayList<>(getAlumnosInternal());
		PropertyComparator.sort(sortedAlum, new MutableSortDefinition("firstName", true, true));
		return Collections.unmodifiableList(sortedAlum);
	}
	
	@JsonIgnore
	public int getNrOfAlumnos() {
		return getAlumnosInternal().size();
	}
	
	public void addAlumno(Alumno alumno) {
		if(alumno.isNew()) {
		getAlumnosInternal().add(alumno);
		}
		alumno.addGrupo(this);
		
	}
	
	public void deleteAlumno(Alumno alumno) {
		getAlumnosInternal().remove(alumno);
		alumno.deleteGrupo(this);
	}
	
}
