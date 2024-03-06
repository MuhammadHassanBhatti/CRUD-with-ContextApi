import React, { createContext, useContext, useState } from 'react';

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNumber = () => {
    const passingValue = parseInt(inputValue, 10);
    if (passingValue > 0) {
      setNumber((prevNumber) => prevNumber + passingValue);
    } else {
      alert('Please Enter a Number Greater than zero');
    }
  };



  const Increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const Decrement = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  const contextValue = {
    number,
    inputValue,
    handleInputChange,
    handleAddNumber,
    Increment,
    Decrement,
  };

  return (
    <NumberContext.Provider value={contextValue}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumberContext = () => {
  return useContext(NumberContext);
};
