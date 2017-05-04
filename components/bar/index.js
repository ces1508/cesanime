import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {Actions} from 'react-native-router-flux'


export default class Bar extends Component {

  render () {
    return (
      <View style = {[styles.main, {backgroundColor: this.props.backgroundColor || 'green'}]}>
        <View style = {styles.icon}>
          <Icon.Button
            onPress = {this.props.handleClick}
            name = {this.props.icon}
            size = {30}
            backgroundColor = "rgba(0, 0, 0, 0)"
            style = {{padding: 5, paddingLeft: 15}}
          />
        </View>
        <View style = {styles.containerTitle}>
          <Text style = {styles.text}>
            {this.props.title}
          </Text>
        </View>
      </View>
    )
  }
}


const  styles = new StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 55,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0
  },
  color: {
    backgroundColor: 'green'
  },
  icon: {
    paddingLeft: 10,
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -25,
  },
  text: {
    color: "white",
    fontSize: 16
  }
})
