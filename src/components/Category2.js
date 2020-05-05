import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Collection2} from '../styles/Collection2';

class Category2 extends Component {
  render() {
    return (
      <View style={Collection2.container10}>
        <View style={Collection2.container11}>
          <ImageBackground
            source={this.props.imageuri}
            style={{
              flex: 1,
              borderBottomRightRadius: 24,
            }}
            resizeMode="stretch">
            <View style={Collection2.container12}>
              <Text style={Collection2.textstyle4}>{this.props.text1}</Text>
            </View>
            <View style={Collection2.container13}>
              <TouchableOpacity>
                <Image
                  source={this.props.heart1}
                  style={{height: 12, width: 13.08, alignSelf: 'center'}}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={this.props.star1}
              style={{
                marginHorizontal: 1,
                marginTop: 9,
                height: 12,
                width: 13,
              }}
            />
            <Image
              source={this.props.star2}
              style={{
                marginHorizontal: 1,
                marginTop: 9,
                height: 12,
                width: 13,
              }}
            />
            <Image
              source={this.props.star3}
              style={{
                marginHorizontal: 1,
                marginTop: 9,
                height: 12,
                width: 13,
              }}
            />
            <Image
              source={this.props.star4}
              style={{
                marginHorizontal: 1,
                marginTop: 9,
                height: 12,
                width: 13,
              }}
            />
            <Image
              source={this.props.star5}
              style={{
                marginHorizontal: 1,
                marginTop: 9,
                height: 12,
                width: 13,
              }}
            />
            <Text style={Collection2.textstyle5}>{this.props.text6}</Text>
          </View>
        </View>
        <View style={{height: 60, width: 150}}>
          <Text style={Collection2.textstyle6}>{this.props.text2}</Text>
          <Text style={Collection2.textstyle7}>{this.props.text3}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={Collection2.textstyle8}>{this.props.text4}</Text>
            <Text style={Collection2.textstyle9}>{this.props.text5}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Category2;
