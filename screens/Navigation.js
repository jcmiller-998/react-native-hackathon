//import React from 'react';
import ViewOfMap from '../components/ViewOfMap';
import MapView from 'react-native-maps';
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";
import DisplayPosition from '../screens/DisplayPosition';

class Navigation extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        latitude: null,
        longitude: null,
        error:null,
      };
    }
  
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
         (position) => {
           this.setState({
             latitude: position.coords.latitude,
             longitude: position.coords.longitude,
             error: null,
           });
         },
         (error) => this.setState({ error: error.message }),
         { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
       );
     }
  
    
  
    render() {
      return ( 
       // <View>
       this.state.latitude && this.state.longitude ?
            <MapView        
              style={{flex: 1}} 
              region={{ 
                  latitude: 45.5312571, 
                  longitude: -122.75,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.25        
              }} 
              showsUserLocation={true}
            >
              <MapView.Marker
                  coordinate={{latitude: this.state.latitude,
                  longitude: this.state.longitude}}
                  title={'Nike HQ'}
                  description={'Workplace'} 
              />
              <MapView.Marker
                coordinate={{latitude: 45.5227363,
                longitude: -122.6780575}}
                title={'Downtown Portland'}
                description={'Where some choose to live'} 
              />
            </MapView>
            :<View></View>
          

      )}
  }
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

  export default Navigation;