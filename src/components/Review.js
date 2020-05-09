import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Rate} from '../styles/Rate';
import {Avatar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
class Review extends Component {
  render() {
    return (
      <View style={Rate.container21}>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={{position: 'absolute', top: -12, left: -12}}
        />
        <View style={Rate.container22}>
          <Text style={Rate.texstyle7}>{this.props.name}</Text>
        </View>
        <View style={Rate.container23}>
          <View
            style={{
              flex: 1,

              marginLeft: 24,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image source={this.props.star1} style={Rate.imagestyle} />
            <Image source={this.props.star2} style={Rate.imagestyle} />
            <Image source={this.props.star3} style={Rate.imagestyle} />
            <Image source={this.props.star4} style={Rate.imagestyle} />
            <Image source={this.props.star5} style={Rate.imagestyle} />
          </View>
          <View
            style={{
              flex: 1,

              marginRight: 20,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={Rate.texstyle8}>{this.props.date}</Text>
          </View>
        </View>
        <View style={Rate.container24}>
          <Text style={Rate.texstyle9}>{this.props.review}</Text>
        </View>
        <View style={Rate.container25}>
          <Text style={Rate.texstyle10}>Helpful</Text>
          <Image source={require('../assets/images/thumb.png')} />
        </View>
      </View>
    );
  }
}
export default Review;
