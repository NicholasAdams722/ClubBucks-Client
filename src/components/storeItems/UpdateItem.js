//TODO Create form to update an existing Item

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getItemById,
  getItemTypes,
  updateItem,
} from "../../managers/ItemManager.js";
import { useParams } from "react-router-dom";

export const UpdateItemForm = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [itemTypes, setItemTypes] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    name: "",
    description: "",
    item_type: 0,
    price: 0,
    image: "",
    quantity: 0,
  });

  // TODO: Get the item types, then set the state
  useEffect(() => {
    getItemTypes().then((res) => setItemTypes(res));
  }, []);

  //Add use effect to get item by id from database

  useEffect(() => {
    getItemById(itemId).then((res) => setCurrentItem(res));
  }, []);



  const changeItemState = (domEvent) => {
    const { name, value } = domEvent.target;
    setCurrentItem((prevState) => ({ ...prevState, [name]: value }));

    // const copy = { ...currentItem };
    // copy[domEvent.target.name] = domEvent.target.value
    // setCurrentItem(copy);
  };

  const openCloudinaryWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dr5dwhbw7",
        uploadPreset: "cld_upload",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const { secure_url } = result.info;
          setCurrentItem((prevState) => ({
            ...prevState,
            image: secure_url,
          }));
        }
      }
    );

    widget.open();
  };



  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Update Item</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Item Name: </label>
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
        <select
          onChange={changeItemState}
          name="item_type"
          value={currentItem.item_type}
        >
          {itemTypes.map((itemType) => (
            <option key={itemType.id} value={itemType.id}>
              {itemType.item_type}
            </option>
          ))}
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
          <label htmlFor="skillLevel">Price: </label>
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
          <button
            type="button"
            onClick={openCloudinaryWidget}
            className="form-control"
          >
            Choose Image
          </button>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="numberOfPlayers">Quantity: </label>
          <input
            type="number"
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
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          const updatedItem = {
            id: currentItem.id,
            name: currentItem.name,
            item_type: parseInt(currentItem.item_type),
            description: currentItem.description,
            price: currentItem.price,
            image: currentItem.image,
            quantity: currentItem.quantity,
          };

          //Send POST request to your API
          updateItem(updatedItem).then(() => navigate("/"));
        }}
        className="btn btn-primary"
      >
        Update Item
      </button>
    </form>
  );
};
