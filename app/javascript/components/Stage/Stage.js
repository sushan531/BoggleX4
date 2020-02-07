import React, {Component} from 'react'
import "./Stage.css"
import Tile from "../Common/Tile/Tile";

class BoggleTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {"row": ['a', 'g', 'h', 'e'], "id": 0},
                {"row": ['a', 'g', 'h', 'e'], "id": 1},
                {"row": ['a', 'g', 'h', 'e'], "id": 2},
                {"row": ['a', 'g', 'h', 'e'], "id": 3},
            ],
            description: "4x4"
        };
    }

    render() {
        return (
            this.state.rows.map((r) => (
                <Tile
                    row={r.row}
                    key={r.id}
                />
            ))
        );
    }
}

class Stage extends Component {
    render() {
        return (
            <div>
            <BoggleTile/>
            <br/>
            <input/>
                {/* todo show the entered list of words below.*/}
                {/* todo show a time (find code online)*/}
            </div>
        )
    }
}



export default Stage