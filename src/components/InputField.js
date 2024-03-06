import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNumberContext } from './NumberContext';

const InputField = () =>{
    const {
        handleAddNumber,
        inputValue,
        handleInputChange
    } = useNumberContext();



return(
    <>
    <InputGroup className="container my-5">
        <Button variant="outline-secondary" onClick={handleAddNumber}>
          Enter Number to Add
        </Button>
        <Form.Control
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
      </InputGroup>
      </>
);
}
export default InputField;