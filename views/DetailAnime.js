import React, {Component} from 'react'
import {View} from 'react-native'
import Anime from '../components/anime'
import Api from '../api/'
import Capitulos from '../components/listCapitulos/'
import Bar from '../components/bar'
import Orientation from 'react-native-orientation'
import {
  Actions
} from 'react-native-router-flux'
export default class DetailAnime extends Component {
  constructor () {
    super()
    this.state = {capitulos: []}
    this._getData = this._getData.bind(this)
    this.nrender = 0
    this.handleClick = this.handleClick.bind(this)
  }
  _getData = async () => {
    let capitulos = await Api.getCapitulos(this.props.anime.id)
    this.setState({
      capitulos: capitulos
    })
  }

  handleClick () {
    Actions.TopAnime()
  }
  componentDidMount() {
    Orientation.lockToPortrait()
    this._getData()
  }
  render () {
    return(
      <View>
        <Anime data = {this.props.anime} />
        <Bar icon = "ios-arrow-back"   backgroundColor = 'rgba(0, 0, 0, 0.25)' handleClick = {this.handleClick}/>
        <Capitulos  list = {this.state.capitulos} anime = {this.props.anime} />
      </View>
    )
  }
 }
