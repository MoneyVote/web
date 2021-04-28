import React from "react";
import {Box, Card, CardActionArea, CardMedia, makeStyles, Grid} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 350,
    },
});

function BettingCard(props) {
    const classes = useStyles();

    return (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={props.image}
                            title='candidate-image'
                        />
                    </CardActionArea>
                </Card>
    )


    /*return (
        <>
            <Box style={{position: "relative"}}>
                <Box width={275} height={350} >
                    <CardMedia image={props.img}
                               style={{height:  350, width:'100%'}} />
                </Box>
            </Box>
            )
        </>
    )*/
}

export default BettingCard;