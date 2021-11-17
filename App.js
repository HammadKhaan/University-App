/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import colors from './src/constants/colors';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import UniversityList from './src/screens/UniversityList';
import Description from './src/screens/Description';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          backgroundColor={colors.background}
          barStyle="light-content"
        />

        {/* <Splash /> */}
        {/* <Home /> */}
        {/* <UniversityList /> */}
        {/* <Description /> */}
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
