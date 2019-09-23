import React, {Component} from 'react';
import AppNavigator from './components/navigators/AppNavigator';
import {createAppContainer} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import store from './store';

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
                <AppContainer/>
            </Provider>
        );
    }
}

export default App;
