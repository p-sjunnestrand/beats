import { Component } from "react";
import Heart from "./heart";

class App extends Component {

    state = {
        beating: false,
    }

    render () {
        return (
            <main>
                <Heart />
            </main>
        )
    }
}

export default App;