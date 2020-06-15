package com.ibm.training;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import net.bytebuddy.build.Plugin.Engine.Source.Empty;

import java.util.List;
import java.util.Optional;

@RestController
public class UserResource {

    @Autowired
    UsersRepo usersRepository;
    
    @RequestMapping("/")
	String getPublicData()
	{
		return "this area is open to everyone, requires no authentication.....";
	}

    @GetMapping("/all")
    public List<Drivers> getAll() {
        return (List<Drivers>) usersRepository.findAll();
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/oneid/{id}")
    public Drivers  getOne(@PathVariable("id") Integer id) {
        Optional<Drivers> optionalEntity =  usersRepository.findById(id);
        
        Drivers d = optionalEntity.get();
        return d;
    }
    @PostMapping("/load")
    public List<Drivers> persist(@RequestBody final Drivers users) {
        usersRepository.save(users);
        return (List<Drivers>) usersRepository.findAll();
    }
    @PutMapping("/put")
    public List<Drivers> persis(@RequestBody final Drivers users) {
        usersRepository.save(users);
        return (List<Drivers>) usersRepository.findAll();
    }
    @DeleteMapping("/delete/{id}")
    public List<Drivers> delete(@PathVariable("id") Integer id) {
        usersRepository.deleteById(id);
        return (List<Drivers>) usersRepository.findAll();
    }
    
}