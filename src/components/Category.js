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
import {Sfile} from '../styles/Sfile';

class Category extends Component {
  render() {
    return (
      <View style={Sfile.container15}>
        <ImageBackground
          source={this.props.imageuri}
          resizeMode="stretch"
          style={{flex: 1}}>
          <View style={Sfile.container16}>
            <Text style={Sfile.container17}>New</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Category;
