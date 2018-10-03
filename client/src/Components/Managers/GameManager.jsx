import React from 'react';
import Input from '../Utilities/Input/Input.jsx';
import Map from '../Utilities/Mapping/Map/Map.jsx';
import Time from '../Utilities/Time/Time.jsx';
import './Game.css';

class GameManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Screen">
                <Map />
            </div>
        );
    }
};

export default GameManager;