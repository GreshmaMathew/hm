import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Fasion} from '../../../styles/Fasion';
import Category from '../../../components/Category';
class fasionSale extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Fasion.container1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Fasion.container2}>
            <ImageBackground
              source={require('../../../assets/images/wallpaper.png')}
              style={{
                flex: 1,
              }}
              resizeMode="stretch">
              <View style={Fasion.container14}>
                <Text style={Fasion.textstyle}>Fashion{'\n'}sale</Text>
              </View>
              <View style={Fasion.container15}>
                <TouchableOpacity onPress={() => navigate('STREETFILE')}>
                  <View style={Fasion.container13}>
                    <Text style={Fasion.textstyle2}>Check</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={Fasion.container3}>
            <View style={Fasion.container6}>
              <Text style={Fasion.textstyle4}>New</Text>
              <Text style={Fasion.textstyle5}>
                You've never seen it before!
              </Text>
            </View>
            <View style={Fasion.container7}>
              <Text style={Fasion.textstyle3}>View all</Text>
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
export default fasionSale;
