import React, {useState} from 'react'
import {Box, FormControl, Grid, InputAdornment, InputLabel, makeStyles, OutlinedInput, Typography} from "@material-ui/core";
import Header from "../Margins/Header";
import BettingCard from "../Components/BettingCard";
import Arlo from "../Static/Images/arlo.jpg";
import Maizee from "../Static/Images/maizee.jpg";
import Razmataz from "../Static/Images/razzy.jpg";
import Tim from "../Static/Images/tim.png";
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import Button from "@material-ui/core/Button";
import {Row} from "@mui-treasury/components/flex";
import {useStyles} from "../Static/Constants";
import BetInputBox from '../Components/BetInputBox';

import CountdownTimer from "../Components/CountdownTimer";

function Home(props) {
    const [betInput, setBetInput] = useState(false);
    const [value, setValue] = useState({amount: ''});
    return (
        <>
            <Header/>
            <Box minHeight={325} display={"flex"} flexDirection={"column"} bgcolor={"primary.main"}>
                <HeaderBar/>
            </Box>
            <Box border={1} m={2}>
                <Box pt={2} pl={2}>
                    <Typography variant='h4'> Cutest Pet </Typography>
                </Box>
                <Grid container
                      spacing={3}
                      justify="center"
                >
                    <Grid item xs={3}>
                        <Box p={3} >
                            <BettingCard {...props} image={Arlo} name='arlo' betInput={betInput} setBetInput={setBetInput}/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3}>
                            <BettingCard {...props} image={Maizee} name='maizee' betInput={betInput} setBetInput={setBetInput}/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3}>
                            <BettingCard {...props} image={Tim} name='tim' betInput={betInput} setBetInput={setBetInput}/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3}>
                            <BettingCard {...props} image={Razmataz} name='razmataz' betInput={betInput} setBetInput={setBetInput}/>
                        </Box>
                    </Grid>
                </Grid>
                {betInput ? <BetInputBox {...props} value={value} setValue={setValue}/> : null}
                <Row>
                    <Box pl={2}>
                        <Typography>Total Election Value: </Typography>
                    </Box>
                    <SubmitButton/>
                </Row>
            </Box>
        </>
    )
}

function HeaderBar() {
    return (
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
        </>

    )
}


function SubmitButton() {
    const classes = useStyles();
    return (
        <>
            <Grid container justify="flex-end">
                <Button
                    variant="contained"
                    style={{backgroundColor: '#488DB7'}}
                    className={classes.button}
                    endIcon={<HowToVoteIcon/>}
                >
                    Submit
                </Button>
            </Grid>
        </>
    )
}


export default Home;