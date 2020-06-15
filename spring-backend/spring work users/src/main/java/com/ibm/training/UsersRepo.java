package com.ibm.training;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface UsersRepo extends CrudRepository<Users, Integer> {
    
    List<Users> findByEmailid(String emailid);
    List<Users> findByName(String name);
    List<Users> findByDriverid(Integer driverid);
}






