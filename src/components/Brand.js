import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {CheckBox, Avatar} from 'react-native-elements';

import {Brand} from '../styles/Brand';
class Brandc extends Component {
  render() {
    return (
      <View style={Brand.container21}>
        <View style={Brand.container22}>
          <Text style={Brand.textstyle5}>{this.props.name}</Text>
        </View>
        <View style={Brand.container23}>
          <Image source={require('../assets/images/check.png')} />
        </View>
      </View>
    );
  }
}

export default Brandc;
