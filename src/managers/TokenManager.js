export const getToken = () => {
    const ClubBucksUser = localStorage.getItem("cb_token")
    return ClubBucksUser
}

export const getTokenOnly = () => {
    const clubBucksUser = localStorage.getItem("cb_token")
    const clubBucksUserObject = JSON.parse(clubBucksUser)
    return clubBucksUserObject.token
    
}