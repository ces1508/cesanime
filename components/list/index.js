import React, {Component} from 'react'
import {
  ListView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native'
import Card from "../card/"
import {
  Actions
} from 'react-native-router-flux'
import Bar from '../bar'
export default class List extends Component{
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.onPressButton = this.onPressButton.bind(this)
    this.state = {
      dataSource: ds.cloneWithRows(this.props.list)
    }
    this.openMenu = this.openMenu.bind(this)
  }
  onPressButton(anime) {
    Actions.Capitulos({ anime })
  }

  openMenu ()  {
    Actions.refresh({key: 'drawer', open: value => !value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.list)})
    }
  }

  render() {
    return(
      <View style = {styles.container}>
        <Bar title = 'Top Animes'  icon = "md-menu" handleClick = { this.openMenu} backgroundColor = "#FF0000"/>
        <ListView
          style = {styles.main}
          dataSource = {this.state.dataSource}
          enableEmptySections={true}
          renderRow = { data => (
            <TouchableOpacity onPress = { () =>  this.onPressButton(data) }>
              <Card name = {data.name} thumbnail = {data.thumbnail} key = {data.id} author = {data.author} cantEpisodes = {data.cantEpisodes} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#D8D8D8",
    marginTop: 55,
  },
})