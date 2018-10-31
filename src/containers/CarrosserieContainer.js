import Filters from "../component/Filter"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        values: filter(state.selector.vehicules)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateValues: carrosserie => dispatch( { type: "SELECT_CARROSSERIE", carrosserie: carrosserie } )
    }
}

// Visible for testing
export const filter = (vehicules) => [...new Set(vehicules.map(vehicule => vehicule.carrosserie))].sort()

export default connect(mapStateToProps, mapDispatchToProps)(Filters)