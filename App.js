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

import Router from './src/screens/Router';

export default class extends React.Component{
  render(){
    return <SafeAreaView>
      <Router />
    </SafeAreaView>
  }
}
