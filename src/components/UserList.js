import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav,Navbar, NavDropdown, Form, FormControl,DropdownButton,Dropdown, Item} from 'react-bootstrap';

const UserList=()=>{
    const [listOfUSer, setListOfUSer] = useState([]);
    const [loadUser, setLoadUser] = useState([]);

    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => { setListOfUSer(res.data)
                           setLoadUser(false)})
            .catch(err => console.log(err));
        }, []
    ); //life cicle: Mounting
    console.log(listOfUSer);

  return (
    <section>
        <header style={{display: 'flex', margin:"3%"}}>
        </header>

        { loadUser ? (<h3>Loading...</h3>):(listOfUSer.map((user)=>(
         <div key={user.id}>
              <h2>Name : {user.name}</h2>
              <h3>user Name :{user.username}</h3>
              <h3>Phone : {user.phone}</h3>
              <h3>Email : {user.email}</h3>
              <h6>--------------------------------</h6>
         </div>
       ))) } 
    </section>
  )
}

export default UserList;