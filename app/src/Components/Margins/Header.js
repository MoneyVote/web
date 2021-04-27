import {Component} from "react";
import Logo from "../Static/Logo.png"


export default class Header extends Component {

    render() {
        return(
            <footer>
                <div className="full-width header">
                    <div className="vertical-center">
                        <img className="tco-logo" src={Logo} alt="Money Vote Logo"/>
                        <h1>Money Vote</h1>
                    </div>
                </div>
            </footer>

        )
    }

}