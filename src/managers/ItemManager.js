//TODO CRUD for all item related fetches to API
import { getToken } from "./TokenManager"


export const getAllItems = () => {
  let token = getToken()
  return fetch("http://localhost:8000/items", {
    headers: {
      "Authorization": `Token ${token}`
    },
  })
    .then(res => res.json())
}

export const getItemTypes = () => {
  let token = getToken()
    return fetch("http://localhost:8000/item_types", {
      headers: { 
        "Authorization": `Token ${token}`
      }
    })
    .then(res => res.json())

}

//TODO: Post new item to store (Create)
export const createItem = (item) => {
  let token = getToken()
  return fetch("http://localhost:8000/items", { 
  method: "POST",    
  headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
      },
      body: JSON.stringify(item),
  })
      .then(response => response.json())
}

//TODO: Edit Item

export const updateItem = (item) => {
  return fetch(`http://localhost:8000/items/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${getToken()}`
    },
    body: JSON.stringify(item)
  })

}

//TODO Get item by id

export const getItemById = (id) => {
  return fetch(`http://localhost:8000/items/${id}`, {
    headers: {
      "Authorization": `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}



//TODO: Delete Item