//TODO This component will be the "cart" for the current student user.

import { useEffect, useState } from "react";
import { getAllItems } from "../../managers/ItemManager";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../../managers/ItemManager";

export const MyCart = () => {
//TODO create a new state for the array of "my items" specific to the user
const [myItems, setMyItems] = useState([])



//TODO iterate through the array of "my items" and display each item in the array


//TODO add a "purchase" button to each cart item. when purchase button is clicked, it will send the clicked item to the teacher's order list.



return (
<>
<h1>My Cart</h1>



<div>
{myItems.map((myItem) => {

}
)}
</div>




</>


)
}