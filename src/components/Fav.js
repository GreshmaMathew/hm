import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Favorite} from '../styles/Favorite';

class Fav extends Component {
  render() {
    return (
      <View style={Favorite.container6}>
        <View style={Favorite.container4}>
          <ImageBackground
            source={this.props.imageurl}
            style={{
              flex: 1,
            }}
            resizeMode="stretch"
          />
        </View>
        <View style={Favorite.container5}>
          <View style={Favorite.container14}>
            <View style={Favorite.container18}>
              <Text style={Favorite.textstyle3}>{this.props.text1}</Text>
            </View>
            <View style={Favorite.container19}>
              <TouchableOpacity>
                <Image source={require('../assets/images/cross.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Favorite.container15}>
            <Text style={Favorite.textstyle4}>{this.props.text2}</Text>
          </View>

          <View style={Favorite.container16}>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={Favorite.textstyle3}>{this.props.text3} </Text>
              <Text style={Favorite.textstyle5}>{this.props.text4}</Text>
            </View>
            <View
              style={{
                flex: 3,

                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={Favorite.textstyle3}>{this.props.text5} </Text>
              <Text style={Favorite.textstyle5}>{this.props.text6}</Text>
            </View>
          </View>
          <View style={Favorite.container17}>
            <View
              style={{
                flex: 1,

                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={Favorite.textstyle4}>{this.props.text7}</Text>
            </View>
            <View
              style={{
                flex: 3,

                flexDirection: 'row',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image source={this.props.star1} style={{marginRight: 3}} />
              <Image source={this.props.star2} style={{marginRight: 3}} />
              <Image source={this.props.star3} style={{marginRight: 3}} />
              <Image source={this.props.star4} style={{marginRight: 3}} />
              <Image source={this.props.star5} style={{marginRight: 4}} />
              <Text style={Favorite.textstyle6}>{this.props.text8}</Text>
              <View style={{flex: 1}}>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 36,
                      width: 36,
                      backgroundColor: '#DB3022',
                      borderRadius: 18,
                      alignSelf: 'flex-end',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 30,
                    }}>
                    <Image source={require('../assets/images/bag_4.png')} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Fav;
