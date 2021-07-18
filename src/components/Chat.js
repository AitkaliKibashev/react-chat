import React, {useContext, useState} from 'react'
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core"
import '../App.css'
import {Context, TempUserContext} from "../index"
import firebase from "firebase"
import {useCollectionData} from "react-firebase-hooks/firestore"
import Loader from "./Loader"
import {useAuthState} from "react-firebase-hooks/auth"
import {NavLink, withRouter} from "react-router-dom"

const Chat = ({match}) => {
    const [messageValue, setMessageValue] = useState('')
    const [roomValue, setRoomValue] = useState('')
    const {auth, firestore} = useContext(Context)
    const tempUserState = useContext(TempUserContext)
    const [googleUser] = useAuthState(auth)
    const user = googleUser ? googleUser : tempUserState.user
    const roomId = match.params.roomId

    const [messages] = useCollectionData(firestore.collection('messages').orderBy('createdAt'))
    const [rooms, loading] = useCollectionData(firestore.collection('rooms').orderBy('createdAt'))

    const sendMessage = () => {
        const uid = user.uid
        const displayName = user.displayName
        const photoURL = user.photoURL

        firestore.collection('messages').add({
            roomId,
            uid,
            displayName,
            photoURL,
            text: messageValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessageValue('')
    }

    const createRoom = () => {
        firestore.collection('rooms').add({
            id: Math.floor(Math.random()*1000),
            uid: user.uid,
            name: roomValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setRoomValue('')
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <h1 style={{marginTop: 10}}>Welcome to the my fucking CHAT</h1>
            <div className={'chat-row'}>
                <div style={{flex: 1}} className={'chat-row__chat-list'}>
                    <h1>Rooms</h1>
                    <div style={{flex: 1}}>
                        {rooms ? rooms.map(r =>
                            <NavLink style={{textDecoration: 'none'}} to={'/chat/' + r.id}>
                                <p className={'chat-row__chat-list__item'}>{r.name}</p>
                            </NavLink>
                        ) : null}
                    </div>
                    <div className={'chat-row__chat-list__footer'}>
                        <TextField
                            value={roomValue}
                            onChange={(e) => setRoomValue(e.target.value)}
                            rowsMax={2}
                            variant={'outlined'}
                            color={'secondary'}
                            label="Room name"
                            style={{width: '65%'}}
                        />
                        <Button onClick={createRoom} variant={'outlined'} color={'secondary'}>Create</Button>
                    </div>
                </div>
                <div className={'chat-row__chat-window'}>
                    <div className={'chat-row__chat-window__chat'}>
                        {messages ? messages.map(m =>
                            roomId === m.roomId ?
                            <div className={m.uid === user.uid ? 'chat-row__chat-window__user-message-me': 'chat-row__chat-window__user-message-other'}>
                                <Grid container alignItems={'center'}>
                                    <Avatar src={m.photoURL} style={{marginRight: 10}}/>
                                    <p>{m.displayName}</p>
                                </Grid>
                                <p style={{marginTop: 5}}>{m.text}</p>
                            </div> : null
                        ) : null}
                    </div>
                    {roomId ?
                        <div className={'chat-row__chat-window__footer'}>
                            <TextField
                                value={messageValue}
                                onChange={(e) => setMessageValue(e.target.value)}
                                rowsMax={2}
                                variant={'outlined'}
                                label={"Your text"}
                                style={{width: '90%'}}
                            />
                            <Button onClick={sendMessage} variant={'outlined'} color={'secondary'}>Send</Button>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </Container>
    )
}

export default withRouter(Chat)
