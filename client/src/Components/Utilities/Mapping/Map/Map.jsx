import React from 'react';
import Canvas from '../Canvas/Canvas.jsx';
import Square from './Square.jsx';
import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    displayMap() {
        return Canvas.grid.map((row) =>
            <div className="Row">
                {row.map((square) =>
                    <Square />
                )}
            </div>
        );
    }

    render() {
        return (
            <div className="Map">
                { this.displayMap() }
            </div>
        );
    }
};

export default Map;