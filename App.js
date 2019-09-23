import React, {Component} from 'react';
import AppNavigator from './components/navigators/AppNavigator';
import {createAppContainer} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

//disable yellows
console.disableYellowBox = true;


const AppContainer = createAppContainer(AppNavigator);

class App extends Component<{}> {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {


    return <AppContainer/>;

  }
}

export default App;
