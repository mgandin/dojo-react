import Version from '../component/Version'
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        vehicules: filter(state.selector.vehicules, state.selector.selectedPuissance),
        puissance: state.selector.selectedPuissance
    }
}

// Visible for testing
export const filter = (vehicules, puissance) => puissance
    ? vehicules.filter(vehicule => vehicule.puissance === puissance)
    : vehicules

export default connect(mapStateToProps)(Version)