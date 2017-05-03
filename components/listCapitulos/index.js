import React, {Component} from 'react'
import {
  View,
  ListView,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native'

import {Actions} from 'react-native-router-flux'

import Item from './item'
export default class ListCapitulos extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
    this.state = {
      dataSource : ds.cloneWithRows(this.props.list)
    }
    this._handleClick = this._handleClick.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.list !== this.props.list) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.list)})
    }
  }

  _handleClick(data) {
    let {anime} = this.props
    Actions.Reproductor({capitulo: data, anime: anime})
  }

  render (){
      return(
        <View style = {styles.main}>
          <ListView
            style = {styles.list}
            enableEmptySections={true}
            dataSource = {this.state.dataSource}
            renderRow = {(data) => (
              <TouchableOpacity onPress =  {() => { this._handleClick(data) }} >
                <Item  capitulo = {data}/>
              </TouchableOpacity>
            )}
          />
        </View>
      )

  }
}

const styles = new StyleSheet.create({
  main: {
    marginTop: 240,

  },
  list: {
    margin: 20,
    marginBottom: 0,
    elevation: 2,
    backgroundColor: "white"
  },
})