//TODO import token
import { getToken } from "./TokenManager"
import { getTokenOnly } from "./TokenManager"

//TODO get all students 
export const getAllStudents = () => {
    let token = getTokenOnly()
    return fetch("http://localhost:8000/students", {
      headers: {
        "Authorization": `Token ${token}`
      },
    })
      .then(res => res.json())
  }


//TODO get student by id

export const getStudentById = (id) => {
  let token = getTokenOnly()
    return fetch(`http://localhost:8000/students/${id}`, {
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then(res => res.json())
  }
  
  

//TODO update students 

export const updateStudent = (student) => {
  let token = getTokenOnly()
    return fetch(`http://localhost:8000/students/${student.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify(student)
    })
  
  }

//TODO delete students 

export const deleteStudent = (id) => {
  let token = getTokenOnly()
    return fetch(`http://localhost:8000/students/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${token}`
      }
    }
    )
  }
