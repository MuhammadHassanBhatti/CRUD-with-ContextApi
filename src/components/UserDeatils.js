import Table from "react-bootstrap/Table";
import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import UpdateUser from './UpdateUser'


function UserDetails( { users, deleteUser, updateUser } ) {

    const [show, setShow] = useState(false);
    
    const [selectedUser, setSelectedUser] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (userId) => {
        deleteUser(userId);
    };

    const handleUpdate = (user) => {
    setSelectedUser(user);
    handleShow()
    };

  return (
<>
    <div className="container my-5">
       
        <div>
          <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Sr. #</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                    {users.map((user, ind) => (
                        <tr key={user.id}>
                            <td><b>{ind+1}</b></td> 

                        <td>
                            <input
                            type="text"
                            readOnly
                            className="form-control-plaintext"
                            id="FirstName"
                            value={user.firstName}
                            />
                        </td>

                        <td>
                            <input
                            type="text"
                            readOnly
                            className="form-control-plaintext"
                            id="LastName"
                            value={user.lastName}
                            />
                        </td>

                        <td>
                            <input
                            type="text"
                            readOnly
                            className="form-control-plaintext"
                            id="Email"
                            value={user.email}
                            />
                        </td>
                        <td>
                            <Button variant="success mx-2" onClick={() => handleUpdate(user)}>Update</Button> 
                            <Button variant="danger" onClick={()=>handleDelete(user.id)}>Delete</Button>
                        </td>
                        </tr>
                    ))}
                    { <UpdateUser user={selectedUser} updateUser={updateUser} show={show} handleClose={handleClose} handleShow={handleShow} />}
                  
                </tbody>
          </Table>
        </div>

    </div>
</>
  );
}

export default UserDetails;
