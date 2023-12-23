import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);

    // Check if the input value has a length of 1, then set isValid to true
    setIsValid(inputValue.trim().length !== 0);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : 'yy'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />

        <Button type="submit" disabled={!isValid}>
          Add Goal
        </Button>
      </div>
    </form>
  );
};

export default CourseInput;
