import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Nav,
} from "react-bootstrap";
const Navigation = ({ searchByKeyword, genreList,searchBygenre}) => {
  let keyword = "";
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
                {genreList.map(item=> <NavDropdown.Item href="#action/3.1" onClick={()=>searchBygenre(item)}>{item.name}</NavDropdown.Item>)}
  
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form
            inline
            onSubmit={(event) => {
              event.preventDefault();
              searchByKeyword(keyword);
            }}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"

                onChange={(event) => {
                keyword = event.target.value;
                console.log("etr", keyword);
              }}
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
