package com.ibm.training;

import javax.management.Notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Service
public class MailConfig {
    private JavaMailSender javaMailSender;
    
    @Autowired
    public  MailConfig(JavaMailSender javaMailSender){
        this.javaMailSender=javaMailSender;
    }
    public void sendNotification1(Users user) throws MailException{
        String driver_name=user.getDname();
        
        SimpleMailMessage mail=new SimpleMailMessage();
        mail.setTo(user.getEmailid());
        mail.setFrom("ckevinvarghese1998@gmail.com");
        mail.setSubject("Car Pooling System");
        mail.setText("Your Ride with Mr. "+driver_name+ " has been succesfully cancelled. You will recieve the refund shortly.");

        javaMailSender.send(mail);
        String name=user.getName();
        
        SimpleMailMessage mail1=new SimpleMailMessage();
        mail1.setTo(user.getDemail());
        mail1.setFrom("ckevinvarghese1998@gmail.com");
        mail1.setSubject("Car Pooling System");
        mail1.setText(name+" has cancelled his/her booking in your vehicle");

        javaMailSender.send(mail1);
    }
    public void sendNotification(Users user) throws MailException{
        String driver_name=user.getDname();
        String dnum=user.getDnumber();
        SimpleMailMessage mail=new SimpleMailMessage();
        mail.setTo(user.getEmailid());
        mail.setFrom("ckevinvarghese1998@gmail.com");
        mail.setSubject("Car Pooling System");
        mail.setText("Your ride with Mr. "+driver_name+" is booked. You can contact him at "+dnum);

        javaMailSender.send(mail);
        String name=user.getName();
        String num=user.getNumber();
        SimpleMailMessage mail1=new SimpleMailMessage();
        mail1.setTo(user.getDemail());
        mail1.setFrom("ckevinvarghese1998@gmail.com");
        mail1.setSubject("Car Pooling System");
        mail1.setText(name+" has booked a seat in your vehicle. You can contact him/her at "+num);

        javaMailSender.send(mail1);
    }

}