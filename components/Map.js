/**
 * Created by Burak Erdem 2019
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {connect} from 'react-redux';
import {getAllParkingPlaces} from '../actions/parkingPlaces';

class Map extends React.Component {

    state = {
        markers: [],

    };

    componentDidMount() {

        this.props.getAllParkingPlaces();

        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setTranslucent(false);
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    render() {
        const {parkingPlaces} = this.props;

        return (

            <View style={{flex: 1, backgroundColor: '#fff', width: '100%', height: '100%'}}>

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
                    {parkingPlaces.length > 0 && parkingPlaces.map(marker => (
                        <Marker
                            image={require('../assets/img/otopark_acik.png')}
                            coordinate={{
                                latitude: parseFloat(marker.markers_lat),
                                longitude: parseFloat(marker.markers_lng),
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

const mapStateToProps = state => {
    return {
        parkingPlaces: state.parkingPlaces,
    };
};

export default connect(mapStateToProps, {getAllParkingPlaces})(Map);
