const decreaseNumber = newNum => {
  return {
    type: 'CHANGE_NUMBER',
    payload: {
      number: newNum - 1
    }
  };
};

export default decreaseNumber;
