import React from 'react'

export const user = {
    email: "",
    password: "",
    isLoggedIn: false
}

export const logOut = () => {
    user.isLoggedIn = true
}

export const AppContext = React.createContext({
    user,
    logOut
})