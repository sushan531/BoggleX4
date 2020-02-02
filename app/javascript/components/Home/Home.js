import React, {Component} from 'react'
import "./Home.css"
import Button from "../Common/Button";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            boardSize: 4
        };
    }


    render() {
        return (
            <section>
                <form>
                    <div>Welcome to Boggle Game</div>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            className="form-control input-element"
                            placeholder="Enter your user name"
                            aria-label="userName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Button handleSubmit={this.handleSubmit} label="START GAME"/>
                    </div>
                    # TODO add instructions on how to play and the details of the game.
                </form>
            </section>
        );
    }

}

export default Home;