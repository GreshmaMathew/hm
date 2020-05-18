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
import Category from '../../../components/Category';
import {Collection} from '../../../styles/Collection';
import Sale from '../../../components/Sale';
class collectionFile extends Component {
  render() {
    return (
      <View style={Collection.container1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Collection.container2}>
            <ImageBackground
              source={require('../../../assets/images/cover.png')}
              style={Collection.container7}
              resizeMode="stretch">
              <View style={Collection.container8}>
                <Text style={Collection.textstyle}>Street clothes</Text>
              </View>
            </ImageBackground>
          </View>

          <View style={Collection.container3}>
            <View style={Collection.container9}>
              <Text style={Collection.textstyle1}>Sale</Text>
              <Text style={Collection.textstyle2}>Super summer sale</Text>
            </View>
            <View style={Collection.container9}>
              <Text style={Collection.textstyle3}>View all</Text>
            </View>
          </View>

          <View style={Collection.container4}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Sale
                imageuri={require('../../../assets/images/shop_7.png')}
                text1="-20%"
                text2="Dorothy perkins"
                text3="Evening Dress"
                text4="15$"
                text5="12$"
                heart={require('../../../assets/images/heart1.png')}
                star1={require('../../../assets/images/star.png')}
                star2={require('../../../assets/images/star.png')}
                star3={require('../../../assets/images/star.png')}
                star4={require('../../../assets/images/star.png')}
                star5={require('../../../assets/images/star.png')}
                rate="(10)"
              />
              <Sale
                imageuri={require('../../../assets/images/shop_8.png')}
                text1="-15%"
                text2="Sitlly"
                text3="Sport Dress"
                text4="22$"
                text5="19$"
                heart={require('../../../assets/images/heart2.png')}
                star1={require('../../../assets/images/star.png')}
                star2={require('../../../assets/images/star.png')}
                star3={require('../../../assets/images/star.png')}
                star4={require('../../../assets/images/star.png')}
                star5={require('../../../assets/images/star.png')}
                rate="(10)"
              />
              <Sale
                imageuri={require('../../../assets/images/shop_9.png')}
                text1="-5%"
                text2="T-shirt"
                text3="Casual"
                text4="18$"
                text5="12$"
                heart={require('../../../assets/images/heart1.png')}
                star1={require('../../../assets/images/star.png')}
                star2={require('../../../assets/images/star.png')}
                star3={require('../../../assets/images/star.png')}
                star4={require('../../../assets/images/star.png')}
                star5={require('../../../assets/images/star.png')}
                rate="(10)"
              />
            </ScrollView>
          </View>
          <View style={Collection.container5}>
            <View style={Collection.container9}>
              <Text style={Collection.textstyle1}>New</Text>
              <Text style={Collection.textstyle2}>
                You've never seen it before!!
              </Text>
            </View>
            <View style={Collection.container9}>
              <Text style={Collection.textstyle3}>View all</Text>
            </View>
          </View>
          <View style={Collection.container6}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Category
                imageuri={require('../../../assets/images/shop_1.png')}
              />
              <Category
                imageuri={require('../../../assets/images/shop_2.png')}
              />
              <Category
                imageuri={require('../../../assets/images/shop_5.png')}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default collectionFile;
