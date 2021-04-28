import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {SnackbarProvider, useSnackbar} from 'notistack';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";

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

const LoadApp = () =>
{
    const {enqueueSnackbar} = useSnackbar();
    const produceSnackBar = (message, variant = "error") => enqueueSnackbar(message, {variant: variant});

    return (
        <BrowserRouter>
            <Router produceSnackBar={produceSnackBar}/>
        </BrowserRouter>
    );
};


function App(props) {
    const theme = createMuiTheme({ palette: {
            primary: {main: '#488DB7' },
            secondary: {main: "#B77248"}}});


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <SnackbarProvider maxSnack={3} preventDuplicate>
                <LoadApp/>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;