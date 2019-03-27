import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const BACKGROUND_COLOR = '#FFFFFF';
const DISABLED_OPACITY = 0.4;


export default class Controls extends Component {

  render() {
    return (
          <View
            style={[
              styles.buttonsContainerBase,
              styles.buttonsContainerTopRow,
              {
                opacity: this.state.isLoading
                  ? DISABLED_OPACITY
                  : 1.0,
              },
            ]}
          >
            <TouchableHighlight
              underlayColor={BACKGROUND_COLOR}
              style={styles.wrapper}
              onPress={this._onBackPressed}
              disabled={this.state.isLoading}
            >
              <View>
                <MaterialIcons
                  name="fast-rewind"
                  size={40}
                  color="#56D5FA"
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={BACKGROUND_COLOR}
              style={styles.wrapper}
              onPress={this._onPlayPausePressed}
              disabled={this.state.isLoading}
            >
              <View>
                {this.state.isPlaying ? (
                  <MaterialIcons
                    name="pause"
                    size={40}
                    color="#56D5FA"
                  />
                ) : (
                    <MaterialIcons
                      name="play-arrow"
                      size={40}
                      color="#56D5FA"
                    />
                  )}
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={BACKGROUND_COLOR}
              style={styles.wrapper}
              onPress={this._onStopPressed}
              disabled={this.state.isLoading}
            >
              <View>
                <MaterialIcons
                  name="stop"
                  size={40}
                  color="#56D5FA"
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={BACKGROUND_COLOR}
              style={styles.wrapper}
              onPress={this._onForwardPressed}
              disabled={this.state.isLoading}
            >
              <View>
                <MaterialIcons
                  name="fast-forward"
                  size={40}
                  color="#56D5FA"
                />
              </View>
            </TouchableHighlight>
          </View>          
      );
  }
}

const styles = StyleSheet.create({  
  buttonsContainerTopRow: {
    maxHeight: 40,
    minWidth: DEVICE_WIDTH / 2.0,
    maxWidth: DEVICE_WIDTH / 2.0,
  },  
  wrapper:{
    flex: 1,
    alignItems: 'center',
  },
});