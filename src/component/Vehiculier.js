import React, { Component } from 'react';
import VersionContainer from '../containers/VersionContainer';
import FilterContainer from '../containers/FilterContainer'

class Vehiculier extends Component {

    render() {
        return (
            <div className="App">
                <FilterContainer/>
                <VersionContainer/>
            </div>
        );
    }
}

export default Vehiculier;