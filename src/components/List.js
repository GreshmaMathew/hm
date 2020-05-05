import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {Shop} from '../styles/Shop';

class List extends Component {
  render() {
    return (
      <View style={Shop.container9}>
        <Text style={Shop.textstyle4}>{this.props.listitem}</Text>
      </View>
    );
  }
}
export default List;
