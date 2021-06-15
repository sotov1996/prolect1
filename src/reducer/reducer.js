export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'set_name':
            return {
                ...state,
                ...action.payload
            }
        case 'click':
            return {
                ...state,
                click: action.payload
            }
        default:
            return state;
    }
}