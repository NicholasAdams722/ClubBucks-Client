import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ItemList } from "../components/storeItems/ItemList"
import { ItemForm } from "../components/storeItems/itemForm"
import { UpdateItemForm } from "../components/storeItems/UpdateItem"
import { StudentList } from "../components/Wallets/StudentWallets"
import { UpdateStudentForm } from "../components/Wallets/UpdateStudents"


export const ApplicationViews = () => {

    // const ClubBucksUser = localStorage.getItem("cb_token")
    // const clubBucksUserObject = JSON.parse(ClubBucksUser)

    return <>


            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />  

            <Route path="/studentwallets" element={<StudentList />} />
            <Route path="/" element={<ItemList />}  />
            <Route path="/additem" element={<ItemForm />}  />
            <Route path="/updateitem/:itemId" element={<UpdateItemForm />}  />
            <Route path="/updatestudent/:studentId" element={<UpdateStudentForm />} />
    </Routes>
    </>
}


