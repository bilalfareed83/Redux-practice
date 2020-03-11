const changeNumber = newNum => {
  return {
    type: 'CHANGE_NUMBER',
    payload: {
      number: newNum + 1
    }
  };
};

export default changeNumber;
