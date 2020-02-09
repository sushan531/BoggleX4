import React, {Component} from "react";
import "./Tile.css";

export class TableData extends Component {
    render() {
        const {value} = this.props;
        return (
            <th className="Tiles">{value}</th>
        );
    }
}

export class UserInput extends Component {
    render() {
        const {value} = this.props;
        return (
            <div>
                <p>{value}</p>
            </div>
        );
    }
}


export class TileRow extends Component {
    render() {
        const {row} = this.props;
        const rowItems = row.map((value) => (
            <TableData value={value}/>
        ));

        return (
            <tr>
                {rowItems}
            </tr>
        )
    }
}

export default TileRow;
