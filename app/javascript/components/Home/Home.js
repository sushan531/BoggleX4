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

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    updatePlayerName = (event) => {
        event.preventDefault();
        this.setState({submitted: true});
        const {userName, boardSize} = this.state;
        console.log("The username is " + userName + ". The size of the board is  " + boardSize)
        // todo now submit the data to the backend and get a matrix 4x4 boggle game
    };

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
                        <Button handleSubmit={this.updatePlayerName} label="START GAME"/>
                    </div>
                    {/*TODO add instructions on how to play and the details of the game.*/}
                </form>
            </section>
        );
    }

}

export default Home;