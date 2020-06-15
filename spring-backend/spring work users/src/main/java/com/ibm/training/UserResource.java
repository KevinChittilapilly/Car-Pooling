package com.ibm.training;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import javax.management.Notification;

import java.io.Console;
import java.util.List;

@RestController
public class UserResource {

    @Autowired
    UsersRepo usersRepository;
    @Autowired
    private MailConfig notificationService;

    @RequestMapping("/")
	String getPublicData()
	{
		return "this area is open to everyone, requires no authentication.....";
	}
    List<Users> user1;
    boolean f=false;
    @GetMapping("/name/{id}")
    public List<Users> findthis(@PathVariable("id") Integer id) {
        return (List<Users>) usersRepository.findByDriverid(id);
    }
    
    

    @GetMapping("/getid/{id}")
    public Users  getOnee(@PathVariable("id") Integer id) {
        Optional<Users> optionalEntity =  usersRepository.findById(id);
        
        Users d = optionalEntity.get();
        return d;
    }
    @GetMapping("/all1")
    public List<Users> getAll() {
        return (List<Users>) usersRepository.findAll();
    }
    
    @PostMapping("/load1")
    public List<Users> persist(@RequestBody final Users users) {
        usersRepository.save(users);
        return (List<Users>) usersRepository.findAll();
    }
    @CrossOrigin("http://localhost:3000")
    @PutMapping("/put2")
    public List<Users> per(@RequestBody final Users users) {
        
        
        System.out.print("users");
        
        try{
            notificationService.sendNotification1(users);
        }catch(Exception e){
            System.out.print(e);
        }
        users.setDemail(null);
        users.setDname(null);
        users.setDnumber(null);
        users.setDriverid(null);
        usersRepository.save(users);
        return (List<Users>) usersRepository.findAll();
    }
    
    @PutMapping("/put1")
    public List<Users> persis(@RequestBody final Users users) {
        usersRepository.save(users);
        try{
            notificationService.sendNotification(users);
        }catch(Exception e){
            System.out.print(e);
        }
        
        return (List<Users>) usersRepository.findAll();
    }
    @DeleteMapping("/delete/{id}")
    public List<Users> delete(@PathVariable("id") Integer id) {
        usersRepository.deleteById(id);
        return (List<Users>) usersRepository.findAll();
    }
}