drop database project;
create database project;

use project;

create table admin
(
 email varchar(250) primary key,
 password varchar(50)
);

create table register
(
 user_id int auto_increment primary key,
 name varchar(50),
 contact_no varchar(10),
 email varchar(50),
 password varchar(50),
 state varchar(10),
 city varchar(10),
 zipcode varchar(30),
 address varchar(255),
 role varchar(70)
);
insert into register values(2,"sam",86826811,"sama@gmail.com","sam123","MH","pune",7932,"hyderabad","industrialist");

insert into register values(3,"darsha",86826811,"darsha@gmail.com","darsha123","MH","pune",7932,"dighi","trader");

insert into register values(4,"krishna",75757233,"krishna@gmail.com","krishna123","UP","udaipur",7932,"rajasthan","industrialist");

insert into register values(5,"Bhushan",86826811,"bhushan@gmail.com","bhushan123","UP","udaipur",7932,"rajasthan","dealer");


create table category
(
  cat_id int auto_increment primary key,
  category varchar(50)
);
	
insert into category values(1,"plastic");

insert into category values(2,"steel");
  

create table sub_category
(
  subcat_id int auto_increment primary key,
  user_id int,
  category varchar(80) ,
  subcategory varchar(250),
  description varchar(250) ,
  qty int,
  rate double,
  
   foreign key(user_id) references register(user_id),
   
   foreign key(category) references category(category)
);

insert into sub_category values(1,2,"plastic","rubber","this is a rubber",100,30);

insert into sub_category values(2,2,"plastic","button","this is a button",10,80);

insert into sub_category values(3,2,"plastic","pvc","this is a pvc",10,220);


 
create table orders
(
  orderid int auto_increment primary key,
  user_id int,
  subcategory varchar(500),
  category varchar(500),
  rate double,
  order_date date,
  contact_no varchar(50),
  state varchar(10),
  city varchar(10),
  zipcode varchar(255),
  address varchar(255),

   foreign key(user_id) references register(user_id),
  foreign key(subcat_id) references sub_category (subcat_id),
  
   foreign key(category) references category(category)
);
insert into orders values(default,2,"plastic","rubber",100,"2020-09-08","83462386","MH","Nashik",79879,"pune");
 
create table stock(s_id int auto_increment primary key,
userid int,
category varchar(100),
subcategory varchar(100),
price double,
qty int,
description varchar(255),
   foreign key(userid) references register(user_id),
  foreign key(subcat_id) references sub_category (subcat_id),
  
   foreign key(category) references category(category)
);
insert into stock values(default,2,"plastic","rubber",783,88,"this is rubber");

insert into stock values(default,2,"plastic","plate",777,99,"this is plate");
