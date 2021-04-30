import React from "react";
import {Card, CardActionArea, CardMedia, makeStyles} from "@material-ui/core";
import {useStyles} from "../Static/Constants";

function BettingCard(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea onClick={() => props.setBetInput(true)}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.name}
                />
            </CardActionArea>
        </Card>
    )
}

export default BettingCard;