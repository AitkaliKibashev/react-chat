import React, {useContext, useState} from 'react'
import {Box, Button, Container, Grid, TextField} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase";

const Login = () => {
    const {auth} = useContext(Context)
    const [value, setValue] = useState('')

    const loginWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
        await auth.signInWithRedirect(provider)
    }

    const createTempAcc = () => {
        localStorage.setItem('name', value)
        window.location.reload()
        setValue('')
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 65}}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Grid style={{width: 400, background: 'lightgray'}} container justifyContent={'center'} alignItems={'center'}>
                    <Box p={5} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Button onClick={loginWithGoogle} variant={'outlined'}>Login with Google</Button>
                        <p style={{
                            margin: '10px 0'
                        }}>Or log in as a temporary user</p>
                        <div className={'temp-user-block'}>
                            <TextField
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                rowsMax={2}
                                variant={'outlined'}
                                color={'secondary'}
                                label="Name"
                                style={{width: '70%'}}
                                size={'small'}
                            />
                            <Button
                                onClick={createTempAcc} variant={'outlined'} color={'secondary'}
                            >Go</Button>
                        </div>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
