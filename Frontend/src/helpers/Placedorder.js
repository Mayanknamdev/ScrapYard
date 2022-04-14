import React, { useState, useEffect } from "react";

import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container, Col, Row } from "reactstrap";


const Allproducts = () => {
  
  
  const [id, setId] = useState(0)
  const [name, setname] = useState(0)
  const [contactNo, setcontactNo] = useState(0)
  const [email, setemail] = useState(0)
  const [address, setaddress] = useState(0)
  const [city, setcity] = useState(0)
  
  
  
  
 useEffect(()=>
  {
    getAllProducts()
 }, [])
  
  
  const getAllProducts = () => {
    const cookie = new Cookies();
    const category = cookie.get("category");
    const subCategory = cookie.get("subcategory");
    const rate = cookie.get("rate");
    console.log("Sam")
    const para = { category, subCategory, rate };

    axios.post("http://localhost:8082/Seller", para).then(response => {
        const result = response.data
        console.log("date of travellings")
        if (result['status'] === 'success') {
            setId(result.data.userId)
            setname(result.data.name)
            setcontactNo(result.data.contactNo)
            setemail(result.data.email)
            setaddress(result.data.address)
            setcity(result.data.city)
            console.log(result.data.userId)
           
        } else {
            toast.error(result['error'])
            console.log("error")
        }
    })
  };
   const menuButton = () => {
     const role = localStorage.getItem("roles");
     console.log(role);
     if (role === "industrialist") {
       window.location.href = "/industrialistDash";
     } else if (role === "dealer") {
       window.location.href = "/dealerdash";
     } else if (role === "trader") {
       window.location.href = "/trederdash";
     }
     return null;
   };


  return (
    <>
      <Container>
        <Row>
          <Button variant="secondary" type="submit" onClick={menuButton}>
            MAIN MENU
          </Button>
        </Row>
      </Container>
      <br></br>
      <center>
        <h1>Your Seller Details</h1>
      </center>
      <div>
        <br></br>
        <center>
          <Row>
            <Col sm="4"></Col>
            <Col sm="3">
              <Card body color="info" outline style={{ width: "18rem" }}>
                <CardBody className="text-center">
                  <CardTitle tag="h5">
                    userId:
                    {id}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    name:
                    {name}
                  </CardSubtitle>
                  <CardText>
                    contactNo:
                    {contactNo}
                  </CardText>
                  <CardText>
                    email:
                    {email}
                  </CardText>
                  <CardText>
                    address:
                    {address}
                  </CardText>
                  <CardText>
                    city:
                    {city}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </center>
      </div>

      <br></br>
    </>
  );
};
export default Allproducts;
