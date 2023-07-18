//TODO Create form to update an existing Student Balance

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getStudentById,
  updateStudent,
} from "../../managers/StudentManager.js";
import { useParams } from "react-router-dom";

export const UpdateStudentForm = () => {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [currentStudent, setCurrentStudent] = useState({
    id: 0,
    user: 0,
    age: 0,
    grade_level: 0,
    balance: 0
  });

  const [counter, setCounter] = useState(0);
  //Add use effect to get item by id from database

  useEffect(() => {
    getStudentById(studentId).then((res) => setCurrentStudent(res));
  }, []);

  const changeStudentState = (domEvent) => {
    const { name, value } = domEvent.target;
    setCurrentStudent((prevState) => ({ ...prevState, [name]: value }));

    // const copy = { ...currentItem };
    // copy[domEvent.target.name] = domEvent.target.value
    // setCurrentItem(copy);
  };

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };


  return (

<form className="studentForm">
      <h2 className="studentForm__title">Update Student Balance</h2>

      <section className="student_balance">

        <p>Current Balance: {currentStudent.balance}</p>

        <fieldset>
          <div className="form-group">
            <label htmlFor="counter">Reward your student!   Or not... </label>
            <button type="button" onClick={decrementCounter}>-</button>
            <span>{counter}</span>
            <button type="button" onClick={incrementCounter}>+</button>
          </div>
        </fieldset>
      </section>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const updatedStudent = {
            ...currentStudent,
            balance: currentStudent.balance + counter,
          };

          updateStudent(updatedStudent).then(() => navigate("/studentWallets"));
        }}
        className="btn btn-primary"
      >
        Update Student
      </button>
    </form>

  );



  //   <form className="studentForm">
  //     <h2 className="studentForm__title">Update Student Balance</h2>

  //   <section className="student_balance">
  //   Student Name: {currentStudent.id} Student Grade: {currentStudent.grade_level} Student Age: {currentStudent.age}

  //   <fieldset>
  //       <div className="form-group">
  //         <label htmlFor="balance">Balance: </label>
  //         <input
  //           type="number"
  //           name="balance"
  //           required
  //           autoFocus
  //           className="form-control"
  //           value={currentStudent.balance}
  //           onChange={changeStudentState}
  //         />
  //       </div>
  //     </fieldset>

  //   </section>

  //     <button
  //       type="submit"
  //       onClick={(evt) => {
  //         // Prevent form from being submitted
  //         evt.preventDefault();

  //         const updatedStudent = {
  //           id: currentStudent.id,
  //           user: currentStudent.user,
  //           age: currentStudent.age,
  //           balance: currentStudent.balance,
  //           grade_level: currentStudent.grade_level
  //         };

  //         //Send POST request to your API
  //         updateStudent(updatedStudent).then(() => navigate("/studentWallets"));
  //       }}
  //       className="btn btn-primary"
  //     >
  //       Update Student
  //     </button>
  //   </form>
  // );
};
