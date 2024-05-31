import { View, Text, TextInput ,StyleSheet, Dimensions,Button } from 'react-native'
import React ,{useState}from 'react'
import { EvilIcons } from '@expo/vector-icons';

const WeatherSearch = ({fetchWeatherData}) => {
    const [cityName, setCityName]= useState('');
  return (
    <View style={styles.searchBar}>
      <TextInput 
      placeholder='Type City' value={cityName}
      onChangeText={(text) => setCityName(text)}>
      </TextInput>
      <Button  onPress={() => fetchWeatherData(cityName)} title='Get Weather'></Button>
     
    </View>
  )
}
const styles = StyleSheet.create({
   searchBar:{
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'space-between',
  width:Dimensions.get('screen').width -20,
  borderWidth:1.5,
  paddingVertical:10,
  borderRadius:25,
  marginHorizontal:10,
  paddingHorizontal:10,
  backgroundColor:'lightgray'
   }
  });

export default WeatherSearch