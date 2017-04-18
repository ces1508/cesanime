import React, {Component} from 'react'
import {View} from 'react-native'

import Orientation from 'react-native-orientation'

import VideoPlayer from '../components/reproductor/'
export default class Reproductoview extends Component {
  componentDidMount () {
      Orientation.getOrientation((err, orientation) =>  {
        if (err) console.warn('error', err)
        console.warn(orientation)
        // Orientation.lockToLandscape()
      })
  }

  componentWillUnmount() {
    Orientation.lockToPortrait()
  }
  render () {
    return  <VideoPlayer  capitulo = {this.props.capitulo}/>
  }
}