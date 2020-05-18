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

class Card extends Component {
  render() {
    return (
      <View style={Women.container14}>
        <View style={Women.container15}>
          <ImageBackground
            source={this.props.coverpic}
            style={{
              flex: 1,
            }}
            resizeMode="stretch"
          />
        </View>
        <View style={Women.container16}>
          <View style={Women.container18}>
            <Text style={Women.textstyle3}>{this.props.text1}</Text>
            <Text style={Women.textstyle4}>{this.props.text2}</Text>
          </View>
          <View style={Women.container19}>
            <Image
              source={this.props.star1}
              style={{
                marginRight: 2,
                height: 12,
                width: 13,
                marginTop: 4,
              }}
            />
            <Image
              source={this.props.star2}
              style={{
                marginRight: 2,
                height: 12,
                width: 13,
                marginTop: 4,
              }}
            />
            <Image
              source={this.props.star3}
              style={{
                marginRight: 2,
                height: 12,
                width: 13,
                marginTop: 4,
              }}
            />
            <Image
              source={this.props.star4}
              style={{
                marginRight: 2,
                height: 12,
                width: 13,
                marginTop: 4,
              }}
            />
            <Image
              source={this.props.star5}
              style={{
                marginRight: 2,
                height: 12,
                width: 13,
                marginTop: 4,
              }}
            />
            <Text style={Women.textstyle6}>{this.props.text3}</Text>
          </View>
          <View style={Women.container20}>
            <View style={Women.container21}>
              <Text style={Women.textstyle5}>{this.props.text4}</Text>
            </View>
            <View style={Women.container22}>
              <View style={Women.container17}>
                <Image source={this.props.heart1} style={Women.imagestyle} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Card;
