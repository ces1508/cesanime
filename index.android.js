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
  View
} from 'react-native';

import VideoPlayer  from 'react-native-video-controls'
const video = {
  uri: 'https://ph2dqd.oloadcdn.net/dl/l/zP48rQXdhIlWmMNs/9jUXkY9TQpQ/shiv500h.mp4?mime=true',
  name: 'last video',
  'capt': 500,
  anime: 'naruto shippude',
  thumbnail: "http://file.vforum.vn/hinh/2014/12/naruto-105.jpg"
}
export default class cesanime extends Component {


  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer
        source = {{ uri: video.uri}}
        thumbnail = {{uri: video.thumbnail}}
        title = "naruto ultimo capitulo"
        volume={ 1 }
        // style = {styles.video}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }, video: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 200
  }
});

AppRegistry.registerComponent('cesanime', () => cesanime);
