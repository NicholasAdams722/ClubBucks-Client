//TODO CRUD for all item related fetches to API



export const getAllTickets = () => {
  return fetch("http://127.0.0.1:8000/", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}
export const addTicket = (ticket) => {
    return fetch("http://127.0.0.1:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      },
      body: JSON.stringify(ticket)
    })
      .then(res => res.json())
  }

export const updateTicket = (ticket) => {
    return fetch(`http://127.0.0.1:8000/${ticket.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      },
      body: JSON.stringify(ticket)
    })
  }

  export const deleteTicket = (id) => {
    return fetch(`http://127.0.0.1:8000/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${getToken()}`
      }
    }
    )
  }