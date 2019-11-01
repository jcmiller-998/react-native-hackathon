import React from 'react';
import MapView from 'react-native-maps';

const ViewOfMap = () => (
    <MapView        
        style={{flex: 1}} 
        region={{ 
            latitude: 45.5312571, 
            longitude: -122.75,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.27        
        }} 
        showsUserLocation={true}
    >
            <MapView.Marker
                coordinate={{latitude: 45.5114867,
                longitude: -122.8192334}}
                title={'Nike HQ'}
                description={'Workplace'} 
            />

    </MapView>
);

export default ViewOfMap;