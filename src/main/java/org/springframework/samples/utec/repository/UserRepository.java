package org.springframework.samples.utec.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.samples.utec.model.User;


public interface UserRepository extends Repository<User, Integer> {
	
	   @Query("SELECT user FROM User user WHERE id =:id")
	   User findUserById(@Param("id") int id);
	   
	   @Query("SELECT user FROM User user WHERE username =:username")
	   User findUserByUsername(@Param("username") String username);
	   
	   @Query("SELECT DISTINCT user FROM User user WHERE user.lastName LIKE :lastName% and (user.rol NOT LIKE 'PSICOLOGO' or user.rol is NULL)")
	   Collection<User> findUserByLastName(@Param("lastName") String lastName);

	   void save(User user);
	
}
