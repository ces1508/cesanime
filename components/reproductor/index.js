import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import Video from 'react-native-video-controls'
import Orientation from 'react-native-orientation'

export default class Reproductor extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount() {
    Orientation.lockToLandscapeRight()
  }

  render() {
    console.warn('props', this.props)
    return(
       <Video
        playInBackground = {false}
        repeat = {true}
        source = { {uri: "https://1llr43.oloadcdn.net/dl/l/AuSVT9b9aanUBAcP/_eRiOTUxTdQ/Aka3.mp4?mime=true"} }
        title = {this.props.capitulo.title}
        navigator={ this.props.navigator }
        resizeMode={ 'contain' }
        seekColor={ '#B70D00' }
       />
    )
  }
}
const styles = new StyleSheet.create({
})