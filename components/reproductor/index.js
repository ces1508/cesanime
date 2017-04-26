import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import Video from 'react-native-video'
import Orientation from 'react-native-orientation'
import Icons from 'react-native-vector-icons/Ionicons'
import {Actions} from 'react-native-router-flux'
import Api from '../../api/'
export default class Reproductor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      muted: false,
      paused: false,
      iconMuted: 'ios-volume-off-outline',
      start: false,
      loaded: false,
      watching: true,
      currentTime: 0,
      duration: 0,
      controlsVisible: false,
      fullScreen: false
    }

    this._startVideo = this._startVideo.bind(this)
    this.onLoad = this.onLoad.bind(this)
    this._renderControls = this._renderControls.bind(this)
    this._playOrPause = this._playOrPause.bind(this)
    this._handleMuted = this._handleMuted.bind(this)
    this._onProgress = this._onProgress.bind(this)
    this.showControls = this.showControls.bind(this)
    this.handleFullScreen = this.handleFullScreen.bind(this)
    this.back = this.back.bind(this)
  }

  _startVideo () {
    this.setState({ start: true})

  }
  _playOrPause () {
    let {paused} = this.state
    this.setState({paused: !paused})
    this.hideControls()
  }

  _handleMuted () {
    let {muted} = this.state
    this.setState({muted: !muted})
  }

  errorVideo (err) {
    console.warn('error', err)
  }
  back () {
    let {anime} = this.props
    this.setState({paused: true})
    Actions.Capitulos( {anime} )
  }
  _onProgress (event) {
    let {duration} = this.state
    // this.setState({currentTime: (event.currentTime / event.)})
  }

  onLoad (event) {
    let {duration} = event
    this.setState({
      loaded: true,
      duration: duration,
      controlsVisible: true
    })
    this.hideControls()
  }

  hideControls () {
    let {controlsVisible}  = this.state
    if (this.controlTimeOut) {
      clearTimeout(this.controlTimeOut)
      this.controlTimeOut = null
    }
    this.controlTimeOut = setTimeout(() => {
      this.setState({controlsVisible: false})
    }, 3000)
  }

  showControls() {
    this.setState({ controlsVisible: true })
    this.hideControls()
  }

  renderBarTitle() {
    let {controlsVisible} = this.state
    let {name} = this.props.capitulo
    let style = controlsVisible ? styles.containerBartitle: {height: 0}
    return (
      <View style = {style} >
        <View style = {styles.titleBar}>
          <Icons.Button  backgroundColor = "rgba(0, 0, 0, 0)" name = "ios-arrow-back-outline" size = {30} onPress = {this.back}/>
          <Text style = {styles.title}> {name} </Text>
        </View>

      </View>
    )
  }

  handleFullScreen() {
    this.setState({ fullScreen: !this.state.fullScreen})
    if (this.state.fullScreen) {
      Orientation.lockToLandscapeRight()
    } else {
      Orientation.lockToPortrait()
    }
    this.hideControls()
  }

  _renderGifLoad () {
    return (
      <View style = {styles.containerGif}>
        <Image style = {styles.gif} source = {require('../../images/load.gif')}/>
      </View>
    )
  }

  _renderControls () {
    let {paused, muted, controlsVisible} = this.state
    let style = controlsVisible ? styles.containerControls: {height: 0}
    return (
      <View style = {style}>
        <View style = {styles.controls}>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Icons.Button size = {30} backgroundColor = "rgba(0, 0, 0, 0)"  color = "#fff" name = {paused ? "ios-play-outline": "ios-pause-outline"} onPress = {this._playOrPause}/>
            <Icons.Button  size = {30} backgroundColor = "rgba(0, 0, 0, 0)" color = "#fff" name = {muted ?"ios-volume-up-outline":"ios-volume-off-outline"} onPress = {this._handleMuted}/>
          </View>
          <Icons.Button  size = {30}  style = {{paddingTop: -7, paddingRight: 0}} backgroundColor = "rgba(0, 0, 0, 0)" color = "#fff" name = "md-expand" onPress = {this.handleFullScreen}/>
        </View>
      </View>
    )
  }
  _video () {
    let {paused, muted} = this.state
    let {video} = this.props.capitulo
    return(
      <View style = {{flex: 1}}>
          <Video
            source = {{uri: "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/2915/8/214575621/739466560.mp4?token=1493247266-0x2215442c24ca56e2391dc875cba34e3724af58a7"}}
            rate={1.0}                              // 0 is paused, 1 is normal.
            volume={1.0}                            // 0 is muted, 1 is normal.
            muted={muted}                           // Mutes the audio entirely.
            paused= {paused}                          // Pauses playback entirely.
            repeat={false}                           // Repeat forever.
            playInBackground={false}                // Audio continues to play when app entering background.
            playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
            style = {styles.video}
            onLoad = {this.onLoad}
            onError = {this.errorVideo}
            resizeMode = {"contain"}
            duration = {1420}
            onProgress={this._onProgress}
            onTimedMetadata={this.onTimedMetadata}
          />
          <TouchableOpacity style={styles.overlayButton} onPress={this.showControls} />
      </View>
    )
  }

  timeOut() {
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 1500)
  }

  _renderVideo() {
    let {paused, muted, loaded} = this.state
    if (loaded) {
      return (
        <View style = {{flex: 1}}>
          {this.renderBarTitle()}
          {this._video()}
          {this._renderControls()}
        </View>
      )
    } else {
      this.timeOut()
      return this._renderGifLoad()
    }
  }
  _renderThumbnail () {
  }

  iconPlay () {
    return(
      <View style = {styles.containerIconPlay}>
        <View style = {styles.startPlay}>
          <Icons.Button  iconStyle = {{paddingLeft: 10}} backgroundColor = "rgba(0, 0, 0, 0)" color= "#fff" name = "ios-play" size = {100}  onPress = {this._startVideo} />
        </View>
      </View>
    )
  }
  _renderContent () {
    let {start, load} = this.state
    if (!start) {
      return this.iconPlay()
    }
    return  this._renderVideo()
  }

  render () {
    return (
      <View style = {styles.container}>
        {this._renderContent()}
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  title: {
    fontSize: 18,
    color: "#fff",
    paddingLeft: 15,
  },
  video: {
    position: 'absolute',
    backgroundColor: 'red',
    flex: 1,
    top:0,
    left:0,
    bottom:0,
    right: 0,
  },
  containerIconPlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  startPlay: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: 'center',
    borderColor: "white",
    paddingLeft: 12

  },
  containerGif: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  },
  gif: {
    width: 90,
    height: 90,
  },
  containerControls: {
    height: 50,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 200,
  },
  controls: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    zIndex: 200,
    bottom: 0,
  },
  controlPlay: {
    marginRight: 15
  },
  overlayButton: {
    flex: 1
  },
  containerBartitle: {
    position: 'absolute',
    height: 50,
    top:0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 200,
  },
  titleBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  hiddeBar: {
    height: 0
  },
  transparente: {
    backgroundColor: "rgba(0, 0, 0, 0)"
  }
})