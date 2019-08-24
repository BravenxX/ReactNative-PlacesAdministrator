import React from 'react';
import { View, TouchableOpacity, TextInput,Text } from 'react-native';
import { connect } from 'react-redux';
import {changeCityName, changeCountryName} from '../store/actions/index';

const SetNewPlace = (props) => {
    return (
        <View style={{borderTopWidth: 2}}>
            <TextInput
                placeholder= 'Ciudad'
                onChangeText= { (text) => props.onChangeCityName(text)}
                value= {props.ciudad}
            />

            <TextInput
                placeholder='País'
                onChangeText = { (text) => props.onChangeCountryName(text)}
                value={props.pais}
           />

            <TouchableOpacity
            >
                <View>
                    <Text style={{color: 'white', fontSize: 20, backgroundColor: 'blue'}}>
                        INGRESAR
                    </Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        ciudad: state.places.ciudad,
        pais: state.places.pais 
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onChangeCityName: (cityName) => dispatch(changeCityName(cityName)),
        onChangeCountryName: (countreName) => dispatch(changeCountryName(countreName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SetNewPlace);
