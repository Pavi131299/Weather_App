import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React , {useState, useEffect} from 'react'
import Constants from 'expo-constants'
import WeatherInfo from './WeatherInfo'
const API_KEYS='4cd61c637406e153a0084eba142d6dbc'



const Weather = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);
      
    // fn to fetch weather
    
    const fetchWeatherData = async (cityName) =>{
        try{
            setLoaded(false);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`);
            if(response.status === 200){
                const data = await response.json();
                setWeatherData(data);
            }
            else{
                setWeatherData(null);
            }
            setLoaded(true);
        
        } catch(error){
            Alert.alert( 'Error' ,error.message);
        }
    
    }
    
    useEffect(() => {
      fetchWeatherData('Madurai');
    }, []);
    
    //not loaded
    if(!loaded){
        <View style={styles.container}>
       <ActivityIndicator size="large" color="red"></ActivityIndicator>
        </View> 
    }
    
    
    return (
        <View style={styles.container}>
          <View style={styles.header}>
    <Text style={styles.headerTitle}> City's Weather </Text>
          </View>
          {weatherData ? (
        <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
      ) : (
        <Text style={styles.errors} >City Not Found / Enter a valid city </Text>
      )}

        {/* <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData}/> */}
        </View>
      )
    }
    
    
    // weather api key --->  4cd61c637406e153a0084eba142d6dbc
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'pink',
          paddingTop: Constants.statusBarHeight,
        },
        header:{
            alignItems:'center',
            backgroundColor:'skyblue',
            height: 80,
            justifyContent:'center'
        },
        headerTitle:{
            fontSize: 29,
            fontWeight:'bold',
            color:'brown'
        },
        errors:{
            margin:80,
            padding:10,
            alignItems:'center',
            fontWeight:'bold',
            color:'red',
            fontSize:30
            
        }
      });
    
      export default Weather