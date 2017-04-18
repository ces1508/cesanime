import React, {Component} from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
} from  'react-native'

export default class Card extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render() {
    return (
      <View style = {styles.card} ref={component => this._root = component}>
        <View>
          <Image source = {{uri: this.props.thumbnail}} style = {styles.image}/>
        </View>
        <View style = {styles.containerText}>
          <Text style = {styles.textTitle}>{this.props.nombre}</Text>
          <Text style = {styles.text}>Author: {this.props.author}</Text>
          <Text style = {styles.text} >Capitulos: {this.props.cantCapitulos}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  card: {
    padding: 0,
    margin:0,
    height: 150,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 10,
    elevation: 2
  },
  image:{
    width: 150,
    height: 150,
  },
  containerText:{
    flex: 1,
    alignItems: "center",
    paddingTop: 30,

  },
  textTitle: {
    fontSize: 30,
    color: "#000"

  },
  text: {
    fontSize: 18,
    color: "#000"
  }
})