import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class SideMenu extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style = {styles.main}>
        <Text> hola desde el menu side </Text>
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "yellow"
  }
})