import vehicules from '../mock/mockVehiculier'
const initialState = {
    vehicules: vehicules,
    selectedPuissance: 4
}

const selector = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default selector