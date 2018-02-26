package org.springframework.samples.utec.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.samples.utec.model.Resultado;


public interface ResultadoRepository extends Repository<Resultado, Integer>{

	@Query("SELECT resultado FROM Resultado resultado left join fetch resultado.valores WHERE resultado.id =:id")
	Resultado findById(@Param("id") int id);

	void save(Resultado resultado);
	
}
