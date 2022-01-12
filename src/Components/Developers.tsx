import { Container, Grid } from '@mui/material';
import Item from '@mui/material/ListItem';
import React from 'react'
import Cardz2 from "./Cardz2";



function Developers() {
    let Developers: any[]=["Nobel","Abriham","Abenezer","Mikiyas"]
    return (
        <>
        <Container>
            <Grid container spacing={1}>
                {Developers.map(developer =>
                    <Grid item xs={3}>
                    <Item>
                        <Cardz2 username={developer}/>
                    </Item>
                    </Grid>
                )}

                {/* 
                <Grid item xs={3}>
                    <Item>
                    <Cardz2 username="Nobel"/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Cardz2 username="Abriham"/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Cardz2 username="Mikiyas"/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Cardz2 username="Abenezer"/>
                    </Item>
                </Grid> */}
            </Grid>
        </Container>
        </>
    )
}

export default Developers
