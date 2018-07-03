let initialState = {
    username: '',
    id: '',
    profilePic: ''
}

    const GET_USER = 'GET_USER'

export function getUser(id,username,profilePic){
    return{
        type: GET_USER, 
        payload: {id,username,profilePic}
    }
}



export default function reducer(state=initialState,action){
    switch (action.type) {
        
        case GET_USER:
        const { payload } = action
        return {
            ...state, username: payload.username, id: payload.id, profilePic: payload.profilePic
        }
    
        default:
            return state;
    }
}