package com.ibm.training;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;



	@Entity
	public class Drivers {
		@Id
		private Integer driver_id;
		private String name;
		private Integer passengers;
		private String license;
		private String pickup_date;
		private String pickup_time;
		private String number;
		private String car_name;
		private String droptime;
		private String emailid;
		public Drivers() {
			
		}
		public Integer getDriver_id() {
			return driver_id;
		}
		public void setDriver_id(Integer driver_id) {
			this.driver_id = driver_id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public Integer getPassengers() {
			return passengers;
		}
		public void setPassengers(Integer passengers) {
			this.passengers = passengers;
		}
		public String getLicense() {
			return license;
		}
		public void setLicense(String license) {
			this.license = license;
		}
		public String getPickup_date() {
			return pickup_date;
		}
		public void setPickup_date(String pickup_date) {
			this.pickup_date = pickup_date;
		}
		public String getPickup_time() {
			return pickup_time;
		}
		public void setPickup_time(String pickup_time) {
			this.pickup_time = pickup_time;
		}
		public String getNumber() {
			return number;
		}
		public void setNumber(String number) {
			this.number = number;
		}
		public String getCar_name() {
			return car_name;
		}
		public void setCar_name(String car_name) {
			this.car_name = car_name;
		}
		public String getDroptime() {
			return droptime;
		}
		public void setDroptime(String droptime) {
			this.droptime = droptime;
		}

		public String getEmailid() {
			return emailid;
		}

		public void setEmailid(String emailid) {
			this.emailid = emailid;
		}
	
		


}
