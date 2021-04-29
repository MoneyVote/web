import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {SnackbarProvider, useSnackbar} from 'notistack';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import initBlockchain from "./Components/Utils/initBlockchain";


import Home from '../src/Components/Pages/Home'


const Router = (props) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home {...props}/>
            </Route>
        </Switch>
    )
}

// function initBC = async () =>

const LoadApp = (props) =>
{
    const {enqueueSnackbar} = useSnackbar();
    const produceSnackBar = (message, variant = "error") => enqueueSnackbar(message, {variant: variant});



    return (
        <BrowserRouter>
            <Router {...props} produceSnackBar={produceSnackBar}/>
        </BrowserRouter>
    );
};


function App(props) {

    const theme = createMuiTheme({ palette: {
            primary: {main: '#488DB7' },
            secondary: {main: "#B77248"}}});


    let [MVInfo, setMVInfo] = useState(null)

    useEffect(()=> {
        let MVdata = Promise.resolve(initBlockchain())
            .then(function (result){
                console.log("result",result.userAddress);
                setMVInfo(result);
    })}, []);

    console.log("MVINFO",MVInfo)



    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <SnackbarProvider maxSnack={3} preventDuplicate>
                <LoadApp MVInfo={MVInfo}/>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;