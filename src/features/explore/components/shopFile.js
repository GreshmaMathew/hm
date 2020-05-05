import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Shop} from '../../../styles/Shop';
import {ScrollView} from 'react-native-gesture-handler';
import List from '../../../components/List';
class shopFile extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Shop.container1}>
        <View style={Shop.container2}>
          <View style={Shop.container3}>
            <Image
              source={require('../../../assets/images/icon_1.png')}
              style={Shop.icon1}
            />
          </View>
          <View style={Shop.container4}>
            <Text style={Shop.textstyle}>Categories</Text>
          </View>
          <View style={Shop.container5}>
            <Image
              source={require('../../../assets/images/search1.png')}
              style={Shop.search}
            />
          </View>
        </View>
        <View style={Shop.container6}>
          <View style={Shop.container7}>
            <TouchableOpacity onPress={() => navigate('WOMENFILE')}>
              <Text style={Shop.textstyle1}>VIEW ALL ITEMS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Shop.container8}>
          <Text style={Shop.textstyle2}>Choose category</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <List listitem="Tops" />
          <List listitem="Shirts & Blouses" />
          <List listitem="Cardigans & Sweaters" />
          <List listitem="Blazers" />
          <List listitem="Outerwear" />
          <List listitem="Pants" />
          <List listitem="Shorts" />
          <List listitem=" Knitwear" />
          <List listitem=" Dresses" />
          <List listitem=" Skirts" />
          <List listitem=" Blazers" />
          <List listitem="Cardigans & Sweaters" />
          <List listitem="Blazers" />
          <List listitem="Outerwear" />
          <List listitem="Pants" />
        </ScrollView>
      </View>
    );
  }
}
export default shopFile;
