import React, {useEffect, useState} from 'react'
import {Box, Grid, Typography} from "@material-ui/core";
import CountdownTimer from "../Utils/CountdownTimer";
import Header from "../Margins/Header";
import Footer from "../Margins/Footer";
import BettingCard from "../Cards/BettingCard";
import Arlo from "../Static/arlo.jpg"

function Home(props) {
    return (
        <>
            <Header/>
            <React.Fragment>
                <Box width={"100vw"} height={"100vh"} style={{scrollBehavior: "smooth"}}>
                    <Box width={"100%"} height={"100%"} style={{}}>
                        <Box minHeight={400} display={"flex"} flexDirection={"column"} bgcolor={"primary.main"}>
                            <HeaderBar/>
                        </Box>
                    </Box>
                    <BettingCard {...props} img={Arlo}/>
                </Box>
            </React.Fragment>
        </>
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