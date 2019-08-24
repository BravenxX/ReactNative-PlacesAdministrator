import { CHANGE_COUNTRY_NAME, CHANGE_CITY_NAME, ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes';

const initialState = {
    ciudad: '',
    pais: '',
    lugares: {}
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_CITY_NAME: 
            return{
                ...state,
                ciudad: action.ciudad
            }

        case CHANGE_COUNTRY_NAME: 
            return{
                ...state,
                pais: action.pais
            }

        case 'EDITAR': 
            return{
                ...state,
            }
        default:
            return state;
    }
};

export default reducer
