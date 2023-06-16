//TODO Create new Item in store using this form


import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addTicket } from "../../managers/TicketManager"

export const TicketForm = () => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    itemType: "",
    price: 0,
    image: "",
    quantity: 0
  })

  const navigate = useNavigate()

  const submitItem = (evt) => {
    evt.preventDefault()

    addTicket(ticket)
      .then(() => navigate("/"))
  }

  return (
    <form className="ticketForm">
      <h2 className="ticketForm__title">New Service Ticket</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            onChange={
              (evt) => {
                const copy = { ...ticket }
                copy.description = evt.target.value
                setTicket(copy)
              }
            }
            required autoFocus
            type="text" id="description"
            className="form-control"
            placeholder="Brief description of problem"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Emergency:</label>
          <input
            onChange={
              (evt) => {
                const copy = { ...ticket }
                copy.emergency = evt.target.checked
                setTicket(copy)
              }
            }
            type="checkbox" />
        </div>
      </fieldset>
      <button onClick={submitTicket} className="btn btn-primary">
        Submit Ticket
      </button>
    </form>
  )
}