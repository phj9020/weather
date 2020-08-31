import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default class extends React.Component {
  state = {
    isLoading: true,
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords :{latitude, longitude}} = await Location.getCurrentPositionAsync();
      // Send to API and get Weather 
      this.setState({isLoading : false});
    }catch(error){
      Alert.alert("Cant find you", "so sad")
      }
    };
    
    
  componentDidMount() {
    this.getLocation();
  };
  render() {
    const {isLoading} = this.state;
    return isLoading ? <Loading /> : null;
  }
}
