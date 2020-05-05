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
import {Women} from '../styles/Women';

class Search extends Component {
  render() {
    return (
      <View style={Women.container8}>
        <Text style={Women.textstyle1}>{this.props.dress}</Text>
      </View>
    );
  }
}
export default Search;
