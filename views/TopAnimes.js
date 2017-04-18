import React, {Component} from 'react'
import List from '../components/list'
import data from '../dummy.json'
export default class TopAnimes extends Component {
  render () {
    return (
      <List list = {data} />
    )
  }
}