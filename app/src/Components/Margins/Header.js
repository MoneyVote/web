import React from "react";
import Logo from "../Static/logo.png"
import {Box, IconButton, Grid, Typography, Avatar} from "@material-ui/core";

function Header() {
    return (
        <Box p={2}>
            <Grid container justify='space-between' alignItems='center'>
                <Grid item>
                    <IconButton style={{marginLeft: 'auto', backgroundColor: 'transparent'}}>
                        <Box pr={2}>
                            <Typography variant="h6"  style={{color: 'black'}}>
                                MoneyVote
                            </Typography>
                        </Box>
                        <Avatar alt='money-vote logo' src={Logo} variant='rounded'/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}


export default Header;