import React, {useContext} from 'react'
import {AppBar, Button, Grid, Toolbar, Typography} from "@material-ui/core"
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context, TempUserContext} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const tempUserState = useContext(TempUserContext)

    const logout = () => {
        if (user) {
            return async () => await auth.signOut()
        }
        localStorage.clear()
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    {user || tempUserState.user.displayName ? 'Chat' : 'Home'}
                </Typography>
                <Grid container justifyContent={'flex-end'}>
                    {user || tempUserState.user.displayName ?
                        <NavLink to={LOGIN_ROUTE} style={{textDecoration: 'none'}}>
                            <Button onClick={logout} variant={'contained'} color={'secondary'}>
                                Logout
                            </Button>
                        </NavLink>
                    :
                        <NavLink to={LOGIN_ROUTE} style={{textDecoration: 'none'}}>
                            <Button variant={'contained'} color={'secondary'}>
                                Login
                            </Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
