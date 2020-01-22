import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import colors from '../../resources/colors';
import {take, takeLast} from 'ramda';
import * as Animatable from 'react-native-animatable';
import ScalableImage from 'react-native-scalable-image';
import {dimensions} from '../../resources/styles';


const items = [
    {title: 'Liste', link: 'Home', icon: 'list'},
    {title: 'Ara', link: 'Search', icon: 'search'},
    {title: 'Harita', link: 'Chat', icon: 'map'},
    {title: 'Yardım', link: 'Notification', icon: 'info-circle'},
    {title: 'Hesap', link: 'Account', icon: 'user'},

];


class TabMenu extends React.Component {



    makeComponent = (t, index, navigation) => {
        return (
            <Button key={'button'+index} buttonStyle={{flexDirection: 'column'}} TouchableComponent={TouchableWithoutFeedback} titleStyle={{fontSize: 12, color: navigation.state.index === index ? colors.main.primary : colors.main.secondaryText}} title={t.title} icon={<Icon name={t.icon} type="font-awesome" color={navigation.state.index === index ? colors.main.primary : colors.main.secondaryText} />} type="clear" onPress={() => navigation.navigate(t.link)} />
        )
    };

    oriaPress = () =>  {
        this.parkButton.bounceIn(500);
        this.props.navigation.navigate('Map');
    };



    render() {




        return (

            <View style={styles.footer}>
                <View style={{flex: .4, flexDirection: 'row', justifyContent: 'space-evenly'}}>

                    {
                        take(2, items).map((t, i) => this.makeComponent(t, i, this.props.navigation))
                    }

                </View>
                <View style={{flex: .2, flexDirection: 'row', justifyContent: 'center'}} >
                    <TouchableWithoutFeedback onPress={this.oriaPress} hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
                    <View style={{width:60, height:60, borderRadius: 30, shadowColor: 'black', shadowOffset: {width: 2, height:2}, elevation: 3, backgroundColor: 'white', top: -25, alignItems:'center', justifyContent: 'center'}}>

                            <Animatable.View ref={ref => this.parkButton = ref}>
                                <ScalableImage source={require('../../assets/img/parking.png')} width={62}/>
                            </Animatable.View>

                    </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{flex: .4, flexDirection: 'row', justifyContent: 'space-evenly'}}>

                    {
                        takeLast(2, items).map((t, i) => this.makeComponent(t, i+3, this.props.navigation))
                    }

                </View>



            </View>

        );




    }
}

const styles = StyleSheet.create({
    footer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        height: 50,
        width: dimensions.fullWidth,
        marginBottom: 5
    },

});

export default TabMenu;
