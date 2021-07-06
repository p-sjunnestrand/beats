import { Component } from "react";

class Heart extends Component {
    render () {
        return (
            <div onClick={this.props.handleClick()}>
                <div id="heart" className={this.props.classNameRedHeart}></div>
                <div id="heartBackground" className={this.props.classNameWhiteHeart}></div>
            </div>
        )
    }
}

export default Heart;