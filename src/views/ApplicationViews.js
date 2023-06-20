import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ItemList } from "../components/storeItems/ItemList"
import { ItemForm } from "../components/storeItems/itemForm"

export const ApplicationViews = () => {
    return <>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />  
            <Route path="/" element={<ItemList />}  />
            <Route path="/additem" element={<ItemForm />}  />
    </Routes>
    </>
}


