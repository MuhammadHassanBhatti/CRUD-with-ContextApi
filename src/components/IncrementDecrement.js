import React from 'react';
import Button from 'react-bootstrap/esm/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { useNumberContext } from './NumberContext';

const IncrementDecrement = () => {
  const {
    // number,
    // inputValue,
    // handleInputChange, 
    // handleAddNumber,
    Increment,
    Decrement,
  } = useNumberContext();

  return (
    <>
      {/* <InputGroup className="container my-5">
        <Button variant="outline-secondary" onClick={handleAddNumber}>
          Enter Number to Add
        </Button>
        <Form.Control
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
      </InputGroup> */}

      <div className="container mx-5" style={{ textAlign: 'center' }}>
        {/* <div>
          <p style={{ fontSize: '30px' }}>{number}</p>
        </div> */}
        <Button variant="primary" onClick={Increment}>
          Increment
        </Button>{' '}
        <Button variant="primary" onClick={Decrement}>
          Decrement
        </Button>{' '}
      </div>
    </>
  );
};

export default IncrementDecrement;
