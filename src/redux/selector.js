import vehicules from '../mock/mockVehiculier'
const initialState = {
    vehicules: vehicules,
}

const selector = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_PUISSANCE":
            return {...state, selectedPuissance: action.puissance}
        default:
            return state
    }
}

export default selector