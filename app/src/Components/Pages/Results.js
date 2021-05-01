import React from 'react';
import Header from "../Margins/Header";
import {Box, Typography, Grid} from "@material-ui/core";
import HeaderBar from "../Components/HeaderBar";
import Arlo from "../Static/Images/arlo.jpg";
import BettingCard from "../Components/BettingCard";

function Result(props) {
    return (
        <>
            <Header {...props}/>
            <Box minHeight={225} display={"flex"} flexDirection={"column"} bgcolor={"primary.main"}>
                <HeaderBar/>
            </Box>
            <Box border={1} m={5}>
                <Box pt={2} pl={2}>
                    <Typography variant='h4'> Cutest Pet </Typography>
                </Box>
                <Box>
                    <Grid item xs={3}>
                        <Box pb={3} pt={3} pl={5} ml={5}>
                            <Typography variant='h5'>The winner is . . .</Typography>
                            <BettingCard {...props} image={Arlo} name='arlo' setCandidateSelected={props.setCandidateSelected}/>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Result;