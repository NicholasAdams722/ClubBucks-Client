//TODO This "Item List" will be the Club Store
//Sample code is from Honey Raes.  This code will show buttons such as "create item" based on who is logged in.

import { useEffect, useState } from "react";
import { getAllItems } from "../../managers/ItemManager";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../../managers/ItemManager";
import "./Items.css";

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllItems().then((res) => setItems(res));
  }, []);

  // onClick of the button should call the DELETE fetch function and pass in the object’s id. After the DELETE function runs, then the component should get the list again and update the state.
const DeleteItemEvent = (item) => {
    deleteItem(item).then(() => getAllItems().then((res) => setItems(res)));
}

  return (
    <> 
    <h1>Club Store</h1>
    <div className="item-container">
      {items.map((item) => (
        <section key={`item--${item.id}`} className="item">

          <div className="item__name">{item.name}</div>
          <div className="item__image">{item.image}</div>
          <div className="item__description">
            Description: {item.description}
          </div>
          <div className="item__price">Price: ${item.price}</div>
          <button
            className="btn-edit"
            onClick={() => navigate(`/updateitem/${item.id}`)}
          >
            Edit Item
          </button>

          <button className="btn-edit" onClick={() => DeleteItemEvent(item.id)}>
            Delete Item
          </button>
        </section>
      ))}
      </div>
    </>
  );
};
