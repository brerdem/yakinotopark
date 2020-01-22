/**
 * Created by Burak Erdem 2019
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getAllParkingPlaces} from '../actions/parkingPlaces';
import {ListItem} from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';


class List extends React.Component {

    static navigationOptions = {
      headerTitle: 'Otoparklar'
    };

    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
            title={item.markers_name}
            subtitle={item.markers_desc}
            leftAvatar={{ source: { uri: `https://yakinotopark.com/images/timthumb.php?src=admin/upload/ilanlar/${item.markers_logo}&h=77&w=112&zc=1` } }}
            bottomDivider
            chevron
        />
    )

    render() {

        const {parkingPlaces} = this.props;

        return (
           <SafeAreaView style={styles.container}>
               <FlatList
                   keyExtractor={this.keyExtractor}
                   data={parkingPlaces}
                   extraData={parkingPlaces}
                   initialNumToRender={10}
                   maxToRenderPerBatch={15}
                   getItemLayout={(data, index) => (
                       {length: 80, offset: 80 * index, index}
                   )}
                   renderItem={this.renderItem}
               />


           </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

});

const mapStateToProps = state => {
    return {
        parkingPlaces: state.parkingPlaces,
    };
};

export default connect(mapStateToProps)(List);
