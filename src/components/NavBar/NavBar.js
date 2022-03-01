import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Form, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

const NavBar=() => {
  return (
    <header>
      <Navbar className='Navbar'
              bg="transparent" /*dark */
              variant="dark"
              sticky="top" 
              expand="lg"   //sm resposive
              collapseOnSelect
        >
        <Navbar.Brand className='me-auto my-2 my-lg-0'>
          <h1>Friends</h1>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse style={{display:'flex' , justifyContent:'end'}}>
          <Nav>  
            <Form inline className="searchBox justify-content-end">
              <FormControl className="searchTitle" type="text" placeholder="Title" />
              <FormControl className="icon-search"  value="Rechercher"  type="submit" />
            </Form>
           <DropdownButton 
              className='justify-content-end' 
              align="end"
              title={ <div className="pull-left"> ...</div> }
              style={{margin:'13%', padding:'7%'}}
              id="dropdown-menu-align-end">
              <Dropdown.Item eventKey="1"> Edit privacy</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavBar;