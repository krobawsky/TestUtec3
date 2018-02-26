package org.springframework.samples.utec.repository;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.samples.utec.model.Alumno;

public interface AlumnoRepository extends Repository<Alumno, Integer>{
	
	@Query("SELECT DISTINCT alumno FROM Alumno alumno WHERE alumno.lastName LIKE :lastName%")
	Collection<Alumno> findByLastName(@Param("lastName") String lastName);

	
	@Query("SELECT alumno FROM Alumno alumno left join fetch alumno.resultados WHERE alumno.id =:id")
	Alumno findAlumnoById(@Param("id") int id);


	Collection<Alumno> findAll() throws DataAccessException;

	@Query("SELECT DISTINCT alumno FROM Alumno alumno left join fetch alumno.grupos grupo WHERE alumno.id not in (SELECT alumno.id FROM Alumno alumno join alumno.grupos grupo WHERE grupo.id =:group) and (alumno.lastName LIKE :lastName%)")
	Collection<Alumno> findByGroup(@Param("lastName") String lastname, @Param("group") int group);

	@Query("SELECT alumno FROM Alumno alumno WHERE alumno.codigo =:codigo")
	Alumno findAlumnoByCodigo(@Param("codigo") String codigo);
	
	@Query("SELECT alumno FROM Alumno alumno WHERE alumno.lastName =:lastName")
	Alumno findAlumnoByLastnameC(@Param("lastName") String lastName);
	
	//select a.correo from alumno a inner join alumno_has_grupo pha on pha.alumno_idalumno = a.id inner join grupo g on g.id = pha.grupo_idgrupo where g.name =
	//@Query("SELECT a from Alumno a left join fetch alumno_has_grupo pha on pha.alumno_idalumno = a.id right join fetch Grupo g on g.id = pha.grupo_idgrupo where g.name =:name")
	@Query("SELECT a.correo from Alumno a left join a.grupos grupo where grupo.name =:name")
	//select a.correo from alumno a inner join alumno_has_grupo pha on pha.alumno_idalumno = a.id inner join grupo g on g.id = pha.grupo_idgrupo where g.name =:name
	ArrayList<String> findByGroupByNameCorreo(@Param("name") String name);

	@Query("SELECT alumno from Alumno alumno left join alumno.resultados resultado where resultado.test =:testName and resultado.date is null")
	Collection<Alumno> findByTestEstres(@Param("testName") String testName);
	
	@Query("SELECT a.id from Alumno a left join a.grupos grupo where grupo.name =:name")
	ArrayList<Integer> findByGroupByIdesCorreo(@Param("name") String name);
	
}
