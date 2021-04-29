import React, {useState} from 'react'
import {
    Box,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    makeStyles,
    OutlinedInput,
    Typography
} from "@material-ui/core";
import Header from "../Margins/Header";
import BettingCard from "../Cards/BettingCard";
import Arlo from "../Static/arlo.jpg";
import Maizee from "../Static/maizee.jpg";
import Razmataz from "../Static/razzy.jpg";
import Tim from "../Static/tim.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    }
}));

function Home(props) {
    console.log("Home",props)
    const [betInput, setBetInput] = useState(false);
    const [value, setValue] = useState({amount: ''});
    return (
        <>
            <Header {...props}/>
            <Box minHeight={400} display={"flex"} flexDirection={"column"} bgcolor={"primary.main"}>
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
                            <BettingCard {...props} image={Arlo} betInput={betInput} setBetInput={setBetInput}/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3}>
                            <BettingCard {...props} image={Maizee} betInput={betInput} setBetInput={setBetInput}/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3}>
                            <BettingCard {...props} image={Tim} betInput={betInput} setBetInput={setBetInput}/>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3}>
                            <BettingCard {...props} image={Razmataz} betInput={betInput} setBetInput={setBetInput}/>
                        </Box>
                    </Grid>
                </Grid>
                {betInput ? <BetModel {...props} value={value} setValue={setValue}/> : null}
                <Box pl={2}>
                    <Typography variant='h5'>Total Election Value: </Typography>
                </Box>
            </Box>
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

function BetModel(props) {
    const classes = useStyles();
    const handleChange = (prop) => (event) => {
        props.setValue({ ...props.value, [prop]: event.target.value });
    };

    return (
        <div className={classes.root}>
            <Grid container
                  spacing={3}
                  justify="center"
            >
                <Box pt={2} pb={4}>
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Bet Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={props.value.amount}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">Ξ</InputAdornment>}
                            labelWidth={83}
                        />
                    </FormControl>
                </Box>
            </Grid>
        </div>
    )
}


export default Home;