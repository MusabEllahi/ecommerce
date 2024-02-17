import React, { useEffect, useState } from 'react'

const getUsers = () => {
    const [loggedUser, setLoggedUser] = useState([])

    useEffect(() => {
        if (localStorage.getItem("UsersList") != null) {
            let fetchUser = localStorage.getItem("UsersList");
            let jsonData = JSON.parse(fetchUser);
            setLoggedUser(jsonData)
        }
        else localStorage.setItem("UsersList", JSON.stringify([]))

    }, [])

    return { loggedUser, setLoggedUser }
}

export default getUsers