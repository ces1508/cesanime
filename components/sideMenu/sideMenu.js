import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'

import Icons from 'react-native-vector-icons/MaterialIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import categories from '../../categories.json'
export default class SideMenu extends Component {
  constructor (props) {
    super(props)
  }

  renderList () {
    return categories.map( (item) => {
      return (
        <View style = {styles.category} key = {item.name}>
          <View style = {{flexDirection: 'row'}}>
            <IonIcons name = "logo-buffer" size = {20} color = "black"/>
            <Text style = {styles.titleCategory}> {item.name} </Text>
          </View>
          <Icons name = "keyboard-arrow-right" size = {30} color = 'black' />
        </View>
      )
    })
  }
  render () {
    return (
      <ScrollView style = {styles.main}>
        <View>
          <Image
            source = {{uri: 'http://files.alejandro10.webnode.es/200000001-c6f01c76bb/animeweb.png'}}
            style = {{ height: 130, padding: 0, margin: 0}}
          />
        </View>
        <View style = {styles.options}>
          <Icons.Button name = "search" size = {30} backgroundColor = 'transparent' color = 'black' iconStyle = {styles.icon}>
            Buscar
          </Icons.Button>
          <Icons.Button name = "view-list" size = {30} backgroundColor = 'transparent' color = 'black' iconStyle = {styles.icon}>
            Ver Todos
          </Icons.Button>
          <Icons.Button name = "card-giftcard" size = {30} backgroundColor = 'transparent' color = 'black' iconStyle = {styles.icon}>
            Donar
          </Icons.Button>
        </View>
        <View>
          <Text style = {styles.textCategories}> Todas Las  Categorias </Text>
          {this.renderList()}
        </View>
      </ScrollView>
    )
  }
}

const styles = new StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white"
  },
  options: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#A4A4A4'
  },
  icon: {
    marginRight: 15,
  },
  textCategories:{
    fontSize: 14,
    margin: 10,
    color: '#848484'
  },
  categories: {
    backgroundColor: 'green'
  },
  category: {
    flex:1,
    height: 40,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  titleCategory: {
    color: 'black',
    paddingLeft: 10
  }
})