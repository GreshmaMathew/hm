import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Scr,
} from 'react-native';
import {Street} from '../../../styles/Street';
class streetClothes extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Street.container1}>
        <View style={Street.container2}>
          <View style={Street.container20}>
            <Image
              source={require('../../../assets/images/icon_1.png')}
              style={Street.icon1}
            />
          </View>
          <View style={Street.container21}>
            <Text style={Street.textstyle6}>Categories</Text>
          </View>
          <View style={Street.container22}>
            <Image
              source={require('../../../assets/images/search1.png')}
              style={Street.search}
            />
          </View>
        </View>
        <View style={Street.container3}>
          <View style={Street.container17}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={Street.textstyle4}>Women</Text>
            </View>
            <View
              style={{
                flex: 0.1,
                backgroundColor: '#DB3022',
                height: 3,
                width: 125,
              }}
            />
          </View>
          <View style={Street.container18}>
            <Text style={Street.textstyle5}>Men</Text>
          </View>
          <View style={Street.container19}>
            <Text style={Street.textstyle5}>Kids</Text>
          </View>
        </View>
        <View style={Street.container4}>
          <TouchableOpacity onPress={() => navigate('SHOPFILE')}>
            <Text style={Street.textstyle1}>SUMMER SALES</Text>
            <Text style={Street.textstyle2}>Up to 50% off </Text>
          </TouchableOpacity>
        </View>
        <View style={Street.container5}>
          <View style={Street.container9}>
            <Text style={Street.textstyle3}>New</Text>
          </View>
          <View style={Street.container10}>
            <ImageBackground
              source={require('../../../assets/images/sale1.png')}
              style={{
                flex: 1,
              }}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View style={Street.container6}>
          <View style={Street.container11}>
            <Text style={Street.textstyle3}>Clothes</Text>
          </View>
          <View style={Street.container12}>
            <ImageBackground
              source={require('../../../assets/images/sale2.png')}
              style={{
                flex: 1,
              }}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View style={Street.container7}>
          <View style={Street.container13}>
            <Text style={Street.textstyle3}>Shoes</Text>
          </View>
          <View style={Street.container14}>
            <ImageBackground
              source={require('../../../assets/images/sale3.png')}
              style={{
                flex: 1,
              }}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View style={Street.container8}>
          <View style={Street.container15}>
            <Text style={Street.textstyle3}>Accesories</Text>
          </View>
          <View style={Street.container16}>
            <ImageBackground
              source={require('../../../assets/images/sale4.png')}
              style={{
                flex: 1,
              }}
              resizeMode="stretch"
            />
          </View>
        </View>
      </View>
    );
  }
}
export default streetClothes;
