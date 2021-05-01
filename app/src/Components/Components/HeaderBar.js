import {Box, Grid, Typography} from "@material-ui/core";
import CountdownTimer from "./CountdownTimer";
import React from "react";

function HeaderBar(props) {
    return (
        <>
            {props.step === 0 ?
                <>
                    <Grid container direction="column" justify="center">
                        <Box p={4}>
                            <Typography variant='h2' align='center' >
                                Put Your Money Where Your Vote Is
                            </Typography>
                        </Box>
                        <Box p={4}>
                            <Typography variant='h5' align='center'>
                                Please select which candidate you would like to vote for and place your bet.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box pr={5} pl={5} pt={2}>
                        <CountdownTimer  count={5432} border showTitle size={12} responsive hideDay direction='right'/>
                    </Box>
                </> :
                <Grid container direction="column" justify="center">
                    <Box p={4}>
                        <Typography variant='h2' align='center' >
                            Put Your Money Where Your Vote Is
                        </Typography>
                    </Box>
                    <Box p={4}>
                        <Typography variant='h5' align='center'>
                            The vote has come to an end, you can no longer place your bets.
                            <br/>
                            Thank you for your participation!
                        </Typography>
                    </Box>
                </Grid>
            }
        </>
    )
}

export default HeaderBar;