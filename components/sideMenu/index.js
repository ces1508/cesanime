import React, {Component} from 'react'
import Drawer from 'react-native-drawer'
import SideMenu from './sideMenu'
import {Actions, DefaultRenderer} from 'react-native-router-flux'

export default class NavigationDrawer extends Component {

  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        ref = "navigation"
        open = {state.open}
        onOpen = { () => Actions.refresh({key: state.key, open: true}) }
        onClose = { () => Actions.refresh({key: state.key, open: false}) }
        type = "displace"
        content = {<SideMenu />}
        openDrawerOffset = {0.21}
        tapToClose={true}
        panCloseMask = {0.3}
        negotiatePan = {false}
        tweenHandler = { (ratio) => ({ main: {opacity: Math.max(0.54, 1 - ratio)} } )}
      >
       <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate}/>
      </Drawer>
    )
  }
}