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



class DisplayPosition extends Component {
    constructor(props) {
      super(props);
  
    }
    render() {
        return (
          <MapView style={styles.map} initialRegion={{
           latitude:-6.270565,
           longitude:106.759550,
           latitudeDelta: 1,
           longitudeDelta: 1
          }}>
      
          {!!this.props.latitude && !!this.props.longitude && <MapView.Marker
             coordinate={{"latitude":this.props.latitude,"longitude":this.props.longitude}}
             title={"Your Location"}
           />}
    
          </MapView>
        );
      }

}
const styles = StyleSheet.create({
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

  export default DisplayPosition;