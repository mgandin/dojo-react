import Filters from "../component/Filter"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        puissances: filter(state.selector.vehicules)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateValues: puissance => dispatch( { type: "SELECT_PUISSANCE", puissance: parseInt(puissance) } )
    }
}

// Visible for testing
export const filter = (vehicules) => [...new Set(vehicules.map(vehicule => vehicule.puissance))].sort()

export default connect(mapStateToProps, mapDispatchToProps)(Filters)