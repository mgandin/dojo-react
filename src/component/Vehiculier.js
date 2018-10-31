import React, { Component } from 'react';
import VersionContainer from '../containers/VersionContainer';
import PuissanceContainer from '../containers/PuissanceContainer'
import CarrosserieContainer from '../containers/CarrosserieContainer'

class Vehiculier extends Component {

    render() {
        return (
            <div className="App">
                <PuissanceContainer/>
                <CarrosserieContainer/>
                <VersionContainer/>
            </div>
        );
    }
}

export default Vehiculier;