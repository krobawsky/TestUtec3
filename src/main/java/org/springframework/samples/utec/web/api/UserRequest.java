package org.springframework.samples.utec.web.api;

public class UserRequest {
	
	private String password;
	
	 private String rol;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}
	 
}
