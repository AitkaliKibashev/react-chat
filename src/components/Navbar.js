import React, {useContext} from 'react'
import {AppBar, Button, Grid, Toolbar, Typography} from "@material-ui/core"
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    {user ? 'Chat' : 'Home'}
                </Typography>
                <Grid container justifyContent={'flex-end'}>
                    {user ?
                        <NavLink to={LOGIN_ROUTE} style={{textDecoration: 'none'}}>
                            <Button onClick={async () => await auth.signOut() } variant={'contained'} color={'secondary'}>
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
