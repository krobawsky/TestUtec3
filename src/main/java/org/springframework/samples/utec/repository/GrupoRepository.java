package org.springframework.samples.utec.repository;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.samples.utec.model.Grupo;

public interface GrupoRepository extends Repository<Grupo, Integer>{

	@Query("SELECT DISTINCT grupo FROM Grupo grupo ")
	Collection<Grupo> findAll() throws DataAccessException;

	@Query("SELECT grupo FROM Grupo grupo WHERE grupo.id =:id")
	Grupo findGrupoById(@Param("id") int id);

	void save(Grupo grupo);

	@Transactional
	@Modifying
	@Query("DELETE Grupo grupo WHERE grupo.id =:id")
	void delete(@Param("id") int id);
	
	@Query("SELECT DISTINCT grupo FROM Grupo grupo WHERE grupo.name LIKE :name%")
	Collection<Grupo> findByName(@Param("name") String name);
	
	@Query("SELECT grupo FROM Grupo grupo WHERE grupo.name =:name")
	Collection<Grupo> findByNameC(@Param("name") String name);
	
	@Query("SELECT grupo FROM Grupo grupo WHERE grupo.name =:name")
	Grupo findByGroupNameC(@Param("name") String name);
	
}
