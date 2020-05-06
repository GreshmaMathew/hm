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
import {Collection} from '../styles/Collection';

class Sale extends Component {
  render() {
    return (
      <View style={Collection.container10}>
        <View style={Collection.container11}>
          <ImageBackground
            source={this.props.imageuri}
            style={{
              height: 170,
              width: 150,
              borderBottomRightRadius: 24,
            }}
            resizeMode="stretch">
            <View style={Collection.container12}>
              <Text style={Collection.textstyle4}>{this.props.text1}</Text>
            </View>
            <View style={Collection.container13}>
              <Image
                source={this.props.heart}
                style={{height: 12, width: 13.08, alignSelf: 'center'}}
              />
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
            <Text style={Collection.textstyle5}>{this.props.rate}</Text>
          </View>
        </View>
        <View style={{height: 60, width: 150}}>
          <Text style={Collection.textstyle6}>{this.props.text2}</Text>
          <Text style={Collection.textstyle7}>{this.props.text3}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={Collection.textstyle8}>{this.props.text4}</Text>
            <Text style={Collection.textstyle9}>{this.props.text5}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Sale;
