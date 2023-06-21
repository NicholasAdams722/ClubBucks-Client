//TODO Create new Item in store using this form


import { useState } from "react"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createItem, getItemTypes} from "../../managers/ItemManager"

export const ItemForm = () => {

  const navigate = useNavigate()
  const [itemTypes, setItemTypes] = useState([])


  const [currentItem, setCurrentItem] = useState({
    name: "",
    description: "",
    itemType: 0,
    price: 0,
    image: "",
    quantity: 0
  });



useEffect(() => {
  // TODO: Get the item types, then set the state
  getItemTypes().then((res) => setItemTypes(res));
}, []);


  // const changeItemState = (evt) => {

  //   const copy = { ...currentItem };
  //   copy[evt.target.name] = evt.target.value
  //   setCurrentItem(copy);
  // }

  const changeItemState = (evt) => {
    const {name, value} = evt.target
    setCurrentItem(
        {...currentItem,
            [evt.target.name]: value
        }
    )
}

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const item = {
      name: currentItem.name,
      item_type: parseInt(currentItem.itemType),
      description: currentItem.description,
      price: parseInt(currentItem.price),
      image: currentItem.image,
      quantity: parseInt(currentItem.quantity)
    };

    // Send POST request to your API
    createItem(item).then(() => navigate("/"));
  }
  

  return (
    <form className="itemForm">
      <h2 className="itemForm__title">Create New Item</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Name: </label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            value={currentItem.name}
            onChange={changeItemState}
          />
        </div>
      </fieldset>

<fieldset>
      <select onChange={changeItemState} name="itemType">

        {itemTypes.map((itemType) => (
            <option key={itemType.id} value={itemType.id}>
                {itemType.item_type}
                </option>
          )
        )}
      </select>
</fieldset>

      {/* TODO: create the rest of the input fields */}

      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            required
            autoFocus
            className="form-control"
            value={currentItem.description}
            onChange={changeItemState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            required
            autoFocus
            className="form-control"
            value={currentItem.price}
            onChange={changeItemState}
          />
        </div>
      </fieldset>


      <fieldset>
        <div className="form-group">
          <label htmlFor="image">Upload Image: </label>
          <input
            type="text"
            name="image"
            required
            autoFocus
            className="form-control"
            value={currentItem.image}
            onChange={changeItemState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="image">Quantity: </label>
          <input
            type="text"
            name="quantity"
            required
            autoFocus
            className="form-control"
            value={currentItem.quantity}
            onChange={changeItemState}
          />
        </div>
      </fieldset>

      <button
        type="button"
        onClick={(evt) => {
          // Prevent form from being submitted
          //evt.preventDefault();

          handleSubmit(evt)}} className="btn btn-primary"
      >
        Create New Item
      </button>
    </form>
  );
}