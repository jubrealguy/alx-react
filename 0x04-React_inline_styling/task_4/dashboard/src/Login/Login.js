import React from "react"
import { StyleSheet, css } from 'aphrodite'

const Login = () => {
    return (
        <React.Fragment>
            <div className={css(styles["App-body"])}>
                <p>Login to access the full dashboard</p>
                <form>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" className={css(styles.input)} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" className={css(styles.input)} />
                <button>OK</button>
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