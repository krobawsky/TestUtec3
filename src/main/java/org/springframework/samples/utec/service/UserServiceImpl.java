package org.springframework.samples.utec.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.utec.model.User;
import org.springframework.samples.utec.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
 

@Service
public class UserServiceImpl implements UserService {
	
	private UserRepository userrepository;
	
	@Autowired
	public UserServiceImpl(UserRepository userrepository) {
		this.userrepository = userrepository;
	}

	@Override
	@Transactional(readOnly = true)
	public User findUserById(int id) throws DataAccessException {
		return  userrepository.findUserById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public User findByUsername(String username) throws DataAccessException {
		return userrepository.findUserByUsername(username);
	}
   
}
