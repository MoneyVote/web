
import {Component} from "react";


import Header from "./Components/Margins/Header"
import Footer from "./Components/Margins/Footer"
import Container from "./Components/Cards/Container";


export default class App extends Component {
  render() {
    return (
        <div >
            <Header />
            some things
            <Container />
            <Footer />
        </div>
    );
  }
}
