import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import SetNewPlace from './src/components/SetNewPlace';
import {ShowPlaces} from './src/components/ShowPlaces';

import { connect } from 'react-redux';
import {changeCityName} from './src/store/actions/index';

const App = (props) => {
  console.log(props);
  return (
    <ScrollView style={styles.container}>
      <Text>
        Place Administrator: {props.ciudad} 
      </Text>
      <View style={{width: '100%', borderTopWidth: 2}}>
        <SetNewPlace />  
      </View>
      <View style={{width: '100%', borderTopWidth: 2}}>
        <ShowPlaces />    
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
      ciudad: state.places.ciudad,
      pais: state.places.pais 
  }
}

const mapDispatchToProps = dispatch =>{
  return {
      onChangeCityName: (cityName) => dispatch(changeCityName(cityName))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
