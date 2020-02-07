import React, {Component} from "react";
import "./Tile.css";

export class TileRow extends Component{
    render() {
        const { row } = this.props;
        return(
            <div>
                <button>{row[0]}</button>
                <button>{row[1]}</button>
                <button>{row[2]}</button>
                <button>{row[3]}</button>
            </div>
        )
    }
}
export default TileRow;
