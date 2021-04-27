import {Component} from "react";
import BettingCard from "./BettingCard";
import Grid from "@material-ui/core/Grid"
import "../Static/global.scss"

export default class Container extends Component {



    render() {
        return(
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <BettingCard classname="card" />
                    </Grid>
                    <Grid item xs={6}>
                        <BettingCard className="card" />
                    </Grid>
                </Grid>
            </div>

        )
    }

}