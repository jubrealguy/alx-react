import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext, logOut, user } from "../App/AppContext";

const Header = () => {
    return (
        <>
            <div className={css(styles.Appheader)}>
                <img src={logo} className={css(styles.img)} alt="logo" />
                <h1>School dashboard</h1>
            </div>

            {user.isLoggedIn && (
                <section className={css(styles.greeting)} id="logoutSection">
                    Welcome <strong>{user.email}</strong>
                    <em>
                        <a href="#" onClick={logOut}>
                            (logout)
                        </a>
                    </em>
                </section>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    Appheader: {
        fontSize: '1.4rem',
        color: '#e0354b',
        display: 'flex',
        alignItems: 'center',
        marginRight: 'auto',
        borderBottom: '3px solid #e0354b'
    },

    img: {
        width: '200px',
        height: '200px',
    }
})

export default Header