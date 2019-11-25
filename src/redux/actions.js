import { createStore } from 'redux';

const modifyTemperatures = (state = 0, action) => {
    switch (action.type) {
        case 'TEMP1_CHANGED':
            return state;
        default:
            return state;
    }
}

let store = createStore(modifyTemperatures);

export function changeTemp(payload) {
    return { type: 'TEMP1_CHANGED', payload}
}

export default store;