import React from 'react'
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import {useState} from 'react'
// import {useNavigate} from 'react-router-dom'
import IncrementDecrement from './IncrementDecrement';
import { NumberProvider } from './NumberContext';
import InputField from './InputField';
import ShowResult from './ShowResult';


function UserForm({addUser}) {

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');

    // const navigate = useNavigate();


    // const handleFirstNameChange = (e) => {
    //     setFirstName(e.target.value);
    // };
  
    // const handleLastNameChange = (e) => {
    //     setLastName(e.target.value);
    // };

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    //   };


    // const handleSubmit = () => {
    //     if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
    //       alert('Please fill your all fields');
    //       return;
    //     }

    //     const user = {
    //         id: new Date().getTime(), // Generating unique IDs
    //         firstName,
    //         lastName,
    //         email,
    //       };
      
    //       // Add the user to the state using the addUser function
    //       addUser(user);
          
          
    //       // Reset the form
    //       setFirstName('');
    //       setLastName('');
    //       setEmail('');

    //       //navigate with next page
    //       navigate('/user-details');
        
    // }

    return (
 <>
    {/* <div className="container my-5">

        <Form.Group as={Row} className="mb-3" controlId="firstName">
            <Form.Label column sm="2">
                <b>First Name</b>
            </Form.Label>
            <Col sm="5">
                <Form.Control type="text" placeholder="Enter your First Name here" value={firstName} onChange={handleFirstNameChange}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                <b>Last Name</b>
            </Form.Label>
            <Col sm="5">
                <Form.Control type="text" placeholder="Enter your Last Name here" value={lastName} onChange={handleLastNameChange}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                <b>E-Mail</b>
            </Form.Label>
            <Col sm="5">
                <Form.Control type="email" placeholder="Enter your E-mail here" value={email} onChange={handleEmailChange}/>
            </Col>
        </Form.Group>
            
        <Button style={{width:'10rem'}} variant="primary" onClick={handleSubmit}>Submit</Button>
        

         
    </div> */}

    <NumberProvider>
        <InputField/>
        <ShowResult/>
        <IncrementDecrement />
    </NumberProvider>
   
 </>

  );
}

export default UserForm;