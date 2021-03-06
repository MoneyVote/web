import React, {useState} from 'react'
import {Box, Grid, Typography} from "@material-ui/core";
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
import Results from './Results'
import HeaderBar from "../Components/HeaderBar";

function Home(props) {
    const [step, setStep] = useState(1);
    const [candidateSelected, setCandidateSelected] = useState(false);
    const [winner, setWinner] = useState(false);

    if (step === 0) {
        return <Betting {...props} step={step} candidateSelected={candidateSelected} setCandidateSelected={setCandidateSelected}/>
    }
    else {
        return <Results {...props} step={step} winner={winner} setCandidateSelected={setCandidateSelected}/>
    }

}

function Betting(props) {
    const [name, setName] = useState();
    return (
        <>
            <Header {...props}/>
            <Box minHeight={400} display={"flex"} flexDirection={"column"} bgcolor={"primary.main"}>
                <HeaderBar {...props} step={props.step}/>
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
                            <BettingCard {...props} image={Arlo} setName={setName} name='arlo' setCandidateSelected={props.setCandidateSelected}/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3}>
                            <BettingCard {...props} image={Maizee} setName={setName} name='maizee' setCandidateSelected={props.setCandidateSelected}/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3}>
                            <BettingCard {...props} image={Tim} setName={setName} name='tim' setCandidateSelected={props.setCandidateSelected}/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3}>
                            <BettingCard {...props} image={Razmataz} setName={setName} name='razmataz' setCandidateSelected={props.setCandidateSelected}/>
                        </Box>
                    </Grid>
                </Grid>
                {props.candidateSelected ?
                    <Grid container
                          justify="center"
                    >
                        <Typography>Bet Amount: </Typography>
                    </Grid>
                    : null
                }
                <Row>
                    <Box pl={2}>
                        <Typography>Total Election Value: </Typography>
                    </Box>
                    <SubmitButton name={name}/>
                </Row>
            </Box>
        </>
    )
}


function SubmitButton(props) {
    const classes = useStyles();
    return (
        <>
            <Grid container justify="flex-end">
                <Button
                    variant="contained"
                    style={{backgroundColor: '#488DB7'}}
                    className={classes.button}
                    endIcon={<HowToVoteIcon/>}
                    onClick={() => sendCandidate(props.name)}
                >
                    Submit
                </Button>
            </Grid>
        </>
    )
}

function sendCandidate(name) {

}


export default Home;