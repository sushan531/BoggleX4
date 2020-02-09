import React, {Component} from 'react'
import "./Stage.css"
import TileRow, {TableData, UserInput} from "../Common/Tile/Tile";
import Button from "../Common/Button";

// The boggle4x4 tile contains 4 rows of tiles each tile is of 4 column
class BoggleTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {"row": ['A', 'G', 'H', 'E'], "id": 0},
                {"row": ['A', 'G', 'H', 'E'], "id": 1},
                {"row": ['A', 'G', 'H', 'E'], "id": 2},
                {"row": ['A', 'G', 'H', 'E'], "id": 3},
            ],
            description: "4x4"
        };
    }

    render() {
        return (
            this.state.rows.map((r) => (
                <TileRow
                    row={r.row}
                    key={r.id}
                />
            ))
        );
    }
}

// All the inputs entered by the user to be displayed
class InputList extends Component {

    render() {
        const {list} = this.props;
        console.log(list)
        const userInputs = list.map((value) => (
            <UserInput value={value}/>
        ));
        return (
            <div>
            {userInputs}
            </div>
        );
    }
}

// The stage component
class Stage extends Component {
    constructor() {
        super();
        this.state = {
            inputDataList: ["asdfasdf", "asdfgasd", "ASdf"],
            temp: "asdasd"
        };
    }

    handleChange = (e) => {
        const {name} = e.target;
        this.setState(this.state.temp = name); // TODO this is wrong, how to right it?
        console.log(this.state.temp)
    };

    updateList = (event) => {
        event.preventDefault();
        this.setState({submitted:true});
        this.state.inputDataList.push(this.state.temp); // TODO append the temp to the list, How to?
        console.log(this.state.inputDataList)

    };

    render() {
        return (
            <div className="center">
                <div className="center">
                    <table className="center">
                        <tbody>
                        <BoggleTile/>
                        </tbody>
                    </table>
                </div>
                <form>
                    <div>
                        <input
                            type="text"
                            word="word"
                            placeholder="Enter the word you find"
                            onChange={this.handleChange}
                        />
                        &nbsp;&nbsp;
                        <Button handleSubmit={this.updateList} label="submit"/>
                    </div>
                </form>
                {/* todo show the entered list of words below.*/}
                {/* todo show a time (find code online)*/}
                <InputList list={this.state.inputDataList}/>

            </div>
        )
    }
}


export default Stage