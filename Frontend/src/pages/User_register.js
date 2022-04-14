import React, { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'


export default function CustomerRegister() {
  const [userId, setuserId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [contactNo, setContactno] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    const User = {userId, name, email, address, city, state, zipcode, contactNo, password, role }
    console.log(User);
    fetch("http://localhost:8082/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(User)
    }).then(() => {
      console.log("new User added")
      window.location.href = "/user_login";
    })
  }

  return (
    <div>
      <Form>
        <h1>User Register</h1>
 


        <FormGroup>

          <Input
            id="name"
            name="name"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>

          <Input
            id="contactNo"
            name="contactNo"
            placeholder="contact"

            value={contactNo}
            onChange={(e) => setContactno(e.target.value)}
          />
        </FormGroup>
        <FormGroup>

          <Input
            id="email"
            name="email"
            placeholder="User Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup>

          <Input
            id="state"
            name="state"
            placeholder="state"

            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </FormGroup>
        <FormGroup>

          <Input
            id="city"
            name="city"
            placeholder="User city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

        </FormGroup>

        <FormGroup>

          <Input
            id="zipcode"
            name="zipcode"
            placeholder="zipcode "
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </FormGroup>
        <FormGroup>

          <Input
            id="address"
            name="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="role">
            Select Role
          </Label>
          <Input
            id="role"
            name="role"
            type="select"
            value="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option>
              select role
            </option>
            <option>
            industrialist
            </option>
            <option>
              dealer
            </option>
            <option>
            trader
            </option>
          </Input>
        </FormGroup>





        <FormGroup check>
          <Input type="checkbox" />
          {' '}
          <Label check>
            Accept the terms
          </Label>
        </FormGroup>

        <Button
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}