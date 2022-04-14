import React, { useState } from 'react'
import { Button, Form, FormGroup, Container,Row, Input, Label } from 'reactstrap'
import axios from "axios";
import { toast } from 'react-toastify';

export default function TrderAdd() {
  
  const [category, setcategory] = useState('')
  const [subcategory, setsubcategory] = useState('')
  const [desciption, setdesciption] = useState('')
  const [qty, setqty] = useState('')
  const [rate, setrate] = useState('')
  
  

  const handleClick=()=>{
    const login = {  category, subcategory, desciption, qty, rate }
    const userId = JSON.parse(localStorage.getItem('userId'));
    axios.post("http://localhost:8082/sellProduct/",login,userId).then(
        (response)=>{
            console.log("success");
            console.log(response);
        console.log("new Product added")
        toast.success("product added")
            window.location.href = "/allproducts";
        },
        (error)=>{
            console.log(error);
            console.log("Error");
            alert("Error");
        }
    );
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
    <div>
      <Container>
        <Row>
          <Button variant="secondary" type="submit" onClick={menuButton}>
            MAIN MENU
          </Button>
        </Row>
      </Container>
      <br></br>
      <Form>
        <h1>Sell Product</h1>

        <FormGroup>
          <Input
            id="category"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="subcategory"
            name="subcategory"
            placeholder="subcategory"
            type="text"
            value={subcategory}
            onChange={(e) => setsubcategory(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="desciption"
            name="desciption"
            placeholder="Enter desciption"
            value={desciption}
            onChange={(e) => setdesciption(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="qty"
            name="qty"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setqty(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="rate"
            name="rate"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setrate(e.target.value)}
          />
        </FormGroup>

        <FormGroup check>
          <Input type="checkbox" /> <Label check>Accept the terms</Label>
        </FormGroup>

        <Button onClick={handleClick}>Submit</Button>
      </Form>
    </div>
  );
}