import React, {Component} from 'react'
import {
  View,
  ListView,
  Text,
  StyleSheet,
  Image,
} from 'react-native'
import Api from '../../api/'

import Capitulos from '../listCapitulos/'
export default class AnimeDetail extends Component {

  render () {
    let anime = this.props.data
    return (
      <View style = {styles.container}>
        <View style = {styles.containerImage}>
          <Image source = {{uri: anime.thumbnail}} style = {[styles.image]}>
          <Text style = {styles.animeName}> hola mundo </Text>
          </Image>
        </View>
      </View>
    )
  }
}
const styles = new StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
  },
  image:{
    height: 280,
    position: 'relative',
  },
  animeName: {
    color: "#fff",
    fontSize: 20,
    position: "absolute",
    backgroundColor: 'red'
  },
  containerImage: {
    position: 'relative'
  },
  animeName: {
    color: "white",
    fontSize: 24,
    position: "absolute",
    bottom:20,
    left: 0
  }
})