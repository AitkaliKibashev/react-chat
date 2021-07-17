import React from 'react'
import {CircularProgress, Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight}}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Grid container justifyContent={'center'} alignItems={'center'}>
                    <CircularProgress />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loader
