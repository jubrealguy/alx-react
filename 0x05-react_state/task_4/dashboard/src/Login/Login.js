import React, { useState, useEffect } from "react"
import { StyleSheet, css } from 'aphrodite'
import PropTypes from "prop-types"

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [enableSubmit, setEnableSubmit] = useState(false)

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        props.logIn(e.target.elements.email.value, e.target.elements.password.value)
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
                    <input type="email" name="email" id="email" value={email} onChange={handleChangeEmail} className={css(styles.input)} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={password} onChange={handleChangePassword} className={css(styles.input)} />
                    <input type="submit" value="OK" disabled={!enableSubmit} />
                </form>
            </div>
        </React.Fragment>
    )
}

Login.PropTypes = {
    logIn: PropTypes.func
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