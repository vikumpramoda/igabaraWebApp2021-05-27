import React, { Component } from 'react'
import {Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
//import GusetDetails from '../BookNow/GuestDetails';



export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">igabara Hobbit House |</Navbar.Brand>
    <Nav className="mr-auto">


      <Nav.Link href="/homepage">Home</Nav.Link>
      <Nav.Link href="/signup">SignUp</Nav.Link>
      
      <Nav.Link href="/calendar"> Calendar </Nav.Link>
     
      
      <Nav.Link href="/guest">GuestDetails</Nav.Link>
      
    </Nav>
    <Form inline> 
      <Button variant="outline-info">Client side</Button>
    </Form>
  </Navbar>
  {/*<GusetDetails/> */}
            </div>

            
        )
    }
}
