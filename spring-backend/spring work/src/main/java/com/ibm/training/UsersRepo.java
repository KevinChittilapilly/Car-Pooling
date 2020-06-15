package com.ibm.training;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface UsersRepo extends CrudRepository<Drivers, Integer> {
}






