/**
 * Created by Burak Erdem 2019
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import axios from 'axios'

class Map extends React.Component {

    state = {
      markers: []

    };



    componentDidMount() {

        const path = 'https://yakinotopark.com/admin/index.php/service/get_maps?clear=&lang=en&category=';
        axios.get(path).then(response => {
this.setState({markers: response.data});


        }).catch(error => {
           console.log('error -->', error);
        });


        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setTranslucent(false);
        });
    }


    componentWillUnmount() {
        this._navListener.remove();
    }




    render() {
        return (


            <View style={{ flex: 1, backgroundColor: '#fff', width: '100%', height: '100%' }}>

                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 41.090024,
                        longitude: 29.035114,
                        latitudeDelta: 0.342,
                        longitudeDelta: 0.361,
                    }}
                >
                    {this.state.markers.length > 0 && this.state.markers.map(marker => (
                        <Marker
                            image={require('../assets/img/otopark_acik.png')}
                            coordinate={{
                            latitude: parseFloat(marker.markers_lat),
                                longitude: parseFloat(marker.markers_lng)
                            }}
                            title={marker.markers_name}
                            description={marker.markers_desc}
                        />
                    ))}

                </MapView>

            </View>


        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },

});

export default Map;
