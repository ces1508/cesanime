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
          <Text style = {styles.textTitle}>{this.props.name}</Text>
          <Text style = {styles.text} >Capitulos: {this.props.cantEpisodes}</Text>
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
    paddingTop: 10,
    justifyContent: 'center',


  },
  textTitle: {
    fontSize: 20,
    color: "#000",
    'textAlign': 'center',
    'textAlignVertical': 'center',
    padding: 5,
    paddingTop: 0,
  },
  text: {
    fontSize: 15,
    color: "#000",
  }
})