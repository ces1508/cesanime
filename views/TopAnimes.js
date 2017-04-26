import React, {Component} from 'react'
import List from '../components/list'
import Api from '../api/'
import {View, Text} from 'react-native'
export default class TopAnimes extends Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
    this._getData = this._getData.bind(this)
  }

  componentWillMount() {
    this._getData()
  }
  async _getData () {
    let animes = await Api.topAnimes()
    this.setState({
      data: animes
    })
  }
  render () {
    let animes = this.state.data
    return (
      <List  list = {animes}/>
    )
  }
}