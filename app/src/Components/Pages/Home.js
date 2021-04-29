import React from 'react'
import {Box, Grid, Typography} from "@material-ui/core";
import Header from "../Margins/Header";
import BettingCard from "../Cards/BettingCard";
import Arlo from "../Static/arlo.jpg"

function Home(props) {
    return (
        <>
            <Header/>
            <Box minHeight={400} display={"flex"} flexDirection={"column"} bgcolor={"primary.main"}>
                <HeaderBar/>
            </Box>
            <Box border={1} m={2}>
                <CardFormat {...props} image={Arlo}/>
            </Box>
        </>
    )
}

function CardFormat(props) {
    return (
        <Grid container
              spacing={0}
              align="center"
              justify="center"
              direction="column">
            <Box p={5}>
                <BettingCard {...props} image={props.image}/>
            </Box>
        </Grid>
    )
}

function HeaderBar() {
    return (
        <Grid container direction="column" justify="center">
            <Box p={4}>
                <Typography variant='h2' align='center' >
                    Put Your Money Where Your Vote Is
                </Typography>
            </Box>
            <Box p={4}>
                <Typography variant='h5' align='center'>
                    Please select which candidate you would like to vote for a place your bet.
                </Typography>
            </Box>
        </Grid>
    )
}


export default Home;