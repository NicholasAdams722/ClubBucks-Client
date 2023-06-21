export const getToken = () => {
    const ClubBucksUser = localStorage.getItem("cb_token")
    const clubBucksUserObject = JSON.parse(ClubBucksUser)
    console.log(clubBucksUserObject.token)
    return clubBucksUserObject.token
}