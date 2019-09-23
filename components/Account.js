/**
 * Created by Burak Erdem 2019
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

class Account extends React.Component {

    render() {
        return (

            <ScrollView>
                <View>
                    <Text>Hesap</Text>

                </View>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

});

export default Account;
