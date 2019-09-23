/**
 * Created by Burak Erdem 2019
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class List extends React.Component {



    render() {
        return (
           <View style={styles.container}>
               <Text>Liste</Text>
           </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

});

export default List;
