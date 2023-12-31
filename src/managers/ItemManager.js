//TODO CRUD for all item related fetches to API
import { getToken } from "./TokenManager";
import { getTokenOnly } from "./TokenManager";

export const getAllItems = () => {
  let token = getTokenOnly();
  return fetch("http://localhost:8000/items", {
    headers: {
      Authorization: `Token ${token}`,
    },
  }).then((res) => res.json());
};

export const getItemTypes = () => {
  let token = getTokenOnly();
  return fetch("http://localhost:8000/item_types", {
    headers: {
      Authorization: `Token ${token}`,
    },
  }).then((res) => res.json());
};

//TODO: Post new item to store (Create)
export const createItem = (item) => {
  let token = getTokenOnly();
  return fetch("http://localhost:8000/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(item),
  }).then((response) => response.json());
};

//TODO: Edit Item

export const updateItem = (item) => {
  let token = getTokenOnly();
  return fetch(`http://localhost:8000/items/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(item),
  });
};

//TODO Get item by id

export const getItemById = (id) => {
  let token = getTokenOnly();
  return fetch(`http://localhost:8000/items/${id}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  }).then((res) => res.json());
};

//TODO: Delete Item

export const deleteItem = (id) => {
  let token = getTokenOnly();
  return fetch(`http://localhost:8000/items/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

//TODO: Post item to User Cart.  
//! Will need to create an 'orders' list in the backend to store items added to cart.

// export const toCart = (item) => {
//   let token = getTokenOnly();
//   return fetch(`http://localhost:8000/cart_items`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`,
//     },
//     body: JSON.stringify(item),
//   }).then((response) => response.json());
// };

// //TODO: get all cart items

// export const getAllCartItems = () => {
//   let token = getTokenOnly();
//   return fetch("http://localhost:8000/cart_items", {
//     headers: {
//       Authorization: `Token ${token}`,
//     },
//   }).then((res) => res.json());
// };
