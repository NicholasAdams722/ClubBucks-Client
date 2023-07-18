// import get all students 
import { useEffect, useState } from "react";
import { getAllStudents, deleteStudent } from "../../managers/StudentManager.js";
// import delete student from student managers
import { useNavigate } from "react-router-dom";
//TODO List all students and edit their balances.  This can be done by adding an edit button and only showing the balance field in the form.  Sneaky sneaky.  
import "./wallets.css"

export const StudentList = () => {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllStudents().then((res) => setStudents(res));
      }, []);

    const DeleteStudentEvent = (student) => {
        deleteStudent(student).then(() => getAllStudents().then((res) => setStudents(res)));
    }

      return (
        <>
        <h1>Student Wallets</h1>
          {students.map((student) => (
            <section key={`student--${student.id}`} className="student">
              <div className="student__name">{student.full_name}</div>
              <div className="student__grade">Grade Level: {student.grade_level}</div>
              <div className="student__balance">Current Balance: {student.balance}
              </div>
              <button
                className="btn-edit"
                onClick={() => navigate(`/updatestudent/${student.id}`)}
              >
                Edit Student Balance
              </button>
    
              <button className="btn-delete" onClick={() => DeleteStudentEvent(student.id)}>
                Delete Student
              </button>
           
            </section>
          ))}
        </>
      );

}

//TODO students should be displayed with their name, grade-level, and balance 

//TODO balance should be a counter for teacher to add Club Bucks to