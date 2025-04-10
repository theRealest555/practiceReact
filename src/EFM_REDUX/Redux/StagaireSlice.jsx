const initState = [
]

export function Reducer(state = initState, action){
    switch (action.type){
        case 'add-stg':
            return [...state, ...action.payload]
        case 'update-stg':
            return state.map((item)=> item.id === action.payload ? {...item, nom: 'Nouveau Nom'} : item)
        case 'delete-stg':
            return state.filter((item)=> item.id !== action.payload)
        default:
            return state;
    }
}

export function AjouterStagiaire(newData){
    return{
        type: 'add-stg',    
        payload: newData
    }
}

export function modifierStagiaire(newData){
    return{
        type: 'update-stg',
        payload: newData
    }
}

export function SupprimerStagiaire(id){
    return{
        type: 'delete-stg',
        payload: id
    }
}


