import React, {Component} from 'react'
import {
  ListView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import  data from '../../dummy.json'
import Card from "../card/"
import {Actions} from 'react-native-router-flux'
export default class List extends Component{
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this._onPressButton = this._onPressButton.bind(this)
    this.state = {
      dataSource: ds.cloneWithRows(this.props.list)
    }
  }
  _onPressButton(anime) {
    Actions.Capitulos({anime})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.list)})
    }
  }
  render() {
    return(
      <ListView
        style = {styles.main}
        dataSource = {this.state.dataSource}
        enableEmptySections={true}
        renderRow = { data => (
          <TouchableHighlight onPress = { () =>  this._onPressButton(data) }>
             <Card name = {data.name} thumbnail = {data.thumbnail} key = {data.id} author = {data.author} cantEpisodes = {data.cantEpisodes} />
          </TouchableHighlight>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  main: {
    marginTop: 55,
    backgroundColor: "#D8D8D8"
  }
})