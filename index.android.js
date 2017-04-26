/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TopAnimes from './views/TopAnimes'
import DetailAnime from './views/DetailAnime'
import ReproductorView from './views/Reproductor'
import {Scene, Router, Actions} from 'react-native-router-flux'
export default class cesanime extends Component {


  render() {
    return <Router>
        <Scene  key = "root">
          <Scene  key = "TopAnime" title = "Top Animes"  component = {TopAnimes}/>
          <Scene key ="Capitulos" component = {DetailAnime} hideNavBar =  {true} />
          <Scene key = "Reproductor" component = {ReproductorView}  hideNavBar =  {true} reset />
        </Scene>
      </Router>
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#E0D8D8"
  }
});

AppRegistry.registerComponent('cesanime', () => cesanime);
