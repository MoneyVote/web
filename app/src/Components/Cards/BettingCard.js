import React from "react";
import {Box, CardMedia} from "@material-ui/core";

function BettingCard(props) {
    return (
        <>
            <Box style={{position: "relative"}}>
                <Box width={275} height={350} >
                    <CardMedia image={props.img}
                               style={{height:  350, width:'100%'}} />
                </Box>
            </Box>
            )
        </>
    )
}

export default BettingCard;