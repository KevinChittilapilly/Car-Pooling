package com.ibm.training;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Id;



	@Entity
	public class Users {
		@Id 
		private Integer user_id;
		
		private String name;
		private String address;
		private String daddress;
		private String emailid;
		private String number;
		private Integer driverid;
		private String dname;
		private String dnumber;
		private String demail;
		private Integer rating;
		private String feedback;
		public Integer getUser_id() {
			return user_id;
		}

		public void setUser_id(Integer user_id) {
			this.user_id = user_id;
		}

		

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getEmailid() {
			return emailid;
		}

		public void setEmailid(String emailid) {
			this.emailid = emailid;
		}

		public String getNumber() {
			return number;
		}

		public void setNumber(String number) {
			this.number = number;
		}

		public Users() {
		}

		public Integer getDriverid() {
			return driverid;
		}

		public void setDriverid(Integer driverid) {
			this.driverid = driverid;
		}

		public String getDname() {
			return dname;
		}

		public void setDname(String dname) {
			this.dname = dname;
		}

		public String getDnumber() {
			return dnumber;
		}

		public void setDnumber(String dnumber) {
			this.dnumber = dnumber;
		}

		public String getDemail() {
			return demail;
		}

		public void setDemail(String demail) {
			this.demail = demail;
		}

		public String getDaddress() {
			return daddress;
		}

		public void setDaddress(String daddress) {
			this.daddress = daddress;
		}

		public Integer getRating() {
			return rating;
		}

		public void setRating(Integer rating) {
			this.rating = rating;
		}

		public String getFeedback() {
			return feedback;
		}

		public void setFeedback(String feedback) {
			this.feedback = feedback;
		}

		

		

		

		

}
