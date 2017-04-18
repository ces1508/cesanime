import React, {Component} from 'react'
import {View} from 'react-native'
import Anime from '../components/anime'
import Api from '../api/'
import Capitulos from '../components/listCapitulos/'

import Orientation from 'react-native-orientation'

export default class DetailAnime extends Component {
  constructor () {
    super()
    this.state = {capitulos: []}
    this._getData = this._getData.bind(this)
    this.nrender = 0
  }
  _getData = async () => {
    let capitulos = await Api.getCapitulos()
    this.setState({
      capitulos: capitulos
    })
  }
  componentWillMount() {
    Orientation.lockToPortrait()
    this._getData()
  }
  render () {
    if (this.state.capitulos.length > 0) {
      return(
        <View>
          <Anime data = {this.props.anime} />
          <Capitulos  list = {this.state.capitulos} />
        </View>
      )
    } else {
        return(
          <View>
            <Anime data = {this.props.anime} /></View>
       )
    }
  }
 }
