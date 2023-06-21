//TODO This "Item List" will be the Club Store
//Sample code is from Honey Raes.  This code will show buttons such as "create item" based on who is logged in.

import { useEffect, useState } from "react";
import { getAllItems } from "../../managers/ItemManager";
import { useNavigate } from "react-router-dom"
import { updateItem } from "../../managers/ItemManager";

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllItems().then((res) => setItems(res));
  }, []);


// const handleDeleteItem = () => {
//     return (
//       <button
//         className="btn-delete"
//         onClick={}
//       >
//         Delete
//       </button>
//     );
//   };


  return (
    <>
      {items.map((item) => (
        <section key={`item--${item.id}`} className="item">
            <button className="btn-edit"
            onClick={() => navigate(`/updateitem/${item.id}`)}>
                Edit Item
            </button>
            <button>delete</button>
          <div className="item__name">{item.name}</div>
          <div className="item__image">{item.image}</div>
          <div className="item__description">
            Description: {item.description}
          </div>
          <div className="item__price">Price: {item.price}</div>
          
        </section>
      ))}
    </>
  )
};
