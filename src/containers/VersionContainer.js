import Version from '../component/Version'
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        vehicules: filter(state.selector.vehicules, state.selector.selectedPuissance, state.selector.selectedCarrosserie),
        puissance: state.selector.selectedPuissance,
        carrosserie: state.selector.selectedCarrosserie
    }
}

// Visible for testing
export const filter = (vehicules, puissance, carrosserie) => vehicules
    .filter(vehicule => puissance ? vehicule.puissance === puissance : vehicule)
    .filter(vehicule => carrosserie ? vehicule.carrosserie === carrosserie : vehicule)

export default connect(mapStateToProps)(Version)