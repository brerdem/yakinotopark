import React, {Component} from 'react';
import AppNavigator from './components/navigators/AppNavigator';
import {createAppContainer} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import store from './store';
import SafeAreaView from 'react-native-safe-area-view';

//disable yellows
console.disableYellowBox = true;

const AppContainer = createAppContainer(AppNavigator);

class App extends Component<{}> {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {

        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <SafeAreaView style={{flex:1}} forceInset={{bottom: 'always'}}>
                    <AppContainer/>
                    </SafeAreaView>
                </SafeAreaProvider>
            </Provider>
        );
    }
}

export default App;
