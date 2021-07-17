import React, {useContext} from 'react'
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase";

const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithRedirect(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 65}}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Grid style={{width: 400, background: 'lightgray'}} container justifyContent={'center'} alignItems={'center'}>
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>Login with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
