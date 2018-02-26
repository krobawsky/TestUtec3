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
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Digits;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.beans.support.MutableSortDefinition;
import org.springframework.beans.support.PropertyComparator;


@Entity
@Table(name = "alumno")
public class Alumno extends Person {
	
	@Column(name = "codigo")
	@NotEmpty
	@Digits(fraction = 0, integer = 6)
	private String codigo;
	
	@Column(name= "password")
	@Digits(fraction = 0, integer = 6)
	private String password;
	
	@Column(name="correo")
	@NotEmpty
	private String correo;
	
	@Column(name="ingreso")
	@NotEmpty
	@Digits(fraction = 0, integer = 4)
	private String ingreso;
	
	@Column(name="carrera")
	@NotEmpty
	private String carrera;
	
	@Column(name="edad")
	@NotEmpty
	private String edad;
	
	@Column(name="genero")
	@NotEmpty
	private String genero;
	
	@Column(name="telefono")
	@NotEmpty
	private String telefono;
	
	@Column(name="promedio")
	@NotEmpty
	private String promedio;
	
	@OneToMany(cascade= CascadeType.ALL, mappedBy = "alumno" )
	private Set<Resultado> resultados;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "alumno_has_grupo", joinColumns = @JoinColumn(name = "alumno_idalumno"),
	inverseJoinColumns = @JoinColumn(name = "grupo_idgrupo"))
	private Set<Grupo> grupos;
	
	public String getCodigo() {
		return this.codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCorreo() {
		return this.correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getIngreso() {
		return this.ingreso;
	}

	public void setIngreso(String ingreso) {
		this.ingreso = ingreso;
	}

	public String getCarrera() {
		return this.carrera;
	}

	public void setCarrera(String carrera) {
		this.carrera = carrera;
	}

	public String getEdad() {
		return this.edad;
	}

	public void setEdad(String edad) {
		this.edad = edad;
	}

	public String getGenero() {
		return this.genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}
	
	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getPromedio() {
		return promedio;
	}

	public void setPromedio(String promedio) {
		this.promedio = promedio;
	}

	protected Set<Resultado> getResultadosInternal(){
		if (this.resultados == null) {
			this.resultados = new HashSet<>();
		}
		return this.resultados;
	}
	
	protected void setPetsInternal(Set<Resultado> resultados) {
		this.resultados = resultados;
	}
	
	public List<Resultado> getResultados(){
		List<Resultado> sortedResultados= new ArrayList<>(getResultadosInternal());
		PropertyComparator.sort(sortedResultados, new MutableSortDefinition("name", true, true));
		return Collections.unmodifiableList(sortedResultados);
	}
	
	protected Set<Grupo> getGruposInternal(){
		if (this.grupos == null) {
			this.grupos = new HashSet<>();
		}
		return this.grupos;
	}
	
	protected void setGruposInternal(Set<Grupo> grupos) {
		this.grupos = grupos;
	}
	
	public void addGrupo(Grupo grupo) {
		getGruposInternal().add(grupo);
	}
	
	public void deleteGrupo(Grupo grupo) {
		getGruposInternal().remove(grupo);
	}

	public void addResultado(Resultado res) {
		getResultadosInternal().add(res);
		
		  res.setAlumno(this);
	}
	
}
