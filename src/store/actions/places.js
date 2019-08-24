import {CHANGE_COUNTRY_NAME, ADD_PLACE,SELECT_PLACE,DELETE_PLACE, DESELECT_PLACE,CHANGE_CITY_NAME} from './actionTypes';

export const changeCityName= (changeCityName) =>{
    return {
        type: CHANGE_CITY_NAME,
        ciudad: changeCityName
    };
}; 

export const changeCountryName = (changeCountryName) =>{
    return {
        type: CHANGE_COUNTRY_NAME,
        pais: changeCountryName
    };
};
export const addPlace = (placeName) =>{
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
}; 

export const deletePlace = () =>{
    return {
        type: DELETE_PLACE
    }
};


export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    }
}

export const deselectPlace = (key) =>{
    return {
        type: DESELECT_PLACE,
        placeKey: key
    }
}