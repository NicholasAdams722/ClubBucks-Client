//TODO import token
import { getToken } from "./TokenManager"

//TODO get all students 
export const getAllStudents = () => {
    let token = getToken()
    return fetch("http://localhost:8000/students", {
      headers: {
        "Authorization": `Token ${token}`
      },
    })
      .then(res => res.json())
  }


//TODO get student by id

export const getStudentById = (id) => {
    return fetch(`http://localhost:8000/students/${id}`, {
      headers: {
        "Authorization": `Token ${getToken()}`
      }
    })
      .then(res => res.json())
  }
  
  

//TODO update students 

export const updateStudent = (student) => {
    return fetch(`http://localhost:8000/students/${student.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${getToken()}`
      },
      body: JSON.stringify(student)
    })
  
  }

//TODO delete students 

export const deleteStudent = (id) => {
    return fetch(`http://localhost:8000/students/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${getToken()}`
      }
    }
    )
  }
