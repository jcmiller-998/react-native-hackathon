import React from 'react';
import MapView from 'react-native-maps';

const viewOfMap = () => (
    <MapView        
        style={{flex: 1}}
        annotations={markers}        
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
            <MapView.Marker
                coordinate={{latitude: 45.5227363,
                longitude: -122.6780575}}
                title={'Downtown Portland'}
                description={'Where some choose to live'} 
            />
            <MapView.Marker
                coordinate={{latitude: 45.2125663,
                longitude: -123.2879352}}
                title={'The Boonies'}
                description={'Near where Shuan lives'} 
            />
    </MapView>
);

export default viewOfMap;