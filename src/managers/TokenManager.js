export const getToken = () => {
    const ClubBucksUser = localStorage.getItem("cb_token")
    return ClubBucksUser
}