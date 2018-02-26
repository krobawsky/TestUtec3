package org.springframework.samples.utec.service;

import org.springframework.dao.DataAccessException;
import org.springframework.samples.utec.model.User;

public interface UserService {
    
    User findUserById(int id) throws DataAccessException;
    
    User findByUsername(String username) throws DataAccessException;
    
}
