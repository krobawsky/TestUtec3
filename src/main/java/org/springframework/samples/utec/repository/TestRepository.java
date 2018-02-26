package org.springframework.samples.utec.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.samples.utec.model.Test;


public interface TestRepository extends Repository<Test, Integer> {

	Collection<Test> findAll();
	
	@Query("SELECT test FROM Test test left join fetch test.preguntas WHERE test.id =:testId")
	Test findById(@Param("testId") Integer testId);

}
