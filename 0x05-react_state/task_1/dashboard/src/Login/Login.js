import React from "react"
import { StyleSheet, css } from 'aphrodite'
import { useState, useEffect } from 'react'

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [enableSubmit, setEnableSubmit] = useState(false)

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        setIsLoggedIn(true)
    }

    const handleChangeEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    useEffect(() => {
        if (email !== "" && password !== "") {
            setEnableSubmit(true)
        } else {
            if (enableSubmit !== false) {setEnableSubmit(false)}
        }
    }, [email, password])

    return (
        <React.Fragment>
            <div className={css(styles["App-body"])}>
                <p>Login to access the full dashboard</p>
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={email} onChange={handleChangeEmail} className={css(styles.input)} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={password} onChange={handleChangePassword} className={css(styles.input)} />
                    <input type="submit" value="OK" disabled={!enableSubmit} />
                </form>
            </div>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    "App-body": {
        fontSize: '1rem',
        padding: '2em',
        borderBottom: '3px solid #e0354b',
        height: '45%',
        "@media (max-width: 900px)": {
            display: 'flex',
            flexDirection: 'column'
        }
    },

    input: {
        margin: '10px',
        "@media (max-width: 900px)": {
            display: 'block',
            margin: '0'
        }
    },
})

export default Login