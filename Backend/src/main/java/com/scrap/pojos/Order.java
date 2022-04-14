package com.scrap.pojos;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "orders")
public class Order {
	@Id
	@Column(name = "orderid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	@Column(name = "category")
	private String category;
	@Column(name = "subcategory")
	private String subcategory;
	@Column(name = "rate")
	private double rate;

	@Column(name = "contact_no")
	private String contactNo;
	@Column
	private String state;
	@Column(name = "order_date")
	private Date orderDate;
	@Column
	private String city;
	@Column
	private String zipcode;
	@Column
	private String address;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "user_id")
	private Register register;

	public Order() {
		super();
	}

	public Order(int orderId, String category, String subcategory, double rate, String contactNo, String state,
			Date orderDate, String city, String zipcode, String address, Register register) {
		super();
		this.orderId = orderId;
		this.category = category;
		this.subcategory = subcategory;
		this.rate = rate;
		this.contactNo = contactNo;
		this.state = state;
		this.orderDate = orderDate;
		this.city = city;
		this.zipcode = zipcode;
		this.address = address;
		this.register = register;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSubcategory() {
		return subcategory;
	}

	public void setSubcategory(String subcategory) {
		this.subcategory = subcategory;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(double rate) {
		this.rate = rate;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Register getRegister() {
		return register;
	}

	public void setRegister(Register register) {
		this.register = register;
	}

	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", category=" + category + ", subcategory=" + subcategory + ", rate="
				+ rate + ", contactNo=" + contactNo + ", state=" + state + ", orderDate=" + orderDate + ", city=" + city
				+ ", zipcode=" + zipcode + ", address=" + address + ", register=" + register + "]";
	}

}
