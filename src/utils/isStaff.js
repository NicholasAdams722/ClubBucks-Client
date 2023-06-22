export const isStaff = () => {
    const auth = localStorage.getItem("cb_token")
     const userType = JSON.parse(auth)
    return userType?.staff
  }
  