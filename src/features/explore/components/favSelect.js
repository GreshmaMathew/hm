import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Favf} from '../../../styles/Fav';
import Category from '../../../components/Category';
import {ScrollView} from 'react-native-gesture-handler';

class favSelect extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Favf.container1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Favf.container2}>
            <ImageBackground
              source={require('../../../assets/images/banner.png')}
              style={{
                flex: 1,
              }}
              resizeMode="stretch"
            />
          </View>
          <View style={Favf.container3}>
            <View style={Favf.container4}>
              <Text style={Favf.textstyle2}>New</Text>
              <Text style={Favf.textstyle3}>You've never seen it before!</Text>
            </View>
            <View style={Favf.container5}>
              <Text style={Favf.textstyle1}>View all</Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category imageuri={require('../../../assets/images/shop_1.png')} />
            <Category imageuri={require('../../../assets/images/shop_2.png')} />
            <Category imageuri={require('../../../assets/images/shop_7.png')} />
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
export default favSelect;
