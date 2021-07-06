import { Component } from "react";
import Heart from "./heart";

class App extends Component {

    state = {
        beating: false,
    }

    startBeating = () => {
        this.state.beating ? this.setState({beating: false}) : this.setState({beating: true})
    }
    render () {
        return (
            <main>
                <Heart handleClick={this.startBeating} classNameRedHeart={this.state.beating ? "beatingRed" : null} classNameWhiteHeart={this.state.beating ? "beatingWhite" : null}/>
            </main>
        )
    }
}

export default App;