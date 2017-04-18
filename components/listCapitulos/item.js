import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import Icons from 'react-native-vector-icons/Ionicons'
export default class Capitulo extends Component {

  constructor (props) {
    super(props)
  }
  render() {
    let capitulo = this.props.capitulo
    return(
      <View style = {styles.main}>
        <Text style = {styles.text}>
          {capitulo.id} - Episodio
         </Text>
       <Icons style = {styles.iconPlay} name = "md-play" color = "#B70D00" size={20} />
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  main: {
    flex:1,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  text: {
    fontSize: 20,
  },
  iconPlay: {
    marginRight: 20
  }
})