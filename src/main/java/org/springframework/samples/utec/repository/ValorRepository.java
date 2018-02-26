package org.springframework.samples.utec.repository;

import org.springframework.data.repository.Repository;
import org.springframework.samples.utec.model.Valores;


public interface ValorRepository extends Repository<Valores, Integer>  {

	void save(Valores value);
	
}
